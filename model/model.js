import express from 'express';
import react from 'react-dom';

const app = express.use();

app.set('view engine', __dirname + './app.js', react);
app.set('');