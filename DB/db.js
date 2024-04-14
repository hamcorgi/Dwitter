import mysql from 'mysql2';
import { config } from '../config.js';

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.db_password,
    database: config.db.db_table,
    
});

export const db = pool.promise();
