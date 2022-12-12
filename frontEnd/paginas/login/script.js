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
            "tipo": document.querySelector("#tipo").value,
            "nome": document.querySelector("#nome").value,
            "ingredientes": document.querySelector("#ingredientes").value,
            "modoPreparo": document.querySelector("#modo_preparo").value
        }
        if (arquivo.files.length > 0) {
            body.foto = arquivo.files[0].name;
            enviarArquivo(arquivo);
        } else {
            body.foto = 'default.png';
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };
        options.body = JSON.stringify(body);
        //Envia os dados do formulário para o back-end
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
    nickname.value = "OO"
    psw.value = "1234"
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
        if(info[0] != undefined) {
            console.log(info[0]);
            localStorage.setItem('usuario',JSON.stringify({"id":info[0].id_user, "userName":info[0].nickname, "email":info[0].email,"rola":info[0].role_stats, "img":info[0].avatar}));
            console.log(localStorage);
            window.location.href = "../home/index.html"
        } else {
            alert('Erro no Login, usuário ou  senha incorreta!');
            window.location.reload();
        }
    })
}