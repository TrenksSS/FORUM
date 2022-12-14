const express = require('express');
const router = express.Router();

const RotaComentarios = require("../controllers/comentsController");

router.post("/comentarios/create", RotaComentarios.criarComent);
router.get("/vw_coment", RotaComentarios.listarComent);
router.post("/vw_coment/id", RotaComentarios.listarIdComent);
router.delete("/comentarios/delete", RotaComentarios.excluirComent);
router.put("/comentarios/update", RotaComentarios.editarComent);


module.exports = router;