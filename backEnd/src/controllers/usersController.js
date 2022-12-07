const User = require('../models/user');
const conDB = require('../dao/bcdDAO');

const jwt = require('jsonwebtoken');
require('dotenv').config();

const criarUser = (req, res) => {
    conDB.query(User.toCreateUsers(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(req.body).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}


const login = (req, res) => {
    const user = req.body;

    conDB.query(User.loginVal(user), (err, result) => {
        if(err == null){
            if(user.nickname == result[0].nickname || user.email == result[0].email && user.senha == result[0].senha){
                let retorno = {
                    "id": result[0].id_user,
                    "nickname": result[0].nickname,
                    "email": result[0].email, 
                    "role_stats": result[0].role_stats
                }
                jwt.sign(retorno, process.env.KEY, (err, token) => {
                    if(err == null) {
                        retorno["token"] = token;
                        res.status(200).json(retorno).end();
                    }else {
                        res.status(404).json(err).end();
                    }
                });   
            }
        }else{
            res.status(404).json(err).end()
        }
    })
}


const listarUsers = (req, res) => {
    conDB.query(User.toReadAllUsers(), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(User.blobToAscii(result)).end();
            else
                res.status(404).end();
        }
    });
}


const listarNickname = (req, res) => {
    conDB.query(User.toReadNickname(req.body), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(User.blobToAscii(result)).end();
            else
                res.status(404).end();
        }
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

const editarUser = (req, res) => {
    conDB.query(User.toUpdateUsers(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    criarUser,
    excluirUser,
    listarUsers,
    listarNickname,
    editarUser,
    login
}