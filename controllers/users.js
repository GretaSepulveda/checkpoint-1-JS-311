const users = require('../data')

const listUsers = (req, res) => {
    users.find({})
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

const showUser = (req, res) => {
    users.findById({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

const createUser = (req, res) => {
    users.create(req.body)
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

const updateUser = (req, res) => {
    users.updateOne({ _id: req.params.id }, req.body)
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

const deleteUser = (req, res) => {
    users.deleteOne({ _id: req.params.id })
        .then(result => res.json(result))
        .catch(() => res.sendStatus(500))
}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}
