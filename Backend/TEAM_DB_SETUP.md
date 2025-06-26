# Team Database Setup Guide

This guide explains how to set up database access for all team members working on the "What-To-Eat-Tonight" project.

## Option 1: Individual Local Databases (Recommended for Development)

Each team member creates their own local database:

### Steps for Each Team Member:

1. **Install MySQL** on your local machine

2. **Create the database and tables**:

   ```bash
   # Log in as root
   mysql -u root -p

   # Then in MySQL console, create the database
   CREATE DATABASE what_to_eat_db;

   # Exit and run the setup script
   exit
   mysql -u root -p < setup_database.sql
   ```

3. **Create a project-specific MySQL user**:

   ```sql
   CREATE USER 'what_to_eat_user'@'localhost' IDENTIFIED BY 'your-chosen-password';
   GRANT ALL PRIVILEGES ON what_to_eat_db.* TO 'what_to_eat_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

4. **Configure your .env file**:

   ```
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=what_to_eat_db
   DB_USER=what_to_eat_user
   DB_PASSWORD=your-chosen-password
   ```

5. **Load sample data**:
   ```bash
   mysql -u what_to_eat_user -p what_to_eat_db < sample_data.sql
   ```

## Option 2: Shared Development Database

For teams that prefer a single shared database:

### For the Database Administrator:

1. **Configure MySQL for remote access**:

   - Edit MySQL configuration file (my.cnf or my.ini)
   - Change bind-address to server IP or 0.0.0.0
   - Restart MySQL service

2. **Create team member accounts**:

   ```sql
   CREATE USER 'team_member1'@'%' IDENTIFIED BY 'secure-password1';
   GRANT ALL PRIVILEGES ON what_to_eat_db.* TO 'team_member1'@'%';

   CREATE USER 'team_member2'@'%' IDENTIFIED BY 'secure-password2';
   GRANT ALL PRIVILEGES ON what_to_eat_db.* TO 'team_member2'@'%';

   FLUSH PRIVILEGES;
   ```

3. **Configure firewall** to allow MySQL port (3306) traffic

4. **Share connection details** with team:
   ```
   DB_HOST=server-ip-address
   DB_PORT=3306
   DB_NAME=what_to_eat_db
   DB_USER=team_memberN
   DB_PASSWORD=secure-passwordN
   ```

### For Team Members:

1. **Configure your .env file** with the shared database credentials

2. **Test connection**:
   ```bash
   mysql -u your_username -p -h server-ip-address what_to_eat_db
   ```

## Using DBeaver with Team Database

For either option, configure DBeaver:

1. Create a new MySQL connection
2. Enter your specific credentials
3. Test the connection
4. For remote connections, you may need to add:
   - `allowPublicKeyRetrieval=true` in Driver Properties
   - `useSSL=false` or configure SSL properly

## Database Synchronization

When making schema changes:

1. Update `setup_database.sql` in the repository
2. Inform team members to run the updated script
3. Consider using a database migration tool for production
