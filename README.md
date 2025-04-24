# Session Authentication Project

A TypeScript-based backend authentication system using Express and Drizzle ORM.

## Overview

This project implements secure session-based authentication for web applications. It uses Express.js as the web framework, Drizzle ORM for database operations, and express-session for session management.

## Features

- User registration and login
- Session-based authentication
- TypeScript for type safety
- Drizzle ORM for database interactions
- Express middleware architecture

## Project Structure

```
├── .gitignore
├── drizzle.config.ts
├── package.json
├── src/
│   ├── controllers/
│   │   └── auth-controller.ts
│   ├── middlewares/
│   │   └── auth.ts
│   ├── routes/
│   │   └── auth-routes.ts
│   ├── schema/
│   │   └── user.ts
│   ├── services/
│   │   └── auth-service.ts
│   ├── types/
│   │   └── express-session.d.ts
│   ├── utils/
│   │   └── db.ts
│   ├── migrate.ts
│   ├── server.ts
│   └── session.ts
└── tsconfig.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Gowthamvegi/sessionAuth.git
cd sessionAuth
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (create a `.env` file in the root directory):
```
DATABASE_URL=your_database_connection_string
SESSION_SECRET=your_session_secret
PORT=3000
```

4. Run database migrations:
```bash
npm run migrate
```

5. Start the server:
```bash
npm run dev
```

## Usage

### Authentication Endpoints

- **Register**: `POST /auth/register`
  - Body: `{ "username": "user", "password": "password", "email": "user@example.com" }`

- **Login**: `POST /auth/login`
  - Body: `{ "username": "user", "password": "password" }`

- **Logout**: `POST /auth/logout`

- **Check Auth Status**: `GET /auth/status`

## Development

Run in development mode with hot reloading:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## Technologies

- Node.js
- Express.js
- TypeScript
- Drizzle ORM
- express-session

## License

[MIT](LICENSE)
