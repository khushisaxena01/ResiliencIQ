# ResiliencIQ React Frontend

This is the React.js frontend for the ResiliencIQ web application, providing an interactive dashboard for global risk intelligence, compliance monitoring, SME demand forecasting, and supply chain simulation.

## Features
- Role-based authentication UI (Executive, Analyst, SME)
- Dark-mode enterprise dashboard with glassmorphism effects
- Real-time KPIs and metrics overview
- Interactive charts with Recharts and D3.js
- Supply chain visualization panel with shock simulations
- Compliance monitoring panel with GDPR/CCPA/SOX scores
- SME forecast panel with file upload and AI-powered predictions
- Risk Simulation Lab for multiple disruption scenarios
- Live alerts panel with streaming notifications and filters
- Responsive grid layout with animated transitions

## Installation

Navigate to the frontend directory:
```
cd frontend
```
Install dependencies:
```
npm install
```
Start the development server:
```
npm run dev
```
The application will run on: http://localhost:3000

Build for production:
```
npm run build
```
## Project Structure
```
frontend/
├── node_modules/
├── resilienciq-dashboard/
│   ├── .gitignore          
│   ├── eslint.config
│   ├── vite.config         
│   ├── package
│   ├── package-lock          
│   ├── README.md          
│   └── index.html        
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS styles
├── index.html           # HTML entry point
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```
## Demo Flow

1.Login with any role (Executive / Analyst / SME)
2.Dashboard displays real-time intelligence overview
3.Explore supply chain graph and simulate disruptions
4.Check compliance alerts and monitoring panels
5.Upload CSV in SME Forecast panel to view AI predictions
6.Run scenarios in Risk Simulation Lab
7.Monitor live alerts in real time

## Tech Stack

- React.js + Vite → Component-driven frontend
- Tailwind CSS → Utility-first styling with dark mode
- Recharts + D3.js → Interactive visualizations
- Role-based Auth → UI support for Executive, Analyst, SME roles

## Environment Variables

Frontend may require backend API configuration. Create a `.env` file with:
VITE_API_URL=http://localhost:5000

=======
