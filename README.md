### What-To-Eat-Tonight

# Contributors : 
Zcher-Kevin / Huwentwent

## Requirement 
```
1. Front-End : React , TypeScript
2. Back-End : Express, TypeScript
3. DataBase : mySQL
4. Style : tailwindCss
```

## Project Detail
-- What to eat tonight .APP --

# Feature
1. Meal Randomizer
- Allow users to click a button to get a random meal suggestion based on available recipes in the MySQL database.
- Filter options: Users can select preferences (e.g., cuisine type, prep time, dietary restrictions like vegetarian, vegan, gluten-free).

2. Recipe Database
- Store a collection of recipes with details like ingredients, cooking instructions, prep time, cuisine type, and nutritional info in MySQL.
- Users can browse recipes by category (e.g., breakfast, dinner, snacks) or search by keyword.

3. User Preferences
- Let users save dietary preferences (e.g., allergies, vegetarian, low-carb) in their profile, stored in a MySQL users table.
- Tailor meal suggestions based on these preferences.

4. Shopping List Generator
- Generate a shopping list based on selected recipes, highlighting missing ingredients.
- Implementation: Compare user pantry (MySQL) with recipe ingredients, output a list via a Vite component, and allow users to download or share it (e.g., as a PDF or text).

5. Favorite Recipes
- Users can save favorite recipes to a personal collection for quick access.

6. Ratings and Reviews
- Allow users to rate and review recipes, with data stored in MySQL.

7. Community Recipe Sharing
- Users can submit their own recipes, which are stored in MySQL and moderated before public display.