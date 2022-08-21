const menuBtn = document.querySelector('.main .under .right-side .header .right .menu-open');
const menuCloseBtn = document.querySelector('.main .under .right-side .header .right .menu-close');
const menu = document.querySelector('.main .under .right-side .header .right .menu');
const preloader = document.querySelector('.loader');


menuBtn.addEventListener('click' , ()=>{
    menuBtn.style.display='none'
    menuCloseBtn.style.display='inline-flex'
    menu.style.display='inline-flex'
    
})
menuCloseBtn.addEventListener('click' , ()=>{
    menuBtn.style.display='block'
    menuCloseBtn.style.display='none'
    menu.style.display='none'
})


setTimeout(()=>{
    preloader.style.display='none';
}
,2000)