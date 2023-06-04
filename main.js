function setup(){
    
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(300,300);
    canvas.center();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/I4f7OVWck/model.json',modelLoaded);

}

function modelLoaded(){
    console.log('Model Loaded!');
}

function draw(){
    image(video,0,0,300,300);
    classifier.classify(video, gotResult);
}

function gotResult(error , results){
if(error){
    console.error(error);
}
else{
console.Log(results);
document.getElementById("result_object_name").innerHTML = results[0].label;
document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}
}


