const express = require('express');
const router = express.Router();

const RotaPost = require("../controllers/post");



router.post("/postar/create", RotaPost.criarPost);
router.get("/post/read", RotaPost.listarPosts);
router.get("/post/:id", RotaPost.listarId);
router.put("/post/update", RotaPost.editarPost);
router.delete("/post/delete/:id", RotaPost.excluirPost);

module.exports = router;