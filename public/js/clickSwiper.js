
var pvgButton = document.getElementsByClassName('container__menu__png')[0],
pf=window.getComputedStyle(pvgButton).getPropertyValue('flex-grow'),
pfs=window.getComputedStyle(pvgButton).getPropertyValue('font-size'),
pb=window.getComputedStyle(pvgButton).getPropertyValue('background-color'),
pm=window.getComputedStyle(pvgButton).getPropertyValue('margin-top');

var svgButton = document.getElementsByClassName('container__menu__svg')[0],
sf=window.getComputedStyle(svgButton).getPropertyValue('flex-grow'),
sfs=window.getComputedStyle(svgButton).getPropertyValue('font-size'),
sb=window.getComputedStyle(svgButton).getPropertyValue('background-color'),
sm=window.getComputedStyle(svgButton).getPropertyValue('margin-top');

var bothButton = document.getElementsByClassName('container__menu__both')[0],
bf=window.getComputedStyle(bothButton).getPropertyValue('flex-grow'),
bfs=window.getComputedStyle(bothButton).getPropertyValue('font-size'),
bb=window.getComputedStyle(bothButton).getPropertyValue('background-color'),
bm=window.getComputedStyle(bothButton).getPropertyValue('margin-top');


window.onload= function(){
	pvgButton.classList.add('large');

	pvgButton.addEventListener("click", function(){
		pvgButton.classList.add('large');
		svgButton.classList.remove('large');
    	bothButton.classList.remove('large');
	});
	svgButton.addEventListener("click", function(){
		svgButton.classList.add('large');
		pvgButton.classList.remove('large');
    	bothButton.classList.remove('large');
	});
	bothButton.addEventListener("click", function(){
		bothButton.classList.add('large');
		pvgButton.classList.remove('large');
    	svgButton.classList.remove('large');
	});
}