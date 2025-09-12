
let Ymove = 1;

let mySparkle;
let myImage2; 
let myImage3;
let myImage4; 
let myImage5;

let firstRun = true;
let fishMove = 1;
let fishMove2 = 1;
let fishMove3 = 1;
let fishMove4 = 1;
let fishMove5 = 1;



// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
angleMode(DEGREES)
console.log(counter);
background(6, 89, 128);

 eWidth = map(vocal/5,0,100,20,500)
 eHeight = map(vocal/5,0,100,20,500)

 lineWidth = map(other/2,0,100,20,500)
 lineHeight = map(other/2,0,100,20,500)

 sparkleW = map(drum,0,100,5,70)
 sparkleH = map(drum,0,100,5,70)
 sparkleY = map(drum,0,100,200,220)

 //FISH
 if(firstRun){
 mySparkle = loadImage('sparkle.png')
 myImage = loadImage('fish.png')
 myImage2 = loadImage('fish2.png')
 myImage3 = loadImage ('fish3 right.png')
 myImage4 = loadImage('fishschool right.png')
 myImage5 = loadImage('fish2 right.png')
  
  firstRun = false;
}



//FISH
 if(counter >= 11200  && counter <=13600){
image(myImage,fishMove,60)
 fishMove = fishMove - 0.5;
}
if(fishMove <-40){ 
   fishMove = 560
}

 if(counter >= 11200  && counter <=13600){
image(myImage3,fishMove3,330)
 fishMove3 = fishMove3 + 0.5;
}
if(fishMove3 >=600){ 
   fishMove3 = 1
}

if(counter >= 11200  && counter <=13600){//11200
image(myImage4,fishMove4,555)
 fishMove4 = fishMove4 + 1;
}
if(fishMove4 >=600){ 
   fishMove4 = 1
}

 if(counter >= 11200  && counter <=13600){
image(myImage2,fishMove2,800)
 fishMove2 = fishMove2 + 1.5
}
 if(fishMove2 >=600){ 
   fishMove2 = 1
}

 if(counter >= 11200 && counter <=13600){//11200
image(myImage5,fishMove5,220)
 fishMove5 = fishMove5 + 0.75;
}
 if(fishMove5 >=600){ 
   fishMove5 = 1
}

//BACKGROUND
 let Blue = color(6, 89, 128)
 let blueDark = color(1, 51, 94)

 let lerpAmt = map(vocal/2,0,100,0,1)
 let changingColor = lerpColor (blueDark,Blue, lerpAmt)
 let changingColor2 = lerpColor (Blue, blueDark, lerpAmt)

 noStroke()
  if(counter >= 0  && counter <=3500){
fill(changingColor2)
 rect(0,0,275,960)
}
else{fill(changingColor)
 rect(0,0,275,960)}
  ellipse(250,15,100,40)
 ellipse(260,100,150,70)

 fill(6, 89, 128)//blue right
 ellipse(250,51,150,40)
 ellipse(250,176,130,90)
 ellipse(170,130,50,20)
 ellipse(260,230,60,30)
 ellipse(280,299,70,75)
 ellipse(285,439,50,30)
 ellipse(285,520,190,82)
 ellipse(255,680,190,90)
 ellipse(140,720,70,30)
 ellipse(280,864,160,80)

  if(counter >= 0  && counter <=3500){
fill(changingColor2)
}
else{fill(changingColor)
 }

 ellipse(325,62,40,15)
 ellipse(270,253,70,19)
 ellipse(310,230,50,15)
 ellipse(270,380,160,90)
 ellipse(265,465,50,30)
 ellipse(250,600,130,82)
 ellipse(255,774,300,100)
 ellipse(320,845,70,30)
 ellipse(260,954,300,100)

