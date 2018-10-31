let startX;
let endX;
let slide=[1,2,3];
let position;

window.onload = function(){
  position=slide[1];
  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="none";
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
  }
  else if(position==slide[1]){
    classToBe=".swiper__list"
    position=slide[0];
  }
  else{
    classToBe=".swiper__generate"
      position=slide[1];
  }

  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="none";
  document.querySelector(".swiper__random").style.display="none";

  document.querySelector(classToBe).style.display='inline';
}

function right(){
  let classToBe;
  if(position==slide[0]){
    classToBe=".swiper__generate";
    position=slide[1];
  }
  else if(position==slide[1]){
    classToBe=".swiper__random"
    position=slide[2]
  }
  else{
    classToBe=".swiper__random"
  }

  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="none";
  document.querySelector(".swiper__random").style.display="none";

  document.querySelector(classToBe).style.display='inline';
  }