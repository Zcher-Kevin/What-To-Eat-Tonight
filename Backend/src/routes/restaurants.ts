import express from 'express';
import { getAllRestaurants, getRestaurantById } from '../controllers/restaurantController';

const router = express.Router();

// Get all restaurants
router.get('/', (req, res) => getAllRestaurants(req, res));

// Get a specific restaurant with its dishes
router.get('/:id', (req, res) => getRestaurantById(req, res));

export default router;