//WAVES
 noFill()

 if(counter >= 3500){
 stroke(1, 51, 94,30)
 strokeWeight(400)
 bezier(0, Ymove+2450, 150, Ymove+2350, 350, Ymove+2350, 560, Ymove+2450)
 strokeWeight(300)
 bezier(0, Ymove+1950, 150, Ymove+1900, 350, Ymove+1900, 550, Ymove+1950)
 strokeWeight(200)
 bezier(0, Ymove+1600, 150, Ymove+1550, 350, Ymove+1550, 550, Ymove+1600)
 strokeWeight(150)
 bezier(0, Ymove+1350, 150, Ymove+1300, 350, Ymove+1300, 550, Ymove+1350)
  strokeWeight(100)
 bezier(0, Ymove+1100, 150, Ymove+1050, 350, Ymove+1050, 550, Ymove+1100)
 }
 //ellipse(250, Ymove+0.75,700,200)
 Ymove = Ymove - 1.5;//speed of waves  ///CHNAGED FROM MINUS TO PLIUS FOR DIRECTION
 if(Ymove < -2650){ ///the more 'waves u add to top the higher this has to be
   Ymove = 0 //CHANGED OPOOSITE FOR DIRECTION (was 0 and 1950 before)
 }


//RAIN
 rainFlicker = map(vocal,0,100,-20,70)//originally drum
 rainThickness1 = map(other/2,0,100,1,10)
 rainThickness2 = map(vocal/2,0,100,1,10)
 stroke(69, 218, 237,rainFlicker) 
//fill droplets
 strokeWeight(rainThickness1)
   line(600,0,250,600)
   line(540,170,325,525)
   line(490,0,100,600)
   line(540,200,250,675)
   line(540,300,250,775)
   line(325,0,250,100)
   line(290,0,100,250)
//line droplets
   strokeWeight(rainThickness2) 
   line(540,170,400,400)


//DROPLETS
 //vocal
 noStroke()
 fill(69, 218, 237,70)
 eSize = map(vocal/2,0,100,50,500)
 for(let i =0; i<5; i++){
 ellipse(250,375,eWidth*i,eHeight*i/2)
 }
let Orange = color(242, 141, 0,40)
let green = color(53, 135, 82,40)
let lightBlue = color(69, 218, 237,20)

let lerpAmt2 = map(vocal/3,0,100,0.33,1)
let dropletCenter1 = lerpColor(Orange,lightBlue,lerpAmt2)
let dropletCenter2 = lerpColor(green,lightBlue,lerpAmt2)
 fill(dropletCenter1)
for(let i =0; i<5; i++){
 ellipse(250,375,eWidth*i/2,eHeight*i/4) 
}
  fill(dropletCenter2)
 for(let i =0; i<4; i++){
 ellipse(400,400,eWidth*i/4,eHeight*i/6)
 }
  for(let i =0; i<5; i++){
 ellipse(325,525,eWidth*i/4,eHeight*i/6)
 }



 fill(69, 218, 237,70)
  for(let i =0; i<5; i++){
 ellipse(400,400,eWidth*i/2,eHeight*i/4)
 }
 
 for(let i =0; i<5; i++){
 ellipse(325,525,eWidth*i/2,eHeight*i/3)
 }

 for(let i =0; i<4; i++){
 ellipse(100,600,eWidth*i/2,eHeight*i/3)
 }
 
 for(let i =0; i<4; i++){
 ellipse(250,675,eWidth*i/1.5,eHeight*i/2.5)
 }
 for(let i =0; i<3; i++){
 ellipse(250,775,eWidth*i/2,eHeight*i/3)
 }

 for(let i =0; i<3; i++){
 ellipse(250,100,eWidth*i/3,eHeight*i/5)
 }

  for(let i =0; i<6; i++){
 ellipse(100,250,eWidth*i/4,eHeight*i/6)
 }

 //other, same colour, lines
 noFill()
 stroke(69, 218, 237,100)
 strokeWeight(4)

 for(let i =0; i<4; i++){
 ellipse(150,450,lineWidth*i/3,lineHeight*i/5)
 }
 for(let i =0; i<4; i++){
 ellipse(250,600,lineWidth*i/5,lineHeight*i/7)
 }
