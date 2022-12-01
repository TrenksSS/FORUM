const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');
const user = require('./src/routes/user.routes');


const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
app.use(user);


app.listen(4500, () => {
    console.log("Respondendo na porta fala 300 fala 300.");
});