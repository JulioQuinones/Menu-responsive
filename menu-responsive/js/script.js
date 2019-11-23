const mostrar = document.getElementById('mostrar')
const menu= document.getElementById('menu')
let cont = 1
mostrar.addEventListener('click', () =>{
    if(cont == 1){
        menu.style.right = "0"
        cont = 0
    }else{
        cont =1
        menu.style.right = "-100%"
    }
})