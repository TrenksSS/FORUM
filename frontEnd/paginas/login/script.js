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
var uri = `http://localhost:4500/users/create`
// -------------------------------------------
function ver() {
    if (olho.type == "password") {
        olho.type = "text"
        olho2.type = "text"
        img.src = "../../../assets/invisivel.png"
        img2.src = "../../../assets/invisivel.png"
        console.log("ok")
    } else {
        olho.type = "password"
        olho2.type = "password"
        img.src = "../../../assets/olho.png"
        img2.src = "../../../assets/olho.png"
        console.log("ok 2")
    }
}
function abrirCad() {
    log.style = "display:none"
    cad.style = "display:flex"
}

function cadastrar() {
    console.log("ta aqui")

    let data = {}
    console.log(data)
    let body = {
        "nome_user": document.querySelector("#nome-cadastro-user").value,
        "nickname": document.querySelector("#nick-name").value,
        "data_nasci": document.querySelector("#date").value,
        "senha": document.querySelector("#senha-cadastro-user-confirm").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body);
    if (body.nome_user.length > 0 && body.nickname.length > 0 && body.data_nasci.length > 0 && body.senha.length > 0) {
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 201) {
                    alert("Usuario cadastrado 😀, faça login ✔");
                    window.location.reload();
                } else {
                    alert("Erro ao enviar dados 🙁");
                    window.location.reload();
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗");
        console.log(data)
    }
}

function voltaLog() {
    log.style = "display:flex"
    cad.style = "display:none"
}




const login = () => {
    console.log(nickname.value);
    let usuario = {
        "email": nickname.value,
        "nickname": nickname.value,
        "senha": psw.value
    }

    fetch(uriLogin, {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.json() })
    .then(info => {
        if(info != undefined) {
            window.localStorage.setItem('usuario', nickname);
            window.location.href = "../home/index.html"
        } else {
            alert('Erro no Login, usuário ou  senha incorreta!');
            window.location.reload();
        }
    })
}