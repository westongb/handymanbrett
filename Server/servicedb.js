const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Abc123890",
    host: "postgres",
    port: 5432,
    database: "services"
});

module.exports = pool;

