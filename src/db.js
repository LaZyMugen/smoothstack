const { Pool } = require('pg');

const pool = new Pool({
  user: 'smoothstack_user',
  host: 'localhost',
  database: 'smoothstack_db',
  password: 'password123',
  port: 5432,
});

module.exports = pool;
// File: src/index.js