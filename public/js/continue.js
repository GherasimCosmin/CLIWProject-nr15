let fractals_array = JSON.parse(localStorage.getItem('fractals'));

for(let i = 0; i < fractals_array.length; i++) {
    let fractal = document.createElement("div");
    fractal.setAttribute("class", "container__fractal-list--item");
    fractal.setAttribute('id', 'fractal-'+eval(i));
    fractal.onclick = function() {
        sessionStorage.setItem('fractalID', eval(i));
        sessionStorage.setItem('defaultOrCustom', "custom");
    }

    let linkToGenerate = document.createElement("a");
    linkToGenerate.setAttribute("id", 'link-for-fractal-' + eval(i));
    linkToGenerate.setAttribute("href", "/editFractals");

    document.getElementById("fractal-list").appendChild(linkToGenerate);
    document.getElementById("link-for-fractal-" + eval(i)).appendChild(fractal);

        
    let img = document.createElement("img");
    img.src = fractals_array[i].image;
    img.width = 300;
    img.height = 250;
    img.alt = "ceva";

    document.getElementById("fractal-"+eval(i)).appendChild(img);
}
