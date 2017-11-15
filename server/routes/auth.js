import express from 'express';
const router = express.Router();

import { checkUser } from '../db/controllers/user';

router.get('/', (req, res) => {
    res.send('This page for auth');
});

router.get('/login', (req, res) => {
    
});


module.exports = router;