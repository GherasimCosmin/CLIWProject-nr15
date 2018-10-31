let startX;
let endX;
let slide=[1,2,3];
let position;
var list = document.getElementsByClassName('container__menu__list')[0],
flexBiglist = window.getComputedStyle(list).getPropertyValue('flex-grow');
var generate = document.getElementsByClassName('container__menu__generate')[0],
flexBigGenerate = window.getComputedStyle(generate).getPropertyValue('flex-grow');
var random = document.getElementsByClassName('container__menu__random')[0],
flexBigRandom = window.getComputedStyle(random).getPropertyValue('flex-grow');


window.onload = function(){
  position=slide[1];
  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="block";
  document.querySelector(".swiper__random").style.display="none";

  window.addEventListener('touchstart', function(event){
   startX = event.touches[0].clientX;   
 })

  window.addEventListener('touchend', function(event){
   endX = event.changedTouches[0].clientX;
   handleTouch(startX, endX);
 })
}

function handleTouch(start,end){
  if(end-start > 0){
    left();
  }
  else{
    right();
  }
}

function left(){
  let classToBe;
  if(position==slide[0]){
    classToBe=".swiper__list";

    if(!list.classList.contains('large'))
    {
      list.classList.add('large');
    }

    generate.classList.remove('large');
    random.classList.remove('large');
  }
  else if(position==slide[1]){
    classToBe=".swiper__list";
    position=slide[0];

    if(!list.classList.contains('large'))
    {
      list.classList.add('large');
    }
    generate.classList.remove('large');
    random.classList.remove('large');
  }
  else{
    classToBe=".swiper__generate";
    position=slide[1];

    if(!generate.classList.contains('large'))
    {
      generate.classList.add('large');
    }
    list.classList.remove('large');
    random.classList.remove('large');
  }

  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="none";
  document.querySelector(".swiper__random").style.display="none";

  document.querySelector(classToBe).style.display='block';
}

function right(){
  let classToBe;
  if(position==slide[0]){
    classToBe=".swiper__generate";
    position=slide[1];
    
    if(!generate.classList.contains('large'))
    {
      generate.classList.add('large');
    }
    list.classList.remove('large');
    random.classList.remove('large');
  }
  else if(position==slide[1]){
    classToBe=".swiper__random";
    position=slide[2];

    if(!random.classList.contains('large'))
    {
      random.classList.add('large');
    }
    list.classList.remove('large');
    generate.classList.remove('large');
  }
  else{
    classToBe=".swiper__random";

    if(!random.classList.contains('large'))
    {
      random.classList.add('large');
    }
    list.classList.remove('large');
    generate.classList.remove('large');
  }

  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="none";
  document.querySelector(".swiper__random").style.display="none";

  document.querySelector(classToBe).style.display='block';
}