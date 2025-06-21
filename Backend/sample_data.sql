-- Insert sample restaurants
INSERT INTO restaurants (name, cuisine, price_range, rating, address, phone)
VALUES 
('Pizza Palace', 'Italian', '$$', 4.5, '123 Main St', '555-1234'),
('Burger Bistro', 'American', '$$', 4.2, '456 Oak Ave', '555-5678'),
('Sushi Spot', 'Japanese', '$$$', 4.7, '789 Pine Blvd', '555-9012'),
('Taco Town', 'Mexican', '$', 4.0, '321 Elm St', '555-3456');

-- Insert sample dishes for Pizza Palace
INSERT INTO dishes (restaurant_id, name, description, price, is_vegetarian, is_vegan, is_gluten_free)
VALUES
(1, 'Margherita Pizza', 'Classic tomato and mozzarella pizza', 12.99, true, false, false),
(1, 'Pepperoni Pizza', 'Pizza with pepperoni toppings', 14.99, false, false, false),
(1, 'Vegetable Pizza', 'Pizza with assorted vegetables', 13.99, true, false, false);

-- Insert sample dishes for Burger Bistro
INSERT INTO dishes (restaurant_id, name, description, price, is_vegetarian, is_vegan, is_gluten_free)
VALUES
(2, 'Classic Burger', 'Beef patty with lettuce, tomato, and cheese', 10.99, false, false, false),
(2, 'Veggie Burger', 'Plant-based patty with toppings', 11.99, true, true, false),
(2, 'Chicken Sandwich', 'Grilled chicken with special sauce', 9.99, false, false, false);

-- Insert sample dishes for Sushi Spot
INSERT INTO dishes (restaurant_id, name, description, price, is_vegetarian, is_vegan, is_gluten_free)
VALUES
(3, 'California Roll', 'Crab, avocado, and cucumber roll', 8.99, false, false, true),
(3, 'Vegetable Roll', 'Assorted vegetables roll', 7.99, true, true, true),
(3, 'Salmon Nigiri', 'Fresh salmon over rice', 5.99, false, false, true);

-- Insert sample dishes for Taco Town
INSERT INTO dishes (restaurant_id, name, description, price, is_vegetarian, is_vegan, is_gluten_free)
VALUES
(4, 'Beef Taco', 'Seasoned beef in corn tortilla', 3.99, false, false, true),
(4, 'Chicken Quesadilla', 'Grilled chicken with cheese in flour tortilla', 6.99, false, false, false),
(4, 'Bean Burrito', 'Refried beans with rice and cheese', 5.99, true, false, false);
