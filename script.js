const navMobile = () => {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.querySelector('.nav-links');

    hamburger.addEventListener('click', ()=> {
        navBar.classList.toggle('nav-active');

        hamburger.classList.toggle('toggle');
    });

    
}

navMobile();