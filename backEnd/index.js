const express = require('express');
const cors = require('cors');

const user = require('./src/routes/user.routes');
const post = require('./src/routes/post.routes');
const comentario = require('./src/routes/comentario.routes');
const resposta = require('./src/routes/resposta.routes');





const app = express();
app.use(express.json());
app.use(cors());
app.use(user);
app.use(post);
app.use(comentario);
app.use(resposta);
app.listen(4500, () => {
    console.log("Respondendo na porta fala 300 fala 300.");
});