let links = document.querySelectorAll('.lin');

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((lin)=>{
            lin.classList.remove('active');
        });
        link.classList.add('active');
    });
});

// hamburger
document.querySelector('.hamburger').addEventListener('click',showNavbar);

function showNavbar(){
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}