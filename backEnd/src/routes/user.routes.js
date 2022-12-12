const express = require('express');
const router = express.Router();

const middle = require('../middleware/middleware');
const RotaUsers = require("../controllers/usersController");
const Arquivo = require("../controllers/arquivos");


router.post("/users/create", RotaUsers.criarUser);
router.post("/users/login", RotaUsers.login);
router.post("/arquivos", Arquivo.enviarArquivo);

router.get("/users/read", RotaUsers.listarUsers);
router.get("/users/read/nickname", RotaUsers.listarNickname);
router.put("/users/update", RotaUsers.editarUser);
router.delete("/users/delete", middle.validaAcesso, RotaUsers.excluirUser);

module.exports = router;