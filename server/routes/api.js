import express from 'express';
const router = express.Router();

import userController from '../db/controllers/user';

router.get('/', (req, res) => {
    res.sendStatus(200);
});
//users
router.get('/users', userController.all);
router.post('/users', userController.create);
router.delete('/users/:id', userController.delete);
router.get('/users/session', userController.checkSession);
router.post('/users/login', userController.checkUser);
router.post('/users/logout', (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
});

module.exports = router;