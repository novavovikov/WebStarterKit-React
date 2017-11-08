import express from 'express';
const router = express.Router();

import userController from '../db/controllers/user';
import artistController from '../db/controllers/artist';

router.get('/', (req, res) => {
    res.sendStatus(200);
});

//artists
router.get('/artists', artistController.all);
router.post('/artists', artistController.create);
router.get('/artists/:id', artistController.findById);
router.put('/artists/:id', artistController.update);
router.delete('/artists/:id', artistController.delete);

module.exports = router;