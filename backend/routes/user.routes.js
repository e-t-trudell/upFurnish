const UserController = require('../controllers/user.controller');
module.exports = (app) => {
    app.get('/api', UserController.index);
    app.get('/api/users', UserController.getAllUsers);
    app.get('/api/user/:id', UserController.getUser );
    app.post('api/user', UserController.createUser);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/user/:id', UserController.deleteUser);
}