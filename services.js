
let hamburgerButton= document.querySelector('#hamburger')
let menuButton = document.querySelector('#mobile-menu')
let closeMenu = document.querySelector('.close')

hamburgerButton.addEventListener('click', ()=>{
    if(menuButton.classList.contains('hidden')){
        menuButton.classList.remove('hidden')
    }else{
        menuButton.classList.add('hidden')
    }

    
})

