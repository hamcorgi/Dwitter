import dotenv from 'dotenv';
dotenv.config();
export const config = { //비슷한 type끼리 묶어서 재사용성 up
    host:{
        port: process.env.PORT,
    },
    db:{
        host: process.env.DB_HOST,
        user:process.env.DB_USERID,
        db_table: process.env.DB_TABLE,
        db_password: process.env.DB_PASSWORD,

    },
    jwt: {
        sercretKey: process.env.JWT_SERCRET,
        expiresInSec: process.env.JWT_EXPIRES_SEC
    },
    bcrypt: {
        saltRounds: process.env.BCRYPT_SALT_ROUNDS,
    },
};