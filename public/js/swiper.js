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
  position=slide[1];
  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="block";
  document.querySelector(".swiper__generateSvg").style.display="none";

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
    document.querySelector(".swiper__generateSvg").style.display="none";

  });
  generate.addEventListener("click", function(){
    sessionStorage.setItem('fractalID', 999);
    sessionStorage.setItem('defaultOrCustom', "custom");
    generate.classList.add('large');
    list.classList.remove('large');
    random.classList.remove('large');
    document.querySelector(".swiper__list").style.display="none";
    document.querySelector(".swiper__generate").style.display="block";
    document.querySelector(".swiper__generateSvg").style.display="none";

  });
  random.addEventListener("click", function(){
    random.classList.add('large');
    list.classList.remove('large');
    generate.classList.remove('large');
    document.querySelector(".swiper__list").style.display="none";
    document.querySelector(".swiper__generate").style.display="none";
    document.querySelector(".swiper__generateSvg").style.display="block";

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
  document.querySelector(".swiper__generateSvg").style.display="none";

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
    classToBe=".swiper__generateSvg";
    position=slide[2];

    if(!random.classList.contains('large'))
    {
      random.classList.add('large');
    }
    list.classList.remove('large');
    generate.classList.remove('large');
  }
  else{
    classToBe=".swiper__generateSvg";

    if(!random.classList.contains('large'))
    {
      random.classList.add('large');
    }
    list.classList.remove('large');
    generate.classList.remove('large');
  }

  document.querySelector(".swiper__list").style.display="none";
  document.querySelector(".swiper__generate").style.display="none";
  document.querySelector(".swiper__generateSvg").style.display="none";

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

class Fractal {
  constructor(iterations, angle, axiom, rule1, rule2, rule3, rule4, rule5) {
    this.iterations = iterations || 0;
    this.angle = angle || 0;
    this.axiom = axiom || 0;
    this.rule1 = rule1 || 0;
    this.rule2 = rule2 || 0;
    this.rule3 = rule3 || 0;
    this.rule4 = rule4 || 0;
    this.rule5 = rule5 || 0;
  }

  setImage(image) {
    this.image = image;
  }
}

const my_canvas = document.getElementById("thecanvas");
const form = document.querySelector('form');
const saveButton = document.getElementById('save__button');
const iterations = document.getElementById('fIter');
const angle = document.getElementById('fAngl');
const axiom = document.getElementById('fAxio');
const rule_1 = document.getElementById('fRule1');
const rule_2 = document.getElementById('fRule2');
const rule_3 = document.getElementById('fRule3');
const rule_4 = document.getElementById('fRule4');
const rule_5 = document.getElementById('fRule5');

trueIfFractalAlreadyExists = false;

let fractals_array = JSON.parse(localStorage.getItem('fractals'));
let defaultFractals_array = JSON.parse(localStorage.getItem('defaultFractals'));


saveButton.addEventListener('click', function(e) {
  e.preventDefault();
  sessionStorage.setItem("fractalID", 999);
  sessionStorage.setItem("defaultOrCustom", "custom");
  let fractal = new Fractal( iterations.value, angle.value, axiom.value, rule_1.value, rule_2.value, rule_3.value, rule_4.value, rule_5.value);

  let fractals_array = JSON.parse(localStorage.getItem('fractals'));
  if (!fractals_array) {
    fractals_array = [];
  }

  image = my_canvas.toDataURL("image/png");
  fractal.setImage(image);

  for (let i = 0; i < fractals_array.length; i++) {
    if (JSON.stringify(fractal) === JSON.stringify(fractals_array[i])) {
      trueIfFractalAlreadyExists = true;
    }
  }

  if (!trueIfFractalAlreadyExists) {
    fractals_array.push(fractal);
    localStorage.setItem('fractals', JSON.stringify(fractals_array));  
  }

  console.log(JSON.parse(localStorage.getItem('fractals')));
  
  
});

console.log(sessionStorage.getItem('fractalID'));

if(sessionStorage.getItem("fractalID") < 999) {
  console.log(sessionStorage.getItem("defaultOrCustom"));
  if (sessionStorage.getItem("defaultOrCustom") === "custom") {
    fractalToDisplay = fractals_array[sessionStorage.getItem("fractalID")];
  
    document.getElementById("fIter").setAttribute("value", fractalToDisplay.iterations);
    document.getElementById("fAngl").setAttribute("value", fractalToDisplay.angle);
    document.getElementById("fAxio").setAttribute("value", fractalToDisplay.axiom);
    document.getElementById("fRule1").setAttribute("value", fractalToDisplay.rule1);
    document.getElementById("fRule2").setAttribute("value", fractalToDisplay.rule2);
    document.getElementById("fRule3").setAttribute("value", fractalToDisplay.rule3);
    document.getElementById("fRule4").setAttribute("value", fractalToDisplay.rule4);
    document.getElementById("fRule5").setAttribute("value", fractalToDisplay.rule5);
  
  } else {
    fractalToDisplay = defaultFractals_array[sessionStorage.getItem("defaultFractalID")];
  
    document.getElementById("fIter").setAttribute("value", fractalToDisplay.iterations);
    document.getElementById("fAngl").setAttribute("value", fractalToDisplay.angle);
    document.getElementById("fAxio").setAttribute("value", fractalToDisplay.axiom);
    document.getElementById("fRule1").setAttribute("value", fractalToDisplay.rule1);
    document.getElementById("fRule2").setAttribute("value", fractalToDisplay.rule2);
    document.getElementById("fRule3").setAttribute("value", fractalToDisplay.rule3);
    document.getElementById("fRule4").setAttribute("value", fractalToDisplay.rule4);
    document.getElementById("fRule5").setAttribute("value", fractalToDisplay.rule5);
  
  }
}

for(let i = 0; i < defaultFractals_array.length; i++) {
    let defaultFractal = document.createElement("div");
    defaultFractal.setAttribute("class", "container__fractal-list--item");
    defaultFractal.setAttribute('id', 'defaultFractal-'+eval(i));
    defaultFractal.onclick = function() {
        sessionStorage.setItem('defaultFractalID', eval(i));
        sessionStorage.setItem('defaultOrCustom', "default");
    }

    let linkToGenerate = document.createElement("a");
    linkToGenerate.setAttribute("id", 'link-for-fractal-' + eval(i));
    linkToGenerate.setAttribute("href", "/editFractals");

    document.getElementById("fractal-list").appendChild(linkToGenerate);
    document.getElementById("link-for-fractal-" + eval(i)).appendChild(defaultFractal);

        
    let img = document.createElement("img");
    img.src = defaultFractals_array[i].image;
    img.width = 100;
    img.height = 100;
    img.alt = "ceva";

    document.getElementById("defaultFractal-"+eval(i)).appendChild(img);
}
