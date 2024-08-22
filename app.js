let closeBtn = document.querySelector('.close-btn i')
let nav = document.querySelector('.navigation')
let hamburger = document.querySelector('.menu-btn i')
 
hamburger.onclick = function(){
    nav.classList.toggle('active')
}
closeBtn.addEventListener('click',()=>{
    nav.style.display = 'none'
    hamburger.addEventListener('click',()=>{
        nav.style.display = 'block';
    })
})


