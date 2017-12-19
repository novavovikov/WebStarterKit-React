import express from 'express';
const apiRoutes = express.Router();

import userController from '../db/controllers/user';
import sessionController from '../db/controllers/session';


apiRoutes.get('/', (req, res) => {
    res.sendStatus(200);
});
apiRoutes.post('/auth/login', userController.checkUser);
apiRoutes.get('/auth/session', sessionController.checkSession);
apiRoutes.post('/users', userController.create);
apiRoutes.post('/auth/logout', sessionController.destroySession);

//private api
apiRoutes.use(function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token){
        // verifies secret and checks exp
        jwt.verify(token, config.database.secret, function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'Failed to authenticate token.'
        });
    }
});

//users
apiRoutes.get('/users', userController.all);
apiRoutes.delete('/users/:id', userController.delete);

module.exports = apiRoutes;