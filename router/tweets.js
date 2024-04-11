import express from 'express';
import { body } from 'express-validator';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';
import { validate } from '../middleware/validation.js';
import { isAuth } from '../middleware/auth.js';

const validatorTweet = [

    body('text')
    .trim()
    .isLength({ min: 3})
    .withMessage('text sholud be at least 3 characters'),
    validate,

];

const router = express.Router();
// GET /tweets
// GET /tweets?username=:username
router.get('/', isAuth,tweetController.getTweets);
// GET /tweets/:id only one
router.get('/:id',isAuth,tweetController.getTweet);

// POST /tweeets
router.post('/', isAuth,validatorTweet,tweetController.createTweet);
// PUT /tweets/:id
router.put('/:id', isAuth,validatorTweet,tweetController.updateTweet);
// DELETE /tweets/:id
router.delete('/:id', isAuth,tweetController.deleteTweet);

export default router;