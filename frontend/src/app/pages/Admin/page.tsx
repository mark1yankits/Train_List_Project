'use client';
import { useState, useEffect } from 'react';
import styles from '../Admin/AdminPage.module.css';

interface Train {
	id: number;
	trainName: string;
	trainNumber: string;
	departCity: string;
	arrivalCity: string;
	departTime: string;
	arrivalTime: string;
	duration?: string;
}

export default function AdminPage() {
	const [trains, setTrains] = useState<Train[]>([]);
	const [searchQuery, setSearchQuery] = useState('');
	const [formTrain, setFormTrain] = useState<Train>({
		id: 0,
		trainName: '',
		trainNumber: '',
		departCity: '',
		arrivalCity: '',
		departTime: '',
		arrivalTime: '',
		duration: '',
	});
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const fetchTrains = async () => {
		try {
			const response = await fetch('http://localhost:3009/trains');
			if (!response.ok) throw new Error('Не вдалося завантажити розклад');
			const data = await response.json();
			const normalizedTrains = data.map((train: Train) => ({
				id: train.id || 0,
				trainName: train.trainName || '',
				trainNumber: train.trainNumber || '',
				departCity: train.departCity || '', 
				arrivalCity: train.arrivalCity || '',
				departTime: train.departTime || '', 
				arrivalTime: train.arrivalTime || '',
				duration: train.duration || '',
			}));
			setTrains(normalizedTrains);
		} catch (error) {
			console.error(error);
			setError('Не вдалося завантажити розклад. Перевірте сервер.');
		}
	};

	useEffect(() => {
		fetchTrains();
	}, []);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value);
	};

	const filteredTrains = trains.filter(
		(train) =>
			train.trainName.toLowerCase().includes(searchQuery.toLowerCase()) ||
			train.trainNumber.includes(searchQuery) ||
			train.departCity.toLowerCase().includes(searchQuery.toLowerCase()) ||
			train.arrivalCity.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	const handleEdit = (train: Train) => {
		if (!train.id) {
			setError('Невалідний ID потяга');
			return;
		}
		setFormTrain({
			id: train.id,
			trainName: train.trainName || '',
			trainNumber: train.trainNumber || '',
			departCity: train.departCity || '',
			arrivalCity: train.arrivalCity || '',
			departTime: train.departTime || '',
			arrivalTime: train.arrivalTime || '',
			duration: train.duration || '',
		});
		setIsEditing(true);
	};

	const handleDelete = async (id: number) => {
		try {
			const trainExists = trains.find((train) => train.id === id);
			if (!trainExists) {
				throw new Error(`Потяг з ID ${id} не знайдено в локальному списку`);
			}

			const response = await fetch(`http://localhost:3009/trains/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(
					`Не вдалося видалити потяг: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`,
				);
			}

			await fetchTrains();
			setError(null);
		} catch (error: any) {
			console.error('Error in handleDelete:', error);
			setError(error.message || 'Не вдалося видалити потяг. Перевірте сервер.');
		}
	};

	const handleAddOrUpdateTrain = async () => {
		try {
			if (
				!formTrain.trainName ||
				!formTrain.trainNumber ||
				!formTrain.departCity ||
				!formTrain.arrivalCity
			) {
				throw new Error('Заповніть усі обов’язкові поля');
			}

			console.log('Sending request:', {
				url: isEditing
					? `http://localhost:3009/trains/${formTrain.id}`
					: 'http://localhost:3009/trains',
				method: isEditing ? 'PUT' : 'POST',
				body: {
					trainName: formTrain.trainName,
					trainNumber: formTrain.trainNumber,
					departCity: formTrain.departCity,
					arrivalCity: formTrain.arrivalCity,
					departTime: formTrain.departTime,
					arrivalTime: formTrain.arrivalTime,
					duration: formTrain.duration,
				},
			});

			const response = await fetch(
				isEditing
					? `http://localhost:3009/trains/${formTrain.id}`
					: 'http://localhost:3009/trains',
				{
					method: isEditing ? 'PUT' : 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						trainName: formTrain.trainName,
						trainNumber: formTrain.trainNumber,
						departCity: formTrain.departCity,
						arrivalCity: formTrain.arrivalCity,
						departTime: formTrain.departTime,
						arrivalTime: formTrain.arrivalTime,
						duration: formTrain.duration || undefined,
					}),
				},
			);

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				console.error('Error response:', errorData);
				throw new Error(
					`Не вдалося зберегти потяг: ${response.status} ${response.statusText} ${JSON.stringify(errorData)}`,
				);
			}

			await fetchTrains();
			setFormTrain({
				id: 0,
				trainName: '',
				trainNumber: '',
				departCity: '',
				arrivalCity: '',
				departTime: '',
				arrivalTime: '',
				duration: '',
			});
			setIsEditing(false);
			setError(null);
		} catch (error: any) {
			console.error('Error in handleAddOrUpdateTrain:', error);
			setError(error.message || 'Не вдалося зберегти потяг. Перевірте сервер.');
		}
	};

	const handleCancelEdit = () => {
		setFormTrain({
			id: 0,
			trainName: '',
			trainNumber: '',
			departCity: '',
			arrivalCity: '',
			departTime: '',
			arrivalTime: '',
			duration: '',
		});
		setIsEditing(false);
	};

	return (
		<div className={styles.adminContainer}>
			<h2 className={styles.title}>Адмін-сторінка</h2>

			{error && <div className={styles.error}>{error}</div>}

			<input
				type="text"
				placeholder="Пошук потягів..."
				value={searchQuery}
				onChange={handleSearch}
				className={styles.searchInput}
			/>

			<table className={styles.trainTable}>
				<thead>
					<tr>
						<th>Назва</th>
						<th>Номер потяга</th>
						<th>Відправлення</th>
						<th>Прибуття</th>
						<th>Дії</th>
					</tr>
				</thead>
				<tbody>
					{filteredTrains.map((train) => (
						<tr key={train.id}>
							<td>{train.trainName}</td>
							<td>{train.trainNumber}</td>
							<td>
								{train.departCity} - {train.departTime}
							</td>
							<td>
								{train.arrivalCity} - {train.arrivalTime}
							</td>
							<td>
								<button
									onClick={() => handleEdit(train)}
									className={styles.editButton}
								>
									Редагувати
								</button>
								<button
									onClick={() => handleDelete(train.id)}
									className={styles.deleteButton}
								>
									Видалити
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			<h3 className={styles.formTitle}>
				{isEditing ? 'Редагувати потяг' : 'Додати новий потяг'}
			</h3>
			<div className={styles.form}>
				<input
					type="text"
					placeholder="Назва потяга"
					value={formTrain.trainName}
					onChange={(e) =>
						setFormTrain({ ...formTrain, trainName: e.target.value })
					}
					className={styles.formInput}
				/>
				<input
					type="text"
					placeholder="Номер потяга"
					value={formTrain.trainNumber}
					onChange={(e) =>
						setFormTrain({ ...formTrain, trainNumber: e.target.value })
					}
					className={styles.formInput}
				/>
				<input
					type="text"
					placeholder="Місто відправлення"
					value={formTrain.departCity}
					onChange={(e) =>
						setFormTrain({ ...formTrain, departCity: e.target.value })
					}
					className={styles.formInput}
				/>
				<input
					type="text"
					placeholder="Місто призначення"
					value={formTrain.arrivalCity}
					onChange={(e) =>
						setFormTrain({ ...formTrain, arrivalCity: e.target.value })
					}
					className={styles.formInput}
				/>
				<input
					type="text"
					placeholder="Час відправлення"
					value={formTrain.departTime}
					onChange={(e) =>
						setFormTrain({ ...formTrain, departTime: e.target.value })
					}
					className={styles.formInput}
				/>
				<input
					type="text"
					placeholder="Час прибуття"
					value={formTrain.arrivalTime}
					onChange={(e) =>
						setFormTrain({ ...formTrain, arrivalTime: e.target.value })
					}
					className={styles.formInput}
				/>
				<input
					type="text"
					placeholder="Тривалість"
					value={formTrain.duration}
					onChange={(e) =>
						setFormTrain({ ...formTrain, duration: e.target.value })
					}
					className={styles.formInput}
				/>

				<button
					onClick={handleAddOrUpdateTrain}
					className={styles.submitButton}
				>
					{isEditing ? 'Оновити' : 'Додати'}
				</button>
				{isEditing && (
					<button onClick={handleCancelEdit} className={styles.cancelButton}>
						Скасувати
					</button>
				)}
			</div>
		</div>
	);
}
