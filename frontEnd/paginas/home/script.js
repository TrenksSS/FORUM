var post = document.querySelector(".info")
var x = document.querySelector("#x")
var cora = document.querySelector("#like")
var np = document.querySelector("#novo-post")
var novoPost = document.querySelector(".novo-post-cont")
var resp = document.querySelector(".respostas")

const username = document.querySelector("#user-nick")
const imguser = document.querySelector("#user-img")







var userinfo = JSON.parse(localStorage.getItem("usuario"))
username.innerHTML = userinfo.userName
imguser.src = "../../../assets/repositorio/" + userinfo.img
 const id_user = userinfo.id
 console.log(id_user.value)

 const dtnasci = document.querySelector("#dtEdit")
 const email = document.querySelector("#emailEdit")
 const nick = document.querySelector("#nickEdit")
 const nome = document.querySelector("#nomeEdit")

 nick.value =  userinfo.userName
 email.value =  userinfo.email
 dtnasci.value =  userinfo.nascimento
 nome.value =  userinfo.nome






// ------------------variaveis dos hader-----------------
var hnick = document.querySelector("#uner-nick")
var himg = document.querySelector("#user-img")
// -------------------------------------------------------

// ------------------variaveis dos coments-----------------
var contpost = document.querySelector(".cont")
var post = document.querySelector(".post")

var imgUser = document.querySelector("#post-info-user")
var timePost = document.querySelector("#time")
var nickPost = document.querySelector("#nick-user")
var imgPost = document.querySelector("#img-p")
var conteudoPost = document.querySelector("#comentario-user")
var numeroLike = document.querySelector("#like-n")
var numCom = document.querySelector("#resp-number")
// -------------------------------------------------------

// ------------------variaveis das respostas-----------------
var contResp = document.querySelector(".respostas")
var imgR = document.querySelector("#r-user")
var nickR = document.querySelector("#r-nick")
var timeR = document.querySelector("#r-time")
var tresp = document.querySelector("#c-resp")
// -------------------------------------------------------

var deni = document.querySelector(".denuncia")

// ------------------variaveis dos links-----------------
var uri = `http://localhost:4500/postar/create`
// -------------------------------------------------------

function like() {
    
    if (cora.src == `../../../assets/coracaoN.png`) {
        cora.src = "../../../assets/coracao.png"
    } else {
        cora.src = "../../../assets/coracaoN.png"
    }
}

function newpost() {
    np.style = "font-size:20px"
    setTimeout(() => {np.innerHTML = "Novo post +"}, 350);
    np.style.transition = "0.5s"
}

function newp() {
    np.innerHTML = "+"
    np.style.width = "1px"
    np.style.transition = "1s"
}

function Np(){
    novoPost.style = "display:flex"
}
function ncancel(){
    novoPost.style = "display:none"
}
function ncancel2(){
    deni.style = "display:none"
}
function denun(){
    deni.style = "display:flex"
}
function ainfo(){
    let inf = document.querySelector(".modal-user-info")
    inf.style =  "display:flex"
}
function finfo(){
    let inf = document.querySelector(".modal-user-info")
    inf.style =  "display:none"
}
const corpoComent = document.querySelector(".respostas");

function comentarios(){

    // if(resp.style.display == "none"){
    //     resp.style.display = "flex"
    // }else{
    //     resp.style.display = "none"
    // }
}


function postar(){
    let data = {}

    let body = {
        "id_user":id_user,
        "titulo_post": document.querySelector("#novo_post").value,
        "tipo_post": document.querySelector("#cc").value,
        "img": document.querySelector("#nova-img").value
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    if (body.titulo_post.length > 0 && body.tipo_post.length > 0) {
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 201) {
                    alert("Post Compartilhado 😀")
                    window.location.reload()
                } else {
                    alert("Erro ao enviar Post 🙁")
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}
 
const corpo = document.querySelector(".cont");
function mostrar(){
    fetch("http://localhost:4500/post/read")
    .then(res => { return res.json() })
    .then(coments => {
        coments.forEach(post => {
    
            let novoPost =  document.querySelector(".post").cloneNode(true)
            novoPost.classList.remove('model')
            novoPost.querySelector("#img-p").src = post.img;
            novoPost.querySelector("#comentario-user").innerHTML = post.titulo_post;
            novoPost.querySelector("#nick-user").innerHTML = post.nickname;
            novoPost.querySelector("#like-n").innerHTML = post.curtida;
            novoPost.querySelector("#post-user-img").src = "../../../assets/repositorio/" + post.avatar;
            novoPost.querySelector("#date").innerHTML = post.h_postado.slice(0, 5);
            novoPost.querySelector("#time").innerHTML = post.data_post.slice(0, 10);
            novoPost.querySelector("#btnEx").addEventListener("click", () => { remover(post.id_post); })
            corpo.appendChild(novoPost)
        })
       
    })
}



function update(){
    const arquivo = document.querySelector("#fotoEdit");
    //Monta o corpo da requisição
    const body = {
        "id":id_user,
        "nome_user":nome.value,
        "nickname":nick.value,
        "email":email.value,
        "data_nasci":dtnasci.value
    }
    if (arquivo.files.length > 0) {
        body.avatar = arquivo.files[0].name;
        enviarArquivo(arquivo);
    } else {
        body.avatar = 'jujuba.png';
    }
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    };
    options.body = JSON.stringify(body);
    fetch("http://localhost:4500/users/update", options)
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 200) {

                alert("Usuario Editado 😀 ✔, Faça Login Novamente!")
                window.location.href = "../login/index.html"

            } else {
                alert("Erro ao enviar dados 🙁❌: " + resp)
            }
        })
        .catch(err => {
            alert("❌ Erro ao enviar dados. Erro:" + err)


        });
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


function remover(id) {
    fetch("http://localhost:4500/post/delete/" + id, {
        "method": "DELETE"
    })
        .then(resp => { return resp })
        .then(data => {
        });
        window.location.reload();
}
