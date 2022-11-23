const User = require('../models/users');
const conDB = require('../models/bcdDAO');

const criarUser = (req, res) => {
    conDB.query(User.toCreateUsers(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarUsers = (req, res) => {
    conDB.query(User.toReadAllUsers(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarNickname = (req, res) => {
    conDB.query(User.toReadNickname(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const excluirUser = (req, res) => {
    conDB.query(User.toDeleteUsers(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

module.exports = {
    criarUser,
    excluirUser,
    listarUsers,
    listarNickname
}