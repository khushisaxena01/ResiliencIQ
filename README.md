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
   npm run dev
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
# ResiliencIQ - Web Application for Global Risk Compliance and Supply Chain Intelligence (OpenAI Academy x NxtWave Buildathon)

### 1. Introduction
ResiliencIQ is a web-based platform designed to provide predictive risk intelligence, compliance monitoring, and supply chain simulation. The goal is to deliver an enterprise-grade yet accessible solution that empowers decision-makers, SMEs, and regulators to proactively identify vulnerabilities, simulate “what-if” scenarios, and optimize operations. Unlike traditional dashboards that only display descriptive analytics, ResiliencIQ combines real-time data streams, AI-driven forecasting, interactive simulation models, and OpenAI-powered endpoints via OpenAPI to provide actionable intelligence, enabling intelligent responses to real-time scenarios.

### 2. Problem Statement
In today’s volatile global environment, organizations face simultaneous challenges:
- Supply Chain Fragility: Global supply chains are deeply interconnected, yet disruptions (wars, sanctions, pandemics, port closures) cascade unpredictably.
- Compliance Complexity: Enterprises struggle with GDPR, CCPA, and cross-border compliance, with little visibility into how data flows across internal systems.
- SME Inefficiency: Small businesses face huge losses due to understocking/overstocking, lacking tools to forecast demand intelligently.

Current solutions exist in silos — supply chain dashboards, compliance tools, or SME SaaS apps. ResiliencIQ’s unique proposition is to unify all three dimensions into one intelligent, Spark-powered web application, while enabling constructive AI interactions via OpenAPI and OpenAI integration to simulate realistic risk, compliance, and inventory scenarios.

### 3. Why This Idea is Unique
Unified Risk Lens: Integrates compliance, supply chain, and SME forecasting into one holistic platform.
Simulation Capability: Users can test “shock” scenarios (e.g., currency collapse, supplier bankruptcy) and visualize cascading impacts.
Graph + AI Fusion: Combines GraphX modeling with MLlib predictive forecasting and OpenAI-based scenario reasoning for actionable insights.

Multi-Stakeholder Value:

- Executives → Stress-test business continuity.
- Compliance officers → Detect data lineage issues in real time.
- SMEs → Optimize inventory with AI.
- Cloud-Native Web App: Browser-accessible, lightweight, globally deployable.
- Backend Complexity for Resilience: Flask handles AI/ML pipelines and Spark integration, Express.js manages API orchestration, authentication, and real-time pipelines.
- Advanced Authentication: Multi-factor authentication (MFA), role-based access control (Admin, Analyst, SME), encrypted sessions.
- OpenAPI + OpenAI Integration: Exposes interactive endpoints where users can query predictive analytics, simulate compliance shocks, or forecast inventory using OpenAI reasoning. Essential for hackathon demonstration, allows judges and users to test and interact with the system live.

### 4. Core Modules 

1. Supply Chain Intelligence

- GraphX Modeling: Visualize complex supply chain dependencies
- Disruption Simulation: Test impact of various shock scenarios
- Risk Scoring: AI-powered vulnerability assessment

2. Compliance Monitoring

- Real-time Alerts: Instant compliance violation detection
- Data Lineage Tracking: Monitor data flows across systems
- Regulatory Mapping: GDPR, CCPA, and cross-border compliance

3. SME Optimization

- Demand Forecasting: MLlib-powered inventory optimization
- CSV Data Upload: Easy integration with existing systems
- Predictive Analytics: Prevent understocking/overstocking

### 5. Technology Stack

1. Frontend (Web Application)
React.js (Vite) → Fast, component-driven UI.
Tailwind CSS → Dark theme, polished enterprise design.
Recharts/D3.js → Dynamic data visualizations.

2. Backend (APIs & Middleware)
Flask (Python) → AI pipelines, OpenAI integration, Spark jobs.
Express.js (Node) → API routing, authentication, real-time services.
Kafka → Real-time streaming.
Authentication → JWT/OAuth2 with MFA + RBAC.
OpenAPI/Swagger → Interactive hub for OpenAI-enhanced simulations, compliance checks, and forecasts.

3. Data & Processing Layer
Apache Spark:
Spark SQL → Compliance checks and ETL analysis.
GraphX → Dependency graph modeling.
MLlib → SME demand forecasting.
Structured Streaming → Real-time event monitoring.

4. Databases
Microsoft SQL Server 2021 → Structured records.
MongoDB → Unstructured logs, transcripts, supply chain events.
ElasticSearch (optional) → Fast compliance search.

5. Deployment & Monitoring
Docker + Kubernetes → Scalable deployment.
CI/CD → GitHub Actions + ArgoCD.
Monitoring → Prometheus + Grafana.


### 6. Deliverables (Demo-Ready)
Web Application → Dark theme dashboard.
Backend API → Flask + Express + OpenAI integrated endpoints.
OpenAPI/Swagger Hub → Interactive demo-ready endpoints.
Hybrid Database → MongoDB + SQL Server.
CSV Upload → AI Forecast → SME demo.
Simulation Graph → Supply chain shock scenario.
Compliance Alerts Panel → Real-time mock streaming alert.
Authentication Module → JWT + MFA + RBAC.

Frontend: http://localhost:3000
Flask API: http://localhost:5000
Express API: http://localhost:8000

### 7. Conclusion
ResiliencIQ is a next-gen web application unifying global risk intelligence, compliance monitoring, and SME optimization. Its uniqueness lies in predictive resilience intelligence, backend robustness with Flask, Express, Kafka, hybrid databases, and interactive OpenAPI endpoints powered by OpenAI, making it ideal for hackathon presentation.
Tagline: ResiliencIQ – Anticipate, Simulate, and Thrive in Global Uncertainty.


>>>>>>> 38a1849bec933fc1fa408d3021a42d54f6e7fff1
