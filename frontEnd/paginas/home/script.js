var post = document.querySelector(".info")
var x = document.querySelector("#x")
var cora = document.querySelector("#like")
var np = document.querySelector("#novo-post")


function abrir() {
    post.style = "display:flex"
}
function fechar() {
    post.style = "display:none"
}

function like() {
    console.log("ok")
    if (cora.src == "../../../assets/coracaoN.png") {
        cora.src = "../../../assets/coracao.png"
    } else {
        cora.src = "../../../assets/coracaoN.png"
    }
}

function newpost() {
    np.style = "font-size:20px"
    setTimeout(() => {np.innerHTML = "New Post +"}, 350);
    np.style.transition = "0.5s"
}
function newp() {
    np.innerHTML = "+"
    np.style.width = "1px"
    np.style.transition = "1s"
}