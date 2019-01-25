let fractals_array = JSON.parse(localStorage.getItem('fractals'));

function download_image(i) {
    let image = fractals_array[i].image;

    var link = document.createElement('a');
    link.download = "fractal-" + eval(i) + ".png";
    link.href = image;
    link.click();

    console.log(image);
}

for(let i = 0; i < fractals_array.length; i++) {
    let fractal = document.createElement("div");
    fractal.setAttribute("class", "container__fractal-list--item");
    fractal.setAttribute('id', 'fractal-'+eval(i));
    fractal.onclick =  function() {
        download_image(i);
    }

    document.getElementById("fractal-list").appendChild(fractal);

        
    let img = document.createElement("img");
    img.src = fractals_array[i].image;
    img.width = 300;
    img.height = 250;
    img.alt = "ceva";

    document.getElementById("fractal-"+eval(i)).appendChild(img);
}
