import jwt from 'jsonwebtoken';
import * as userRepository from '../data/auth.js';
import { config } from '../config.js';
const AUTH_ERROR = { messsage: 'Authentication Error'};


export const isAuth = async (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!(authHeader && authHeader.startsWith('Bearer '))){
        return res.status(401).json(AUTH_ERROR);
    }
    
    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        config.jwt.sercretKey,
        async (error, decoded) => {
            if(error){
                return res.status(401).json({message: "Error"});
            }
            const user = await userRepository.findById(decoded.id);
            if(!user){
                return res.status(401).json({message: "not found user"});
            }
            req.userId = user.id; //req.customData
            next();
        }
    );
};