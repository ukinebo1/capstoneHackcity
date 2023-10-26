
let hamburgerButton= document.querySelector('#hamburger')
let menuButton = document.querySelector('#menu')

hamburgerButton.addEventListener('click', ()=>{
    if(menuButton.classList.contains('hidden')){
        menuButton.classList.remove('hidden')
    }else{
        menuButton.classList.add('hidden')
    }
})