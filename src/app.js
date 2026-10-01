import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Node.js CI/CD Demo Application",
    status: "running",
  });
});

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

export default app;