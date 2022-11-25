const Resp = require('../models/respostas');
const conDB = require('../models/bcdDAO');

const criarResp = (req, res) => {
    conDB.query(Resp.toCreateResp(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarResps = (req, res) => {
    conDB.query(Resp.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const listarRespId = (req, res) => {
    conDB.query(Resp.toReadRespId(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const excluirResp = (req, res) => {
    conDB.query(Resp.toDeleteResp(req.body), (err, result) => {
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
    criarResp,
    excluirResp,
    listarResps,
    listarRespId
}