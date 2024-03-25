let cadastrarButton =document.getElementById('buton');

cadastrarButton.addEventListener('click', function(){
    let pegarId =document.getElementById('pegarid').value;
    let pegarUser =document.getElementById('pegaruser').value;
    let pegarSenha =document.getElementById('pegarsenha').value;
    let confSenha =document.getElementById('confsenha').value;

    let inf = {pegarId, pegarUser, pegarSenha, confSenha}
    if (inf === true) {
        window.alert('inf salvas')
        location.href = 'index.html'
    }

})

