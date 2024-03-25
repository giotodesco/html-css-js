
let linkAva = document.getElementById('link')
let linkPagn =document.getElementById('avaliacao')
let linkList =document.getElementsByClassName('lista3')

linkAva.addEventListener('click', function(c){
    c.preventDefault();
    const avaLia = linkPagn
    avaLia.scrollIntoView({
        top: avaLia.offsetTop
    })

})