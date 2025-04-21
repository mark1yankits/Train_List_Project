'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Train {
  id: number;
  trainName: string;
  departCity: string;
  arrivalCity: string;
  departTime: string;
  arrivalTime: string;
  duration: string;
  trainNumber?: string;
}

export default function HomePage() {
  const [trains, setTrains] = useState<Train[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTrains = async () => {
    try {
      const response = await axios.get<Train[]>('http://localhost:3000/trains');
      setTrains(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Помилка при завантаженні поїздів:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrains();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Розклад поїздів</h1>
      {loading ? (
        <p>Завантаження...</p>
      ) : trains.length === 0 ? (
        <p>Поїздів не знайдено.</p>
      ) : (
        <ul>
          {trains.map((train) => (
            <li key={train.id} style={{ marginBottom: '10px' }}>
              {train.trainName} | {train.departCity} → {train.arrivalCity} | 
              Час відправлення: {new Date(train.departTime).toLocaleString()} | 
              Час прибуття: {new Date(train.arrivalTime).toLocaleString()} | 
              Тривалість: {train.duration} | 
              Номер поїзда: {train.trainNumber || 'Немає'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}