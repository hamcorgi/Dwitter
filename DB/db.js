import mysql from 'mysql2';
import { config } from '../config.js';
import { Sequelize } from 'sequelize';

const { host, user, db_table, db_password } = config.db;
export const sequelize = new Sequelize(db_table, user ,db_password,{
    host,
    dialect: 'mysql',
    port: 3306,
    logging: false
})

const pool = mysql.createPool({
    host: config.db.host,
    user: config.db.user,
    password: config.db.db_password,
    database: config.db.db_table,
    
});

export const db = pool.promise();
