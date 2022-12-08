const jwt = require('jsonwebtoken');
require('dotenv').config();

const validaAcesso = (req, res, next) => {
    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null) res.status(404).json(err).end();
        else {
            if(data.role_stats === "admin") {
                next();
            }else {
                res.status(401).json({msg:"Erro de permição VOCÊ NÃO É  UM ADM"}).end();
            }
        }
    })

    res.status(200).end();
}

module.exports = {
    validaAcesso
}