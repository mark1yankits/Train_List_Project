'use client';

import { useState } from 'react';
import styles from '../components/LoginFormStyle.module.css';

interface User {
  email: string;
  role: 'user' | 'admin';
  name: string;
  surname: string;
}

interface LoginFormProps {
  onLogin: (user: User, token: string) => void;
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [isLoginMode, setIsLoginMode] = useState(true); // Перемикання між логіном і реєстрацією
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user'); // За замовчуванням user
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);

    // Перевірка на порожні значення
    if (!email || !password || (!isLoginMode && (!name || !surname || !role))) {
      setError('Будь ласка, заповніть всі поля');
      return;
    }

    // Валідація email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Будь ласка, введіть правильний email');
      return;
    }

    if (isLoginMode) {
      // Логін
      try {
        const response = await fetch('http://localhost:3009/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
          throw new Error('Невірний email або пароль');
        }
        const data = await response.json();
        onLogin(
          {
            email: data.user.email,
            role: data.user.role,
            name: data.user.name,
            surname: data.user.surname,
          },
          data.access_token
        );
      } catch (err) {
        setError('Помилка авторизації');
      }
    } else {
      // Реєстрація
      try {
        const response = await fetch('http://localhost:3009/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, name, surname, role }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message.join(', ')); // Вивести всі повідомлення про помилки
        }
        const data = await response.json();
        onLogin(
          {
            email: data.user.email,
            role: data.user.role,
            name: data.user.name,
            surname: data.user.surname,
          },
          data.access_token
        );
      } catch (err) {
        console.error('Registration Error:', err); // Додано для дебагу
      }
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.loginTitle}>{isLoginMode ? 'Avtorizatsiya' : 'Reiestratsiya'}</h2>

      {/* Перемикання між логіном і реєстрацією */}
      <div className={styles.modeToggle}>
        <button
          onClick={() => setIsLoginMode(true)}
          className={isLoginMode ? styles.activeTab : styles.inactiveTab}
        >
          Увійти
        </button>
        <button
          onClick={() => setIsLoginMode(false)}
          className={!isLoginMode ? styles.activeTab : styles.inactiveTab}
        >
          Зареєструватися
        </button>
      </div>

      {/* Форма */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.loginInput}
      />
      <input
        type="password"
        placeholder="Parol"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.loginInput}
      />

      {!isLoginMode && (
        <>
          <input
            type="text"
            placeholder="Im’ya"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.loginInput}
          />
          <input
            type="text"
            placeholder="Prizvyshche"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className={styles.loginInput}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as 'user' | 'admin')}
            className={styles.loginInput}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </>
      )}

      <button onClick={handleSubmit} className={styles.loginButton}>
        {isLoginMode ? 'Uviti' : 'Zareiestruvatysia'}
      </button>
      {error && <p className={styles.loginError}>{error}</p>}
    </div>
  );
}
