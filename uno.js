status = "";
objects = [];
function preload(){
    uno = loadImage("lappy.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(520,400);
    coco = ml5.objectDetector("coccossd", modelLoaded);
}
function modelLoaded(){
    console.log("The Model is Loaded...  Woo Hoo 😁");
    status = true;
    coco.detect(uno, gotResult);
}
function gotResult(error, result){
    if(error){
        console.log(error);
        }
        else{
            console.log(result);
            objects = result;
        }
}
function draw(){
    image(uno, 0, 0, 300, 300);
    if(status != ""){
        for(j=0; j<objects.length; j++){
            document.getElementById("stats1").innerHTML = "Objects Detected";
            document.getElementById("info1").innerHTML = "Number of objects detected are  " + objects.length;
            fill("black");
            percent = floor(objects[j].confidence * 100);
            text(objects[j].label + " " + percent + "%", objects[j].x, objects[j].y);
            noFill();
            stroke("red");
            rect(objects[j].x, objects[j].y, objects[j].width, objects[j].height);
        }
    }
}