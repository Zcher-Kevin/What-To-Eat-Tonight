import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import pool from './config/db';
import { getAllRestaurants, getRestaurantById } from './controllers/restaurantController';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic route to test the API
app.get('/', (req: Request, res: Response) => {
  console.log('Received a request at /');
  res.send('What To Eat Tonight API - TypeScript Backend');
});

// Test database connection
app.get('/db-test', async (req: Request, res: Response) => {
  try {
    const connection = await pool.getConnection();
    connection.release();
    res.send('Database connection successful!');
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).send('Failed to connect to database');
  }
});

// Restaurant routes - directly defined here instead of using router
app.get('/api/restaurants', getAllRestaurants);
app.get('/api/restaurants/:id', getRestaurantById);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
