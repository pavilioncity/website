let nav = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
    if (scrollY > 50 ) {
        if (!nav.classList.contains('over')){
            nav.classList.add('over')
        }
    } else {
        nav.classList.remove('over')
    }
})