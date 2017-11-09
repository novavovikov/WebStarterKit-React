import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('This page for auth');
});

module.exports = router;