'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PageStyle.module.css';

interface Train {
  id: number;
  trainName: string;
  trainNumber: string;
  departureCity: string;
  arrivalCity: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
}

interface User {
  email: string;
  role: 'user' | 'admin';
  name: string;
  surname: string;
}

export default function UserPage() {
  const [trains, setTrains] = useState<Train[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState<keyof Train | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  // Перевірка авторизації при завантаженні сторінки
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    } else {
      router.push('/');
    }
  }, [router]);

  // Завантаження даних із API
  useEffect(() => {
    if (!token) return;

    const fetchTrains = async () => {
      try {
        const response = await fetch('http://localhost:3009/trains', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Unable to upload data');
        }
        const data: Train[] = await response.json();
        setTrains(data);
        setLoading(false);
      } catch (err) {
        setError('ERROR to upload data');
        setLoading(false);
      }
    };

    fetchTrains();
  }, [token]);

  // Сортування
  const handleSort = (column: keyof Train) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);

    const sortedTrains = [...trains].sort((a, b) => {
      const valueA = a[column];
      const valueB = b[column];
      if (newDirection === 'asc') {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
    setTrains(sortedTrains);
  };

  // Пошук
  const filteredTrains = trains.filter((train) =>
    train.trainName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Вихід із системи
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUser(null);
    setToken(null);
    setTrains([]);
    router.push('/');
  };

  if (loading) {
    return <div className={styles.pageWrapper}>Завантаження...</div>;
  }

  if (error) {
    return <div className={styles.pageWrapper}>{error}</div>;
  }

  return (
    <div className={styles.pageWrapper}>
      <h1 className={styles.pageTitle}>Train schedule</h1>
      <div className={styles.userHeader}>
        <p className={styles.userInfo}>Вітаємо  {user?.name}<br /> Приємного перегляду</p>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Вийти
        </button>
      </div>

      {user?.role === 'admin' && (
        <div className={styles.adminControls}>
          <button className={styles.adminAddButton}>Add train (Admin only)</button>
        </div>
      )}

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Enter train name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchField}
        />
      </div>

      <table className={styles.scheduleTable}>
        <thead>
          <tr className={styles.tableHeaderRow}>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('id')}>
              ID {sortColumn === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('trainName')}>
              Train name {sortColumn === 'trainName' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('trainNumber')}>
              Number {sortColumn === 'trainNumber' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('departureCity')}>
              City departure {sortColumn === 'departureCity' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('arrivalCity')}>
              City arrival {sortColumn === 'arrivalCity' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('departureTime')}>
              Time departure {sortColumn === 'departureTime' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('arrivalTime')}>
              Time arrival {sortColumn === 'arrivalTime' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
            <th className={styles.tableHeaderItem} onClick={() => handleSort('duration')}>
              Duration {sortColumn === 'duration' && (sortDirection === 'asc' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredTrains.map((train) => (
            <tr key={train.id} className={styles.tableRow}>
              <td className={styles.tableCell}>{train.id}</td>
              <td className={styles.tableCell}>{train.trainName}</td>
              <td className={styles.tableCell}>{train.trainNumber}</td>
              <td className={styles.tableCell}>{train.departureCity}</td>
              <td className={styles.tableCell}>{train.arrivalCity}</td>
              <td className={styles.tableCell}>
                {new Date(train.departureTime).toLocaleString()}
              </td>
              <td className={styles.tableCell}>
                {new Date(train.arrivalTime).toLocaleString()}
              </td>
              <td className={styles.tableCell}>{train.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}