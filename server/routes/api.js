import express from 'express';
const router = express.Router();

import userController from '../db/controllers/user';
import sessionController from '../db/controllers/session';

router.get('/', (req, res) => {
    res.sendStatus(200);
});
//users
router.get('/users', userController.all);
router.post('/users', userController.create);
router.delete('/users/:id', userController.delete);

router.get('/auth/session', sessionController.checkSession);
router.post('/auth/login', userController.checkUser);
router.post('/auth/logout', sessionController.destroySession);

module.exports = router;