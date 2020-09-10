const menuBTn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBTn.addEventListener('click',()=>{
    if(!menuOpen){
        menuBTn.classList.add('open');
        menuOpen = true;
    }
    else{
        menuBTn.classList.remove('open');
        menuOpen = false;
    }
});