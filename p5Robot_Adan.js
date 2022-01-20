//to be saved as a .js file
// CHANGE the digits themselves, the 2d shape-type, the number of those shapes, where/how they relate to everyother
//DO NOT CHANGE the stuff in the setup related to the Canvas

let boat = 26;


function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background("salmon");
  // Neck
  stroke("beige"); // Set stroke to beige
  line(266, 257, 266, 162); // Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right
  // Antennae
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium
  // Body
  noStroke(); // Disable stroke
  fill("beige"); // Set fill to beige
  ellipse(264, 377, 133, 33); // Antigravity orb
  fill("Brown"); // Set fill to black
  rect(219, 257, 190, 120); // Main body
  fill("beige"); // Set fill to beige
  rect(219, 274, 190, 6); // Gray stripe
  fill("Brown"); // Set fill to Brown
  ellipse(276, 155, 145, 45); // Head
  fill("wheat"); // Set fill to wheat
  ellipse(288, 150, 114, 14); // Large eye
  fill("Brown"); // Set fill to Brown
  ellipse(288, 150, 13, 3); // Pupil
  fill("beige"); // Set fill to beige
  ellipse(263, 148, 15, 5); // Small eye 1
  ellipse(296, 130, 14, 4); // Small eye 2
  ellipse(305, 162, 13, 3); // Small eye 3
}
