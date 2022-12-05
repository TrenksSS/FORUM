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

const login = (req,res) => {
        conDB.query(User.login(), (err, result) => {
            if (err == null) {
                if (result.length > 0){
                    res.json(User.blobToAscii(result)).end();
                }
                else
                    res.status(404).end();
            }
            jwt.sign(result, process.env.KEY,{expiresIn: '1m'}, function(err, token) {
                if(err == null){
                    data["token"] = token;
                    res.status(200).json(data).end();
                }else{
                    res.status(404).json(err).end();
        
                }
            });
         
        });
    };

    
    


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
    conDB.query(User.toReadNickname(), (err, result) => {
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