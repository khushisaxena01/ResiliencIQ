const sql = require('mssql');
const env = require('./env');

const sqlConfig = {
  user: process.env.SQL_SERVER_USER,
  password: process.env.SQL_SERVER_PASSWORD,
  database: process.env.SQL_SERVER_DATABASE,
  server: process.env.SQL_SERVER_SERVER,
  port: parseInt(process.env.SQL_SERVER_PORT, 10) || 1433,
  options: {
    encrypt: false,
    enableArithAbort: true,
  },
};

const connectSQLServer = async () => {
  try {
    await sql.connect(sqlConfig);
    console.log('****\nSQL Server connected successfully\n****');
  } catch (err) {
    console.error('****\nSQL Server connection error:', err.message);
    process.exit(1);
  }
};

module.exports = {
  connectSQLServer,
  sql,
};
