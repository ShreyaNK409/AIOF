function preload()
{
 }

function setup()
{
  canvas=createCanvas(380,380);
  canvas.center();
  video=createCapture(VIDEO);
  video.hide();
 }

function start()
{
    object_detector=ml5.objectDetector("Cocossd",modelLoaded);
    document.getElementById("stat").innerHTML="Detecting objects";
    input=document.getElementById("text_input").value;
}

function modelLoaded()
{
console.log("Model loaded !");
status=true;
}

function draw()
{
    image(video,0,0,380,380);
}