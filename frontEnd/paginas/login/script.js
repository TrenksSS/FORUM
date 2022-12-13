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
        const arquivo = document.querySelector("#foto");
        //Monta o corpo da requisição
        const body = {
        "nome_user": document.querySelector("#nome-cadastro-user").value,
	    "nickname": document.querySelector("#nick-name").value,
	    "email": document.querySelector("#Email").value,
	    "data_nasci": document.querySelector("#date").value,
	    "senha": document.querySelector("#senha-cadastro-user-confirm").value,
	    "role_stats":"usuario"
        }
        if (arquivo.files.length > 0) {
            body.avatar = arquivo.files[0].name;
            enviarArquivo(arquivo);
        } else {
            body.avatar = 'default.png';
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(body);
        fetch(uri, options)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 201) {
                    alert("Usuario cadastrado 😀, faça login ✔")
                    window.location.reload()
                } else {
                    alert("Erro ao enviar dados 🙁: " + resp)
                }
            })
            .catch(err => {
                alert("❌ Erro ao enviar dados. Erro:" + err)


            });
    }
                   


function voltaLog() {
    log.style = "display:flex"
    cad.style = "display:none"
}




const login = () => {
    // nickname.value = "OO"
    // psw.value = "1234"
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
        if(info[0] =! undefined) {
            console.log(info);
            localStorage.setItem('usuario',JSON.stringify({"nome":info.nome_user,"nascimento":info.data_nasci,"id":info.id, "userName":info.nickname, "email":info.email,"rola":info.role_stats, "img":info.avatar}));
            console.log(localStorage);
            window.location.href = "../home/index.html"
        } else {
            alert(' ❌ Erro no Login, usuário ou  senha incorreta!');
        }
    })
}

function enviarArquivo(arq) {
    const data = new FormData();
    data.append("img", arq.files[0]);
    const options = {
        method: 'POST'
    };
    options.body = data;
    fetch('http://localhost:4500/arquivos', options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp != 200)
                alert("❌ Erro ao enviar imagem, Código HTTP:" + resp);
        })
        .catch(err => console.error(err));
}