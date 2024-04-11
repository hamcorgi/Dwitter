import express from 'express';
import {} from 'express-async-errors';
import { body } from 'express-validator';
import { validate } from '../middleware/validation.js';
import * as authController from '../controller/auth.js';
import { isAuth } from '../middleware/auth.js';

const router = express.Router();

const validateCredential = [

        body('username')
        .trim()
        .isLength({min: 3}).withMessage('text should be least 3 character ')
        .notEmpty(),
        body("password")
        .trim()
        .isLength({min: 3}).withMessage('should be least 8, less than 16')
        .notEmpty(),
        validate,

    ];

const validateSignup = [
    ...validateCredential,
    body('name').notEmpty().withMessage('name is Empty'),
    body('email').isEmail().normalizeEmail().withMessage('invalid email'),
    body('url').isURL().withMessage('invalid url')
    .optional({nullable: true, checkFalsy: true}),
    validate
]



// Info of only sepecified user
router.post('/signup',validateSignup,authController.signup);

//user login authenication
router.post('/login',validateCredential, authController.login);

router.get('/me', isAuth, authController.me)

export default router;