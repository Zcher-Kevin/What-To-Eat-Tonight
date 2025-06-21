# What To Eat Tonight - Backend API

A TypeScript Express backend API for the "What To Eat Tonight" application that helps users discover and choose restaurants.

## Setup Instructions

### Prerequisites

- Node.js (v16+)
- MySQL (v8+)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables:

   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     DB_HOST=localhost
     DB_USER=root
     DB_PASSWORD=your_mysql_password
     DB_NAME=what_to_eat_db
     DB_PORT=3306
     PORT=3000
     ```

3. Setup the database:

   ```bash
   npm run setup-db
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Database Schema

The application uses the following database schema:

- **restaurants**

  - id (INT, PK)
  - name (VARCHAR)
  - cuisine (VARCHAR)
  - price_range (VARCHAR)
  - rating (DECIMAL)
  - address (VARCHAR)
  - phone (VARCHAR)
  - created_at (TIMESTAMP)
  - updated_at (TIMESTAMP)

- **dishes**
  - id (INT, PK)
  - restaurant_id (INT, FK)
  - name (VARCHAR)
  - description (TEXT)
  - price (DECIMAL)
  - is_vegetarian (BOOLEAN)
  - is_vegan (BOOLEAN)
  - is_gluten_free (BOOLEAN)
  - created_at (TIMESTAMP)
  - updated_at (TIMESTAMP)

## API Endpoints

- `GET /` - Check if API is running
- `GET /db-test` - Test database connection
- `GET /api/restaurants` - Get all restaurants
- `GET /api/restaurants/:id` - Get a restaurant by ID with its dishes

## Development

- Build: `npm run build`
- Start: `npm start`
- Development mode: `npm run dev`
