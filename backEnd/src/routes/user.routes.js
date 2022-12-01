const express = require('express');
const router = express.Router();

const RotaUsers = require("../controllers/usersController");




router.post("/users/create", RotaUsers.criarUser);
router.get("/users/read", RotaUsers.listarUsers);
router.get("/users/read/nickname", RotaUsers.listarNickname);
router.put("/users/update", RotaUsers.editarUser);
router.delete("/users/delete", RotaUsers.excluirUser);



module.exports = router;