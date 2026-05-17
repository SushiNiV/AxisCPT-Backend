const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL connected to:', process.env.DB_NAME_NEW);
    client.release();
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
})();

module.exports = pool;