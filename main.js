Song_1 = "";
Song_2 = "";
LeftWristX = 0;
LeftWristY = 0;
RightWristX = 0;
RightWristY = 0;


function setup(){
    canvas = createCanvas(440, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("poses", gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X ="+ LeftWristX +"Left Wrist Y ="+ LeftWristY);

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("Left Wrist X ="+ RightWristX +"Left Wrist Y ="+ RightWristY);
    }
}

function preload(){
    loadSound("music.mp3");
    loadSound("music2.mp3");
}

function draw(){
    Image(video, 0, 0, 600, 500);
}