let eWidth;
let eHeight;
let eSmallWidth;
let eSmallHeight;
let sparkleW;
let sparkleH;
let sparkleY;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

 //stroke(100, 161, 227)
//strokeWeight(3)
noStroke()
 background(41, 112, 125)
 eWidth = map(vocal/2,0,100,20,500)
 eHeight = map(other,0,100,20,500)
 sparkleW = map(drum,0,100,5,70)
 sparkleH = map(drum,0,100,5,70)
 sparkleY = map(drum,0,100,200,220)


fill (69, 176, 149,120)
 for(let i =0; i<4; i++){
 ellipse(0,100,eWidth*100,eHeight*i)
 }
fill (50, 31, 96,127)
 for(let i =0; i<4; i++){
 ellipse(550,500,eWidth*100,eHeight*i)
 }
fill(0,120)
 for(let i =0; i<4; i++){
 ellipse(0,900,eWidth*100,eHeight*i)//x height by i make horizontal, x width by number
 }

 

 fill(255,200)
 rotate(45);
  for(let i =0; i<5; i++){
  rect (300,sparkleY*i,sparkleW,sparkleH)
 }

// sparkleX = sparkleX +6
// if(sparkleX > 900){
   sparkleX = 0
// }


//make sparkles drums (flickery)
//waves or ride as other or vocals (more calm)
//play with opacity and overlaipping


 
 
 


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