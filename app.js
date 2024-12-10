"use strict"

let bars = document.querySelector('.bars')
let barsMenu = document.querySelector('.bars-menu')
let remBtn = document.querySelector('.item-lang i')

bars.addEventListener('click', ()=>{
    barsMenu.style.display = 'block'
})
remBtn.addEventListener('click', ()=>{
    barsMenu.style.display = 'none'
})

let dots = document.querySelectorAll('.fa-circle')
let logo = document.querySelector('.logo h1')
let logoImg = document.querySelector('.logo-img')
let imgs = document.querySelectorAll('.logo-img img')



let rightBtn = document.querySelector('.dots .fa-angle-right')
let leftBtn = document.querySelector('.dots .fa-angle-left')


// let imgIndex = 0
let i = 0;


    
// })



let imgIndex = 0;
imgSlides();

function imgSlides() {
  let i;
  
  for (i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";   
  }

  imgIndex++;

  if (imgIndex > imgs.length) {
    imgIndex = 1
    
}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" hover", "");
  }
  imgs[imgIndex-1].style.display = "block";  
  dots[imgIndex-1].classList.add('hover');
  setTimeout(imgSlides, 3000); 
}

let texts = document.querySelectorAll('.logo p')
let textIndex = 0;
textSlides();

function textSlides(){
  let s; 
    for( s = 0; s < texts.length; s++ ){
        texts[s].style.display = 'none'
    }
    textIndex++;

    if(textIndex > texts.length){
        textIndex = 1
    }

    texts[textIndex-1].style.display = 'block'
    setTimeout(textSlides, 3000);
}

let news = document.querySelectorAll('.logo-box .box-info')
let newIndex = 0;
newSlides();

function newSlides(){
  let n;
  for( n = 0; n < news.length; n++){
    news[i].style.display = 'none'
  }

  newIndex++;

  if(newIndex > news.length){
    newIndex = 1
  }

  news[newIndex-1].style.display = 'block'
  setTimeout(newSlides, 3000)

}

let logoInfos = document.querySelectorAll('.logo h1')
let logoIndex = 0;
logoSlides();


function logoSlides(){
  let a;
  for( a = 0; a < logoInfos.length; a++){
    logoInfos[a].style.display = 'none'
  }

  logoIndex++;

  if(logoIndex > logoInfos.length){
    logoIndex = 1
  }

  logoInfos[logoIndex-1].style.display = 'block'
  setTimeout(logoSlides, 3000)

}


let rightCl = document.querySelectorAll('.box2-oform ul li .fa-angle-right')
let lorem = document.querySelectorAll('.lorem')

rightCl.forEach((btn, i)=>{
  btn.addEventListener('click', ()=>{
    lorem[i].style.display = 'block'
    setTimeout(() => {
      lorem[i].style.display = 'none'
    }, 3000);
  })
})







