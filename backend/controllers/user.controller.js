const User = require('../models/User')
module.exports.index = (request, response) => {
    response.json({message: "Hello upFurnish!"});
}
// create
module.exports.createUser = (request, response) => {
    
    User.create(request.body)
        .then(user => response.status(200).json(user))
        .catch(err => response.status(404).json(err))
}
// findone
module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.json(err));
}
// find all
module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => {
            console.log(users)
            response.json(users)})
        .catch(err => {
            console.log(err)
            response.json(err)
        });
}
// update
module.exports.updateUser = (request, response) => {
    User.updateOne({
        _id: request.params.id},
        request.body, {new:true})
        .then(updatedUser => response.json(updatedUser))
        .catch(err => response.json(err))
}
// delete
module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}