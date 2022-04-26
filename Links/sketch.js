let a;
let b;
let c;
let d;


function preload(){
let a = createA('file:///C:/Users/Adnan/OneDrive/Desktop/Final%20Projoct%20Web%20Design/Sketch%201/index1.html', 'Art Piece 1');
a.style('font-size', '100px');
a.style('color','black');
a.position(100, 100);


let b = createA('file:///C:/Users/Adnan/OneDrive/Desktop/Final%20Projoct%20Web%20Design/Sketch%202/index2.html', 'Art Piece 2');
b.style('font-size', '100px');
b.style('color','black');
b.position(200, 200);

let c = createA('file:///C:/Users/Adnan/OneDrive/Desktop/Final%20Projoct%20Web%20Design/Sketch%203/index3.html', 'Art Piece 3');
c.style('font-size', '100px');
c.style('color','black');
c.position(300, 300);

let d = createA('file:///C:/Users/Adnan/OneDrive/Desktop/Final%20Projoct%20Web%20Design/Sketch%204/index4.html', 'Art Piece 4');
d.style('font-size', '100px');
d.style('color','black');
d.position(400, 400);
}



function draw() {
  background('white');
}
