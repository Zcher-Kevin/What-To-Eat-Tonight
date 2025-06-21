import { Request, Response } from 'express';
import pool from '../config/db';

// Type workaround for Express route handlers
type RouteHandler = (req: any, res: any) => Promise<any>;

// Get all restaurants
export const getAllRestaurants: RouteHandler = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM restaurants');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ error: 'Failed to fetch restaurants' });
  }
};

// Get a specific restaurant with its dishes
export const getRestaurantById: RouteHandler = async (req, res) => {
  try {
    const id = req.params.id;
    
    // Get restaurant details
    const [restaurants] = await pool.query('SELECT * FROM restaurants WHERE id = ?', [id]);
    
    if ((restaurants as any[]).length === 0) {
      return res.status(404).json({ error: 'Restaurant not found' });
    }
    
    // Get restaurant dishes
    const [dishes] = await pool.query('SELECT * FROM dishes WHERE restaurant_id = ?', [id]);
    
    const restaurant = (restaurants as any[])[0];
    res.json({
      ...restaurant,
      dishes
    });
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    res.status(500).json({ error: 'Failed to fetch restaurant' });
  }
};
