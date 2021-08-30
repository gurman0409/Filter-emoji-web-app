chainx = 0;
chainy = 0;

glassx = 0;
glassy = 0;

hatx = 0;
haty = 0;
function preload() {
    glass = loadImage('https://i.postimg.cc/9QNKxssR/unnamed.png');
    hat = loadImage('https://i.postimg.cc/mg2wtsTc/cowboy-hat-260nw-112549814-removebg-preview.png');
    chain = loadImage('https://i.postimg.cc/G3Vz7NPV/silver-chain-png-images-vector-and-psd-files-free-download-on-necklace-chain-png-260-348-removebg-pr.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        chainx = results[0].pose.nose.x-35;
        chainy = results[0].pose.nose.y+40;
        console.log(" eye x = " + results[0].pose.leftEye.x);
        console.log(" eye y = " + results[0].pose.leftEye.y);
        glassx = results[0].pose.leftEye.x-50;
        glassy = results[0].pose.leftEye.y-40;
        console.log(" eye x = " + results[0].pose.leftEye.x);
        console.log(" eye y = " + results[0].pose.leftEye.y);
        hatx = results[0].pose.leftEye.x-60;
        haty = results[0].pose.leftEye.y-130;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(chain, chainx, chainy, 75, 75);
    image(glass, glassx, glassy, 75, 75);
    image(hat, hatx, haty, 110, 110);
}

function take_snapshot(){
    save('myFilterImage.png');
}

