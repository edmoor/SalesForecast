# Sales Forecast Web Application

A React-based web application for forecasting sales, hosted on an AWS EC2 instance using Nginx as a reverse proxy. This project demonstrates a full deployment pipeline on AWS and showcases skills in cloud infrastructure, server configuration, and frontend development with React.

## Live Demo

You can view the deployed application here:
[Sales Forecast Web App](http://18.204.78.221/)

## Project Overview

This application was built using **React** for the frontend, and it’s deployed on **AWS EC2**. The production build is served through **Nginx** as a static web server. The setup involved various steps to ensure a scalable and secure deployment.

## Project Structure

The project structure is organized as follows:


```plaintext
SalesForecast/
├── public/                    # Public assets, including index.html
│   ├── favicon.ico            # Favicon for the app
│   └── index.html             # Main HTML file for React
├── src/                       # Main React source code
│   ├── components/            # React components for dynamic tables and charts
│   │   ├── DynamicTable.js    # Component for dynamic sales data table
│   │   └── ForecastChart.js   # Component for forecast chart visualization
│   ├── App.js                 # Main App component
│   ├── index.js               # Entry point for the React app
│   └── styles.css             # Global styling
├── .gitignore                 # Git ignore file
├── package.json               # Project dependencies and scripts
├── package-lock.json          # Lockfile for exact dependency versions
└── README.md                  # Project documentation
