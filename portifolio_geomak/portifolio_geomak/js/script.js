const imgs = document.querySelector(".container_carrossel");
const img = document.querySelectorAll(".container_carrossel img");

let idx = 0;
let imgWidth = img[0].clientWidth;
const totalImgs = img.length; 

imgs.innerHTML += imgs.innerHTML;

function carrosel() {
    idx++;
    
    imgs.style.transform = `translateX(${-idx * imgWidth}px)`;
    imgs.style.transition = 'transform 0.5s ease-in-out';
    
    if (idx >= totalImgs) {
        setTimeout(() => {
            imgs.style.transition = 'none'; 
            idx = 0; // Reseta o índice
            imgs.style.transform = `translateX(0px)`; 
        }, 500); 
    }
}


window.addEventListener('resize', () => {
    imgWidth = img[0].getBoundingClientRect().width;
});

setInterval(carrosel, 2000);

let navBar = document.querySelector('#header')

document.addEventListener("scroll",()=>{
    let scrollTop = window.scrollY

    if(scrollTop > 0){
        navBar.classList.add("rolar")
    } else{
        navBar.classList.remove("rolar")
    }
})

menuLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        var targetID = this.getAttribute('href');
        var targetSection = document.querySelector(targetID);
        if (targetSection) {
            scrollTo(targetSection);
        }
    });
});


