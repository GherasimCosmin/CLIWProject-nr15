let startX;
let endX;
let slide=[1,2,3];
let position;

var list = document.getElementsByClassName('container__menu__list')[0],
flexBigList = window.getComputedStyle(list).getPropertyValue('flex-grow'),
fontSizeList = window.getComputedStyle(list).getPropertyValue('font-size'),
backgroundColorList =window.getComputedStyle(list).getPropertyValue('background-color'),
marginTopList =window.getComputedStyle(list).getPropertyValue('margin-top');

var generate = document.getElementsByClassName('container__menu__generate')[0],
flexBigGenerate = window.getComputedStyle(generate).getPropertyValue('flex-grow'),
fontSizeGenerate = window.getComputedStyle(generate).getPropertyValue('font-size'),
backgroundColorGenerate =window.getComputedStyle(generate).getPropertyValue('background-color'),
marginTopGenerate =window.getComputedStyle(generate).getPropertyValue('margin-top');

var random = document.getElementsByClassName('container__menu__random')[0],
fontSizeRandom = window.getComputedStyle(random).getPropertyValue('font-size'),
backgroundColorRandom =window.getComputedStyle(random).getPropertyValue('background-color'),
flexBigRandom = window.getComputedStyle(random).getPropertyValue('flex-grow'),
marginTopRandom =window.getComputedStyle(random).getPropertyValue('margin-top');


window.onload = function(){
  setup();
  position=slide[1];
  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="block";
  document.querySelector(".swiper__random").style.display="none";

  window.addEventListener('touchstart', function(event){
   startX = event.touches[0].clientX;   
 });

  window.addEventListener('touchend', function(event){
   endX = event.changedTouches[0].clientX;
   handleTouch(startX, endX);
 });
  generate.classList.add('large');

  list.addEventListener("click", function(){
    list.classList.add('large');
    generate.classList.remove('large');
    random.classList.remove('large');
    document.querySelector(".swiper__list").style.display="block";
    document.querySelector(".swiper__generate").style.display="none";
    document.querySelector(".swiper__random").style.display="none";

  });
  generate.addEventListener("click", function(){
    generate.classList.add('large');
    list.classList.remove('large');
    random.classList.remove('large');
    document.querySelector(".swiper__list").style.display="none";
    document.querySelector(".swiper__generate").style.display="block";
    document.querySelector(".swiper__random").style.display="none";

  });
  random.addEventListener("click", function(){
    random.classList.add('large');
    list.classList.remove('large');
    generate.classList.remove('large');
    document.querySelector(".swiper__list").style.display="none";
    document.querySelector(".swiper__generate").style.display="none";
    document.querySelector(".swiper__random").style.display="block";

  });
}

function handleTouch(start,end){
  if(end-start > 0){
    left();
  }
  else if(end-start < 0){
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
var canvas,drawobj;
function setup()
{
  canvas=document.getElementById("thecanvas");
  drawobj = canvas.getContext("2d");
  drawobj.translate(0.5, 0.5);
  cantor(canvas.width/2,canvas.height/2,500,0);
}
function cantor(x, y,len,flag){
  if(len>=1){
    if(flag==0){
      drawline(x,y,x+len,y);
      drawline(x,y,x-len,y);
      cantor(x+len,y,len*0.67,1);
      cantor(x-len,y,len*0.67,1);
    }
    else{
      drawline(x,y,x,y+len);
      drawline(x,y,x,y-len);
      cantor(x,y+len,len*0.67,0);
      cantor(x,y-len,len*0.67,0);
    }
  }
}
function drawline(x,y,x2,y2){
  drawobj.beginPath();
  drawobj.moveTo(x,y);
  drawobj.lineTo(x2,y2);
  drawobj.stroke();
}