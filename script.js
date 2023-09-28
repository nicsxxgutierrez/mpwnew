// Header Toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed('.auto-input',{
    strings: ['BSIT Student!'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true,
})
