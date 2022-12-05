const express = require('express');
const router = express.Router();

const RotaRespostas = require("../controllers/respostasController");

router.post("/respostas/create", RotaRespostas.criarResp);
router.get("/respostas/read", RotaRespostas.listarResps);
router.get("/respostas/read/id", RotaRespostas.listarRespId);
router.delete("/respostas/delete", RotaRespostas.excluirResp);
router.put("/respostas/update", RotaRespostas.editarResp);



module.exports = router;