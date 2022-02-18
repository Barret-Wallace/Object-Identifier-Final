status = "";
objects = [];
function preload(){
    car = loadImage("cartoy.png");
}
function setup(){
    canvas = createCanvas(600,400);
    canvas.position(520,400);
    coco = ml5.objectDetector("coccossd", modelLoaded);
}
function modelLoaded(){
    console.log("The Model is Loaded...  Woo Hoo 😁");
    status = true;
    coco.detect(car, gotResult);
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
    image(car, 0, 0, 300, 300);
    if(status != ""){
        for(i=0; i<objects.length; i++){
            document.getElementById("stats5").innerHTML = "Objects Detected";
            document.getElementById("info5").innerHTML = "Number of objects detected are  " + objects.length;
            fill("black");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}