let eWidth;
let eHeight;
let eSmallWidth;
let eSmallHeight;
let sparkleW;
let sparkleH;
let sparkleY;
let eSize;


let Ymove = 1;
//let edgeYmove = [0,50,150,250,350,450];
//let Ymove = [50,100,200,300,400,500];

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

//third droplet version
 background(6, 89, 128)
 eWidth = map(vocal/4,0,100,20,500)
 eHeight = map(vocal/4,0,100,20,500)

 lineWidth = map(other/2,0,100,20,500)
 lineHeight = map(other/2,0,100,20,500)


//  eBassWidth = map(bass,0,100,50,300)
//  eBassHeight = map(bass,0,100,50,300)

 sparkleW = map(drum,0,100,5,70)
 sparkleH = map(drum,0,100,5,70)
 sparkleY = map(drum,0,100,200,220)

 noFill()
 strokeWeight(200)
 stroke(69, 218, 237,30)
 bezier(0, Ymove-850, 150, Ymove-800, 350, Ymove-800, 550, Ymove-850)
 strokeWeight(150)
 bezier(0, Ymove-600, 150, Ymove-550, 350, Ymove-550, 550, Ymove-600)
 strokeWeight(200)
 bezier(0, Ymove-350, 150, Ymove-300, 350, Ymove-300, 550, Ymove-350)
  strokeWeight(150)
 bezier(0, Ymove-100, 150, Ymove-50, 350, Ymove-50, 550, Ymove-100)


//  bezier(0, Ymove, 150, Ymove+50, 350, Ymove+50, 550, Ymove)
//  bezier(0, Ymove+70, 150, Ymove+120, 350, Ymove+120, 550, Ymove+70)
//  bezier(0, Ymove+150, 150, Ymove+200, 350, Ymove+200, 550, Ymove+150)
//  bezier(0, Ymove+240, 150, Ymove+280, 350, Ymove+280, 550, Ymove+240)

 //ellipse(250, Ymove+0.75,700,200)
 Ymove = Ymove + 1.5;//speed of waves
 if(Ymove > 1350){ ///the more 'waves u add to top the higher this has to be
   Ymove = 0
 }
  //not working find out how to do






//vocal
 noStroke()
 fill(69, 218, 237,70)
 eSize = map(vocal/2,0,100,50,500)
 for(let i =0; i<5; i++){
 ellipse(250,375,eWidth*i,eHeight*i)
 }
 for(let i =0; i<4; i++){
 ellipse(400,400,eWidth*i/2,eHeight*i/2)
 }
 for(let i =0; i<5; i++){
 ellipse(325,525,eWidth*i/2,eHeight*i/2)
 }
 for(let i =0; i<3; i++){
 ellipse(100,600,eWidth*i/2,eHeight*i/2)
 }
 for(let i =0; i<4; i++){
 ellipse(100,600,eWidth*i/2,eHeight*i/2)
 }
 for(let i =0; i<4; i++){
 ellipse(250,675,eWidth*i/1.5,eHeight*i/1.5)
 }
 for(let i =0; i<3; i++){
 ellipse(250,775,eWidth*i/2,eHeight*i/2)
 }




//other, same colour
 noFill()
 stroke(69, 218, 237,100)
 strokeWeight(4)
 for(let i =0; i<4; i++){
 ellipse(150,450,lineWidth*i/3,lineHeight*i/3)
 }
 for(let i =0; i<4; i++){
 ellipse(250,600,lineWidth*i/5,lineHeight*i/5)
 }
for(let i =0; i<3; i++){
 ellipse(350,300,lineWidth*i/2,lineHeight*i/2)
 }
 for(let i =0; i<3; i++){
 ellipse(250,175,lineWidth*i/3.5,lineHeight*i/3.5)
 }
 



//bass
 noStroke()
 fill(54, 164, 179,100)//darker blue
 for(let i =0; i<6; i++){
 ellipse(100,250,eWidth*i/4,eHeight*i/4)
 }
 for(let i =0; i<3; i++){
 ellipse(250,100,eWidth*i/3,eHeight*i/3)
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