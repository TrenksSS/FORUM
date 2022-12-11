var post = document.querySelector(".info")
var x = document.querySelector("#x")
var cora = document.querySelector("#like")
var np = document.querySelector("#novo-post")
var novoPost = document.querySelector(".novo-post-cont")
var resp = document.querySelector(".respostas")

// ------------------variaveis dos hader-----------------
var hnick = document.querySelector("#uner-nick")
var himg = document.querySelector("#user-img")
// -------------------------------------------------------

// ------------------variaveis dos posts-----------------
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
        console.log("ok")
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
function comentarios(){
    if(resp.style.display == "none"){
        resp.style.display = "flex"
    }else{
        resp.style.display = "none"
    }
}


function postar(){
    let data = {}

    let body = {
        "titulo_post": document.querySelector("#novo_post").value,
        "tipo_post": document.querySelector("#cc").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body);
    if (body.titulo_post.length > 0 && body.tipo_post.length > 0) {
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 201) {
                    alert("Post Compartilhado 😀");
                    window.location.reload();
                } else {
                    alert("Erro ao enviar Post 🙁");
                    window.location.reload();
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗");
        console.log(data)
    }
}
 
fetch("http://localhost:4500/post/read")
.then(res => { return res.json() })
.then(posts => {
    console.log(posts)
    posts.forEach(post => {
        let novoPost = post.cloneNode(true);
        novoPost.classList.remove("model");

        novoPost.conteudoPost.innerHTML = post.titulo_post;
        novoPost.timePost.innerHTML = post.data_post;

        novoPost.querySelector("button").addEventListener("click", () => {
            window.location.href = "http://127.0.0.1:5500/correcao_ex09/comentarios/index.html?postId=" + post.id;
        })

        contpost.appendChild(novoPost);
    })
})