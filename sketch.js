let img1;
let img2;
let img3;
let img4;
let txt1;
let txt2;
let txt3;
let txt4;

function preload(){
img1 = createImg('https://images.unsplash.com/photo-1432250767374-ee19cba37b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80', 'Kanye West President');//origin url and alt text
img2 = createImg('https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80', 'Levatating Shoes');
img3 = createImg('https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80', 'Brain Chip');
img4 = createImg('https://images.unsplash.com/photo-1529094344530-42a0d6a49e8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'Meta World');
txt1 = createP('A Daily Dose of The Truth');
txt2 = createP('Top Stories Today:');
txt3 = createP('Kanye West becomes the 48th president of the United States! Saying more then a decade ago “I Believe My Calling Is to Be the Leader of the Free World”. He is now the second black president of the United States!');
txt4 = createP('Nike has engineered a new pair of high tech SHOES that give you the ability to jump a lot higher. They are advertised to double your standing verticle. Beware of the of the potential risks involved, it is rumored that they could lead to potential loss of both legs!');
txt5 = createP('A start up company called DevelopersPro are claiming to be far ahead of there competitor in the technology industry! They plan on introducing the first ever brain chip that enables you to download things directly to your brain with in the next 2 years. Elon Musk, responded to them on twitter by saying that they are "Full of Sh*T".');
txt6 = createP('The Meta World has grown so much popularity over the last 5 years that most malls and retail stores across the country have shut down in the real world and opened a virtual loction online. The Meta World has also changed the way sports are consumed and played, no allowing fans a court side experience even if your across the world.');
}

function setup() {
  createCanvas(1500, 888);
  img1.position(100, 200);
  img1.size(250, 250);

  img2.position(100, 475);
  img2.size(250, 250)

  img3.position(100, 750);
  img3.size(250, 250)

  img4.position(100, 1025);
  img4.size(250, 250);

  txt1.style('font-size', '50px');
  txt1.style('color','black');
  txt1.position(500, 25);

  txt2.style('font-size', '30px');
  txt2.style('color','black');
  txt2.position(100, 120);

  txt3.style('font-size', '30px');
  txt3.style('color','black');
  txt3.position(360, 200);

  txt4.style('font-size', '30px');
  txt4.style('color','black');
  txt4.position(360, 475);

  txt5.style('font-size', '30px');
  txt5.style('color','black');
  txt5.position(360, 750);

  txt6.style('font-size', '30px');
  txt6.style('color','black');
  txt6.position(360, 1025);
}

function draw() {
  background('white');
}
