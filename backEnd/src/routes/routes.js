const express = require('express');
const router = express.Router();

const RotaUsers = require("../controllers/usersController");
const RotaAdms = require("../controllers/admsController");
const RotaComentarios = require("../controllers/comentsController");
const RotaRespostas = require("../controllers/respostasController");



router.post("/users", RotaUsers.criarUser);
router.get("/users", RotaUsers.listarUsers);
router.get("/users/nickname", RotaUsers.listarNickname);
router.delete("/users", RotaUsers.excluirUser);

router.post("/adms", RotaAdms.criarAdm);
router.get("/adms", RotaAdms.listarAdm);
router.get("/adms/id", RotaAdms.listarId);
router.delete("/adms", RotaAdms.excluirAdm);

router.post("/comentarios", RotaComentarios.criarComent);
router.get("/vw_coment", RotaComentarios.listarComent);
router.get("/vw_coment/id", RotaComentarios.listarIdComent);
router.delete("/comentarios", RotaComentarios.excluirComent);

router.post("/respostas", RotaRespostas.criarResp);
router.get("/respostas", RotaRespostas.listarResps);
router.get("/respostas/id", RotaRespostas.listarRespId);
router.delete("/respostas", RotaRespostas.excluirResp);

module.exports = router;