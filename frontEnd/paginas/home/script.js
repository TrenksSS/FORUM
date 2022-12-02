var post = document.querySelector(".info")
var x = document.querySelector("#x")
var cora = document.querySelector("#like")

function abrir() {
     post.style = "display:flex"
}
function fechar() {
 post.style = "display:none"
}

function like() {
    console.log("ok")
    if(cora.src == "../../../assets/coracaoN.png"){
        cora.src = "../../../assets/coracao.png"
    }else{
        cora.src = "../../../assets/coracaoN.png"
    }
}