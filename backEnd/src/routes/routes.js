const express = require('express');
const router = express.Router();

const RotaUsers = require("../controllers/usersController");
const RotaAdms = require("../controllers/admsController");
const RotaComentarios = require("../controllers/comentsController");


router.post("/users", RotaUsers.criarUser);
router.get("/users", RotaUsers.listarUsers);
router.get("/users/nick", RotaUsers.listarNickname);
router.delete("/users", RotaUsers.excluirUser);

router.post("/adms", RotaAdms.criarAdm);
router.get("/adms", RotaAdms.listarAdm);
router.get("/adms/id", RotaAdms.listarId);
router.delete("/adms", RotaAdms.excluirAdm);

router.post("/comentarios", RotaComentarios.criarComent);
router.get("/vw_coment", RotaComentarios.listarComent);
router.get("/vw_coment/id", RotaComentarios.listarId);
router.delete("/comentarios", RotaComentarios.excluirComent);



module.exports = router;