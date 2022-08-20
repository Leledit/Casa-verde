

let btnFecharPopUp = document.querySelector("#btnFecharPopUp");
let btnCarrinho = document.querySelectorAll(".iconeCarrinhoMenu");
let carrinhoDeCompras = document.querySelector(".carrinho");

btnCarrinho.forEach(btn =>{
    btn.addEventListener("click",()=>{
        carrinhoDeCompras.id = "carrinho-active";
    });
});

btnFecharPopUp.addEventListener("click",()=>{
    carrinhoDeCompras.id = "";
});
