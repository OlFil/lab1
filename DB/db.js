const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'root',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'labdb'
});


pool.query(`create TABLE IF NOT EXISTS person(
    id SERIAL PRIMARY KEY,
    login VARCHAR(255) UNIQUE

);`)

pool.query(`create TABLE IF NOT EXISTS data(
    id SERIAL PRIMARY KEY,
    content TEXT,
    user_login VARCHAR(255),
    FOREIGN KEY (user_login) REFERENCES person (login)
);`)

pool.query(`create TABLE IF NOT EXISTS roles(
    id SERIAL PRIMARY KEY,
    user_login VARCHAR(255),
    FOREIGN KEY (user_login) REFERENCES person (login),
    role VARCHAR(255)
);`)


pool.query(`create TABLE IF NOT EXISTS plagiarism(
    id SERIAL PRIMARY KEY,
    cheat_post INTEGER,
    FOREIGN KEY (cheat_post) REFERENCES data (id),
    orig_post INTEGER,
    FOREIGN KEY (orig_post) REFERENCES data (id),
    percents INTEGER  
);`)

pool.query(`create TABLE IF NOT EXISTS checked(
    id SERIAL PRIMARY KEY,
    check_post INTEGER,
    FOREIGN KEY (check_post) REFERENCES data (id)
);`)


module.exports = pool;