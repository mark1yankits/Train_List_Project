'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from './components/LoginForm';

interface User {
	email: string;
	role: 'user' | 'admin';
	name: string;
	surname: string;
}

export default function HomePage() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState<User | null>(null);
	const [token, setToken] = useState<string | null>(null);
	const router = useRouter();

	useEffect(() => {
		const storedToken = localStorage.getItem('authToken');
		const storedUser = localStorage.getItem('user');
		if (storedToken && storedUser) {
			setToken(storedToken);
			setUser(JSON.parse(storedUser));
			setIsAuthenticated(true);
		}
	}, []);

	const handleLogin = (user: User, token: string) => {
		setUser(user);
		setToken(token);
		localStorage.setItem('authToken', token);
		localStorage.setItem('user', JSON.stringify(user));
		setIsAuthenticated(true);
		router.push('/pages/User');
	};

	const handleViewSchedule = () => {
		if (isAuthenticated) {
			router.push('/pages/User');
		}
	};

	const handleLogout = () => {
		localStorage.removeItem('authToken');
		localStorage.removeItem('user');
		setIsAuthenticated(false);
		setUser(null);
		setToken(null);
	};

	return (
		<div style={{ padding: '20px', textAlign: 'center' }}>
			<h1 style={{ fontSize: '28px', marginBottom: '20px' }}>
				Ласкаво просимо до розкладу поїздів!
			</h1>
			<p style={{ fontSize: '16px', color: '#555', marginBottom: '30px' }}>
				Дізнайтесь розклад поїздів, щоб спланувати свою подорож. Увійдіть, щоб
				переглянути деталі.
			</p>

			{isAuthenticated ? (
				<div>
					<p style={{ fontSize: '16px', marginBottom: '20px' }}>
						Ви увійшли як: {user?.email} ({user?.role})
					</p>
					<button
						onClick={handleViewSchedule}
						style={{
							padding: '10px 20px',
							backgroundColor: '#007bff',
							color: '#fff',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
							marginRight: '10px',
						}}
					>
						Переглянути розклад
					</button>
					<button
						onClick={handleLogout}
						style={{
							padding: '10px 20px',
							backgroundColor: '#dc3545',
							color: '#fff',
							border: 'none',
							borderRadius: '4px',
							cursor: 'pointer',
						}}
					>
						Вийти
					</button>
				</div>
			) : (
				<LoginForm onLogin={handleLogin} />
			)}
		</div>
	);
}
