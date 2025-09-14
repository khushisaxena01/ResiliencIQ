# ResiliencIQ Express Backend

This is the Express.js backend for the ResiliencIQ web application, handling authentication, routing, RESTful APIs, user services, and real-time pipelines.

## Features

- JWT-based authentication
- User management with roles (Admin, Analyst, SME)
- Compliance monitoring endpoints
- Supply chain simulation and graph endpoints
- SME demand forecasting
- API orchestration
- Dual database support (MongoDB for unstructured data, SQL Server for structured data)

## Installation

1. Navigate to the backend directory:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables in `.env` file (see `.env` example).

4. Start the server:

   ```
   npm start
   ```

   For development with auto-reload:

   ```
   npm run server
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and get JWT token

### Users

- `GET /api/users` - Get all users (authenticated)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Compliance

- `GET /api/compliance/alerts` - Get compliance alerts
- `POST /api/compliance/check` - Check compliance

### Supply Chain

- `GET /api/supplychain/graph` - Get supply chain graph
- `POST /api/supplychain/simulate` - Simulate disruption

### SME

- `GET /api/sme/forecast` - Get SME forecast
- `POST /api/sme/upload` - Upload sales data

### API Orchestration

- `POST /api/orchestrate` - Orchestrate API calls
- `GET /api/status` - Get system status

## Database

- MongoDB: Used for unstructured data like logs and events.
- SQL Server: Used for structured financial and compliance records.

## Environment Variables

- `MONGODB_URI` - MongoDB connection string
- `SQL_SERVER_USER` - SQL Server username
- `SQL_SERVER_PASSWORD` - SQL Server password
- `SQL_SERVER_DATABASE` - SQL Server database name
- `SQL_SERVER_SERVER` - SQL Server server address
- `SQL_SERVER_PORT` - SQL Server port
- `JWT_SECRET` - Secret key for JWT
- `PORT` - Server port (default 5000)

## Project Structure

```
backend/
├── config/
│   ├── database.js
│   └── env.js
├── controllers/
│   ├── authController.js
│   ├── userController.js
│   ├── complianceController.js
│   ├── supplyChainController.js
│   ├── smeController.js
│   └── apiController.js
├── middleware/
│   ├── auth.js
│   └── errorHandler.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   ├── complianceRoutes.js
│   ├── supplyChainRoutes.js
│   ├── smeRoutes.js
│   └── apiRoutes.js
├── .env
├── package.json
├── server.js
└── README.md
```
=======
