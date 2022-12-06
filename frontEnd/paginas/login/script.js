const uriLogin = "http://localhost:4500/users/login"
const nickname = document.querySelector("#email-login-user")
const psw = document.querySelector("#senha-login-user")

var olho = document.querySelector(".senha")
var olho1 = document.querySelector(".senha1")
var olho2 = document.querySelector(".senha2")
var img = document.querySelector(".olho")
var img1 = document.querySelector(".olho1")
var img2 = document.querySelector(".olho2")
var cad = document.querySelector(".modal-cadastro")
var log = document.querySelector(".modal-login")

// ---------------------------variaveis login
var user = document.querySelector("#email-login-user")
var userS = document.querySelector("#senha-login-user")

// -------------------------------------------

// ---------------------------variaveis cadastro
var nomeUser = document.querySelector("#nome-cadastro-user")
var nick = document.querySelector("#nick-name")
var userSenha = document.querySelector("#senha-cadastro-user")
var userSenhac = document.querySelector("#senha-cadastro-user-confirm")
var uri = `http://localhost:4500/postar/create`
// -------------------------------------------
function ver() {
    if (olho.type == "password") {
        olho.type = "text"
        olho1.type = "text"
        olho2.type = "text"
        img.src = "../../../assets/invisivel.png"
        img1.src = "../../../assets/invisivel.png"
        img2.src = "../../../assets/invisivel.png"
        console.log("ok")
    } else {
        olho.type = "password"
        olho1.type = "password"
        olho2.type = "password"
        img.src = "../../../assets/olho.png"
        img1.src = "../../../assets/olho.png"
        img2.src = "../../../assets/olho.png"
        console.log("ok 2")
    }
}
function cadastrar() {
    log.style = "display:none"
    cad.style = "display:flex"

    let data = {}

    let body = {
        "id": document.getElementById("vagid").value,
        "tipo": document.getElementById("op").value,
        "chec": document.getElementById("x").value,

        "nomeUser": document.querySelector("#nome-cadastro-user"),
        "nick": document.querySelector("#nick-name"),
        "userSenha": document.querySelector("#senha-cadastro-user"),
        "userSenhac": document.querySelector("#senha-cadastro-user-confirm"),
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body);
    if (body.nomeUser.length > 0 && body.nick.length > 0 && body.userSenha.length > 0 && body.userSenhac.length > 0) {
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 201) {
                    alert("Cliente cadastrado com sucesso");
                    window.location.reload();
                } else {
                    alert("Erro ao enviar dados.");
                    window.location.reload();
                }
            })
            .catch(err => alert("Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios");
    }
}

function voltaLog() {
    log.style = "display:flex"
    cad.style = "display:none"
}

function login() {
    window.location.href = "../home/index.html"
}

<<<<<<< HEAD
=======
 function login(){

    const info = {
        "nickname": nickname.value,
        "senha": psw.value
    }

    fetch(uriLogin, {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.erro == null) {
            window.location.href= "../home/index.html"
        }
    })
}
>>>>>>> e93c557cc69eae8831d2cda5d9982d7283643e66
