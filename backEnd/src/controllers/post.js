const Post = require('../models/post');
const conDB = require('../dao/bcdDAO');


const criarPost = (req, res) => {
    conDB.query(Post.toCreatePost(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(req.body).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarPosts = (req, res) => {
    conDB.query(Post.toReadAllPost(), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(Post.blobToAscii(result)).end();
            else
                res.status(404).end();
        }
    });
}


const listarId = (req, res) => {
    conDB.query(Post.toReadIdPost(req.params), (err, result) => {
        if (err == null) {
            if (result.length > 0)
                res.json(Post.blobToAscii(result)).end();
            else
                res.status(404).end();
        }
    });
}



const excluirPost = (req, res) => {
    conDB.query(Post.toDeletePost(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
} 

const editarPost = (req, res) => {
    conDB.query(Post.toUpdatePost(req.body), (err, result) => {
        if (err == null) {
            res.status(200).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
}

module.exports = {
    criarPost,
    excluirPost,
    listarPosts,
    listarId,
    editarPost
}