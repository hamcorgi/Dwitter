import dotenv from 'dotenv';

export const config = { //비슷한 type끼리 묶어서 재사용성 up
    jwt: {
        sercretKey: process.env.JWT_SERCRET,
        expiresInSec: process.env.JWT_EXPIRES_SEC
    },
    bcrypt: {
        saltRounds: process.env.BCRYPT_SALT_ROUNDS,
    },
};