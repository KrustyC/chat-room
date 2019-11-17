import * as dotenv from 'dotenv';

dotenv.config();

export const env = process.env.ENVIRONMENT;

// App Configuration
export const API_PORT = process.env.API_PORT;
export const appUrl = process.env.APP_URL;
export const jwtSecret = process.env.JWT_SECRET;

// Database Configuration
export const dbConfig = {
  connectionString: process.env.DB_CONNECTION_STRING || null,
  name: process.env.DB_NAME,
  pass: process.env.DB_PASSWORD,
  user: process.env.DB_USER,
};