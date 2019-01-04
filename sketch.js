let radius = 0;
let angularSpeed = 0;
let angleVariationCount = 0;
let angleVariationStep = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(color(random(255),random(255),random(255)));
    noLoop();

    let generateButton = createButton('Generate Pattern');
    generateButton.style('background-color', '#ffffff');
    generateButton.style('text-color', '#000000');
    generateButton.position(40, 20);
    generateButton.mousePressed(function() {
        clear();
        background(color(random(255),random(255),random(255)));
        redraw();
    });
}

function draw(){
    noStroke();
    drawAngles();
    drawParams();
}

function drawAngles(){
    angleMode(DEGREES);
    fill(color(random(255),random(255),random(255)));
    noStroke();

    radius = random(150, 200);

    angularSpeed = random(0, 10);
    let angleStep = 0.01;

    //angle loop
    for(let angle = 0; angle < 360; angle += angleStep) {

        angleVariationCount = random(30);
        angleVariationStep = random(10);

        // varying angle factor loop
        for(let angleVariation = 0; angleVariation < angleVariationCount; angleVariation += angleVariationStep) {
            let xStartPos = radius * cos(angle + angleVariation);
            let yStartPos = radius * sin(angle + angleVariation);
            let xEndPos = radius/3 * cos(angularSpeed * angle);
            let yEndPos = radius/3 * sin(angularSpeed * angle);

            let absoluteXPos = xStartPos + xEndPos;
            let absoluteYPos = yStartPos + yEndPos;

            let lineWidth = 10;
            ellipse(400 + absoluteXPos, 300 - absoluteYPos, lineWidth);
        }
    }
}

function drawParams() {
    fill(255);
    text('Radius: ' + Math.round(radius * 100)/100, 20, 60);
    text('Angular Speed: ' + Math.round(angularSpeed * 100)/100, 20, 80);
    text('Angle Variation Count: ' + Math.round(angleVariationCount * 100)/100, 20, 100);
    text('Angle Variation Step: ' + Math.round(angleVariationStep * 100)/100, 20, 120);
}