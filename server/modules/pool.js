const pg = require('pg');
const url = require('url')

let config = {};

config = {
    host: 'localhost',
    port: 5432,
    database: 'cookies_sessions_hooks',
    max: 10,
    idleTimeoutMillis: 3000
};

const pool = new pg.Pool(config);

pool.on('connect', ()=>{
    console.log('Postgresql connected') ;
});

pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool