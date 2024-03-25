let inicioPagina = document.getElementById('principal')
let inicioNav =document.getElementsByClassName('lista1')
let inicioAction =document.getElementById('linkss')

inicioAction.addEventListener('click', function(a){
    a.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const focoAlvo = inicioPagina
    window.scrollTo({
    top: focoAlvo.offsetTop,
    behavior: 'smooth'
})
})
let inicioCardapio =document.getElementById('cardapio')
let inicioNavCardapio =document.getElementsByClassName('lista2')
let inicioActionCardapio=document.getElementById('linksss')

inicioActionCardapio.addEventListener('click', function(b){
    b.preventDefault();
    const targetIds = this.getAttribute('href').substring(1);
    const focoCardapio = inicioCardapio
    window.scrollTo({
        top: focoCardapio.offsetTop,
        behavior: 'smooth'
    })
})

let inicioAvaliacao =document.getElementById('avaliacao')
let inicioNavAvaliacao= document.getElementsByClassName('lista3')
let inicioActionAvaliacao= document.getElementById('link')

inicioActionAvaliacao.addEventListener('click', function(c){
    c.preventDefault();
    const targetidss = this.getAttribute('href').substring(1);
    const focoAvaliacao = inicioAvaliacao
    window.scrollTo({
        top: focoAvaliacao.offsetTop,
        behavior: 'smooth'
    })
})
