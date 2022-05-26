var status = "";
var Name = document.getElementById("input").value;
var objectName = [];

function preload() {

}

function setup() {
	canvas = createCanvas(600, 400);
	canvas.center();

	video = createCapture(VIDEO);
	video.size(600, 350);
	video.hide();

	objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}


function draw() {
	image(video, 0, 0, 600, 400,);

	for(i=0; i<objectName.length; i++){
		stroke('red')
		fill('red')

		percent = floor(objectName[i].confidence * 100)
		textSize(25)
		text(objectName[i].label + percent + "%",objectName[i].x,objectName[i].y - 20)

		noFill()
		rect(objectName[i].x,objectName[i].y,objectName[i].width - 50,objectName[i].height - 100)

		if(Name == objectName[i].label){
			document.getElementById("name").innerHTML = "Object Found: " + objectName[i].label
		}
	}
}

function Start() {
	objectDetector.detect(video, gotresult);
}

function modelLoaded() {
	console.log("The cocossd model is loaded...");
	document.getElementById("status").innerHTML = "Status: Dectecting Object...";
	var status = "true";
	console.log(status);
}

function gotresult(error, results) {
	if (error) {
		console.log(error);
	} else {
		console.log(results);
		objectName = results;
	}
}