const uriLogin = "http://localhost:4500/users/login"
const nickname = document.querySelector("#email-login-user")
const psw = document.querySelector("#senha-login-user")

var olho = document.querySelector(".senha")
var img = document.querySelector(".olho")
var cad = document.querySelector(".modal-cadastro")
var log = document.querySelector(".modal-login")
function ver(){
    if(olho.type == "password"){
        olho.type = "text" 
        img.src = "../../../assets/invisivel.png"
    }else{
        olho.type = "password"
        img.src = "../../../assets/olho.png"
    }
}
 function cadastrar() {
    log.style = "display:none"
    cad.style = "display:flex"
 }

 function voltaLog() {
    log.style = "display:flex"
    cad.style = "display:none"
 }

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
