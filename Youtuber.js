var status = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById('status').innerHTML = "Status = Detecting Objects........"
    model = ml5.objectDetector('cocossd',modelLoaded)
}

function preload(){
    img = loadImage('StokessTwinss.jpeg');
}

function draw(){
    image(img, 0, 0, 640, 420);
}


function gotResult(error, result) {
    if(error){
        console.error(error);
    }
    console.log(result);
}

function modelLoaded(){
    console.log('model loaded');
    status = true;
    model.detect(img, gotResult);
}