for(let i =0; i<3; i++){
 ellipse(350,300,lineWidth*i/2,lineHeight*i/4)
 }

 for(let i =0; i<3; i++){
 ellipse(250,175,lineWidth*i/3.5,lineHeight*i/5.5)
 }
 
  for(let i =0; i<3; i++){
 ellipse(400,570,lineWidth*i/3.5,lineHeight*i/5.5)
 }
   for(let i =0; i<3; i++){
 ellipse(250,865,lineWidth*i/4,lineHeight*i/6)
 }




 
//Sparkles
 noStroke()
 fill(255, 244, 166)
 
  if(counter >= 8000){//11200
 image(mySparkle,310,120);
 image(mySparkle,330,700);
 rotate(45);
  rect (275,0,sparkleW/3,sparkleH/3)
  rect (295,0,sparkleW/5,sparkleH/5)
  
 rect (495,sparkleY,sparkleW/5,sparkleH/5)

  rect (800,250,sparkleW/3,sparkleH/3)


  rect (800,330,sparkleW/4,sparkleH/4)


  rect (600,190,sparkleW/3,sparkleH/3)
 

  }

 //or have circles move down throughtout the song link waves and sparkels, make sparkles onlyr eact to drum and move down
//maybe map all on to other
//animate to make bigger over time, look at images from aug 24

//change to arrays at somepoint document that change and show code before and after





//  SECOND VERSION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

//  noStroke()
//  background(28, 73, 133)
//  eWidth = map(vocal/2,0,100,20,500)
//  eHeight = map(other,0,100,20,500)
//  sparkleW = map(drum,0,100,5,70)
//  sparkleH = map(drum,0,100,5,70)
//  sparkleY = map(drum,0,100,200,220)


// fill (110, 194, 224,120)
//  for(let i =0; i<4; i++){
//  ellipse(20,100,eWidth*100,eHeight*i)
//  }
// fill (29, 112, 153,127)
//  for(let i =0; i<4; i++){
//  ellipse(550,500,eWidth*100,eHeight*i)
//  }
// fill(8, 73, 105, 120)
//  for(let i =0; i<4; i++){
//  ellipse(0,900,eWidth*100,eHeight*i)//x height by i make horizontal, x width by number
//  }

 

//  fill(255,200)
//  rotate(45);
//   for(let i =0; i<2; i++){
//   rect (400,sparkleY*i,sparkleW,sparkleH)
//  }
//  for(let i =0; i<2; i++){
//   rect (390,sparkleY*i+50,sparkleW-50,sparkleH-50)
//  }
 
//   for(let i =0; i<1; i++){
//   rect (445,sparkleY-45,sparkleW+10,sparkleH+10)
//  }


//FIRST VERSION!!!!!!!!!!!!

//  noStroke()
//  background(41, 112, 125)
//  eWidth = map(vocal/2,0,100,20,500)
//  eHeight = map(other,0,100,20,500)
//  sparkleW = map(drum,0,100,5,70)
//  sparkleH = map(drum,0,100,5,70)
//  sparkleY = map(drum,0,100,200,220)


// fill (69, 176, 149,120)
//  for(let i =0; i<4; i++){
//  ellipse(20,100,eWidth*100,eHeight*i)
//  }
// fill (50, 31, 96,127)
//  for(let i =0; i<4; i++){
//  ellipse(550,500,eWidth*100,eHeight*i)
//  }
// fill(0,120)
//  for(let i =0; i<4; i++){
//  ellipse(0,900,eWidth*100,eHeight*i)//x height by i make horizontal, x width by number
//  }

 

//  fill(255,200)
//  rotate(45);
//   for(let i =0; i<5; i++){
//   rect (300,sparkleY*i,sparkleW,sparkleH)
//  }

 
 
 


  //   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);
  
//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 
// // changes 
//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);
}