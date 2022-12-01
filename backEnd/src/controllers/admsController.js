const ADM = require('../models/adms');
const conDB = require('../dao/bcdDAO');

const criarAdm = (req, res) => {
    conDB.query(ADM.toCreateAdm(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarAdm = (req, res) => {
    conDB.query(ADM.toReadAllAdms(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarId = (req, res) => {
    conDB.query(ADM.toReadIdAdm(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const excluirAdm = (req, res) => {
    conDB.query(ADM.toDeleteAdm(req.body), (err, result) => {
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
    criarAdm,
    excluirAdm,
    listarAdm,
    listarId
}