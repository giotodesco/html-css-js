let infId = document.getElementById('inf_text')
let infSnh =document.getElementById('inf_senha')
let infAction = document.getElementById('inf_button')
let infAviso= document.getElementById('aviso')

infAction.addEventLifId.value.trim()stener('click',function(){
        if (in === '' || infSnh.value.trim() === ''){
            infAviso.innerHTML = 'Seu campo está vazio'
        } else {
            infAviso.innerHTML = ''
        }
})

