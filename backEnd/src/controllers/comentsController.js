const Coment = require('../models/comentarios');
const conDB = require('../dao/bcdDAO');

const criarComent = (req, res) => {
    conDB.query(Coment.toCreateComent(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarComent = (req, res) => {
    conDB.query(Coment.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarIdComent = (req, res) => {
    conDB.query(Coment.toReadIdComent(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const excluirComent = (req, res) => {
    conDB.query(Coment.toDeleteComent(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const editarComent = (req, res) => {
    conDB.query(Coment.toUpdateComent(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    criarComent,
    excluirComent,
    listarComent,
    listarIdComent,
    editarComent
}