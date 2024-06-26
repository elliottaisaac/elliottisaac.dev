/* Javascript Fractal Fern Drawer */

// adapted from https://en.wikipedia.org/wiki/Barnsley_fern

//rotates the arrow when the slider thumb is moved
const rotation = document.querySelector("#rot");
rotation.addEventListener("input", () => {
	   const degrees = rotation.value;
       document.querySelector(".arrow").style.transform = `rotate(${degrees}deg)`; 
	   document.querySelector("canvas").style.transform = `rotate(${degrees}deg)`; 
});

//changes the background style of the body while the checkbox is checked
document.querySelector("#check").addEventListener("input", () => {
	if (document.querySelector("#check").checked == true){
		document.querySelector("body").style.backgroundColor = "white";
	}
	else{document.querySelector("body").style.backgroundColor = "#1c1b1b";}
});

//hides the control box and creates a show controls button
document.querySelector("#show").style.display = "none";
document.querySelector("#hide").addEventListener("click", () => {
			document.querySelector(".controls").style.opacity= "0";
			const show = document.querySelector("#show");
			show.style.display="block";
});

//shows the control box
document.querySelector("#show").addEventListener("click", () => {
		document.querySelector(".controls").style.opacity= "1.0";
		document.querySelector("#show").style.display = "none";
});

const colors = document.querySelectorAll(".sliders input");
for(let i = 0; i < colors.length; i++){
	colors[i].addEventListener("input", () => {
		displayColors();
	});
}

//reloads the DOM to clear the canvas
document.querySelector("#reset").addEventListener("click", () => { location.reload(); });	

//call Draw function
document.querySelector("#draw").addEventListener("click", Draw);

// colors the big circle dot and the rotational arrow to show the combined color of the 3 RGB values
function displayColors(){
	const selectedColor = `rgb(${colors[0].value}, ${colors[1].value}, ${colors[2].value})`;
    document.querySelector("#color-display").style.backgroundColor = selectedColor;   
	document.querySelector(".arrow").style.borderColor = selectedColor;
	fillSliders();
}
displayColors();

//colors the slider rails with a gradient that divides at the point of the thumb
function fillSliders(){
	for(i = 0; i < colors.length; i++){
		const val = colors[i].value / 255; //obtains the thumb location along the slider 
		const percent = val * 100; //converts the decimal to a %
		switch(i){
			case 0:
				colors[i].style.background = `linear-gradient(to right, rgb(${colors[i].value},0,0) ${percent}%, #cccccc 0%)`; break;
			case 1:
				colors[i].style.background = `linear-gradient(to right, rgb(0,${colors[i].value},0) ${percent}%, #cccccc 0%)`; break; 
			case 2:
				colors[i].style.background = `linear-gradient(to right, rgb(0,0,${colors[i].value}) ${percent}%, #cccccc 0%)`; break;
		}
	}
}

//Draw on HTML canvas
const canvasElement = document.querySelector("#canvas");
const context = canvasElement.getContext("2d");
canvasElement.height = 1500;
canvasElement.width = 1500;	
let X = 0;
let Y = 0;
let x, y;

function Draw(){
	context.clearRect(0, 0, canvas.width, canvas.height);
	for(let n = 1; n <= 1000000; n++){	
		const dot = setTimeout( () => { 
			r = Math.random()*100;
			if(r < 1.0){
				x = 0;
				y = 0.16 * Y;
			}
			else if(r < 86.0){
				x = (0.85 * X) + (0.04 * Y);
				y = (-0.04 * X) + (0.85 * Y + 1.6);
			}
			else if(r < 93.0){
				x = (0.2 * X) - (0.26 * Y);
				y = (0.23 * X) + (0.22 * Y + 1.6);
			}
			else{
				x = (-0.15 * X) + (0.28 * Y);
				y = (0.26 * X) + (0.24 * Y + 0.44);
			}
			X = x;
			Y = y;
			context.fillStyle = `rgb(${red.value}, ${green.value}, ${blue.value})`;
			context.fillRect(x * 125 + 375, y * 125 + 225, 1,1);
			document.querySelector("p").innerHTML = `dots: ${n}`;
		}, 1);	
	}
}

// Save | Download image
document.getElementById('save').addEventListener("click", function(e) {
    const dataURL = canvasElement.toDataURL("image/png", 1.0);
    downloadImage(dataURL, 'fractal-fern.png');
});
function downloadImage(data, filename) {
    const a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}