# Node.js CI/CD Demo Application

## Project Overview

This project demonstrates a complete CI/CD pipeline using GitHub Actions, Node.js, Docker, and Docker Hub.

The pipeline automatically runs whenever code is pushed to the `main` branch.

## Technologies Used

* Node.js
* Express.js
* GitHub
* GitHub Actions
* Docker
* Docker Hub
* Node.js Test Runner
* Supertest

## Application Features

* Express.js web application
* Health check endpoint
* Automated application testing
* Docker containerization
* Automated Docker image build and push

## Application Endpoints

### Home

```text
GET /
```

Returns information about the application.

### Health Check

```text
GET /health
```

Returns the application health status.

## CI/CD Pipeline

The GitHub Actions workflow performs the following steps:

1. Code is pushed to the `main` branch.
2. GitHub Actions starts an Ubuntu runner.
3. The repository is checked out.
4. Node.js 22 is configured.
5. Dependencies are installed using `npm ci`.
6. Automated tests are executed.
7. Docker image is built.
8. GitHub Actions securely logs in to Docker Hub using GitHub Secrets.
9. The Docker image is pushed to Docker Hub.

## Docker Image

Docker Hub repository:

`itsurvey6/nodejs-demo-app`

Image tag:

`latest`

## Project Structure

```text
nodejs-demo-app/
├── .github/
│   └── workflows/
│       └── main.yml
├── src/
│   ├── app.js
│   └── server.js
├── tests/
│   └── app.test.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## How to Run Locally

Install dependencies:

```bash
npm ci
```

Run tests:

```bash
npm test
```

Start the application:

```bash
npm start
```

The application runs on:

```text
http://localhost:3000
```

## CI/CD Workflow

```text
Developer
   ↓
Git Push
   ↓
GitHub Repository
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
Run Tests
   ↓
Docker Build
   ↓
Docker Hub
```

## Security

Docker Hub authentication is handled using GitHub repository secrets and variables. Sensitive credentials are not stored directly in the workflow file.
