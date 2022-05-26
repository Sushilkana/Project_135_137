var status = "";
var Name = document.getElementById("input").value;
var objectName = [];

function preload(){
	
}

function setup(){
	canvas = createCanvas(600,350);
	canvas.center();
	
	video = createCapture(VIDEO);
	video.size(600,350);
	video.hide();
	
	objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}


function draw(){
	image(video,0,0,600,350,);
			objectDetector.detect(video, gotresult);
}

function Start(){
	
}

function modelLoaded(){
	console.log("The cocossd model is loaded...");
	document.getElementById("status").innerHTML = "Status: Dectecting Object...";
	var status = "true";
	console.log(status);
}

function gotresult(error,results){
	if(error){
		console.log(error);
	} else{
		console.log(results);
		objectName = results;
	}
}