# Train Schedule Application

## Description

This is a full-stack train schedule application that allows users to manage train schedules, with features like authentication, 
CRUD operations (create, read, update, delete), and sorting of schedule data. The application is divided into a frontend and a backend, 
with the frontend built using React.js and the backend powered by Nest.js. The application uses PostgreSQL as the database.

## Features

### Authentication
- Basic authentication using JWT tokens (login, registration).

### CRUD Operations
- Ability to create, read, update, delete, and sort train schedules.

### Search
- A search field to easily find specific train schedules.

### Admin & User Pages
- The admin page allows full control over the schedules, while the user page is read-only with the option to search and view schedules.

### Responsive UI
- The frontend is designed to be responsive and functional on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Next.js
- **Backend**: Node.js, Nest.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: The frontend is deployed on Vercel, but the backend is not yet deployed to a cloud platform (plans for future deployment on Heroku or AWS).

## Installation

### Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/yourusername/train-list-project.git
```

### 2. Navigate to the backend directory and install dependencies:
```bash
  cd backend
npm install
```

### 3. Set up PostgreSQL and configure your database credentials in the 
```bash
src/config/database.service.ts 
```

### 4. Start the backend locally:
```bash
  npm run start:dev
```
### 5.Navigate to the frontend directory and install dependencies:
```bash
cd frontend
npm install
```
### 6.Start the frontend locally:
```bash
npm run dev
```
# Known Issues


- The backend is not yet deployed on the server, but it is working locally via npm run start:dev. Deployment to a cloud platform (such as Heroku or AWS) is planned for the near future.

-The application currently has a basic version with minimal UI/UX design. This can be improved in the future.

-More complex search queries and filtering can be optimized for database performance.




# Future Enhancements

Backend deployment to a cloud platform (e.g., Heroku or AWS).

Optimization of search functionality and database queries.

Improve UI/UX design for a more polished user experience.


