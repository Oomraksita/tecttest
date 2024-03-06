let img;

function preload() {
img = loadImage('image.jpg');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(118, 215, 196);
image(img, 70, 340, 500, 400, 0, 0, img.width, img.height, CONTAIN);
  }
  
  function draw() {
    noStroke()
    fill(163, 228, 215)
  star (1000,700,400,100,8)
  
  fill(250)
  textSize(100)
  text('Raksita Jinbutr',70,100)
  textSize(25)
  text('My nick name is Oom (ID332). An Industrial Design student from Chulalongkorn university.', 70,150)
  text('I am interested in creating new things and convey it for people.', 70,220)
  text('I love making graphic illustration, 3D modeling, character design.', 70,250)
  text('I am also interested in 2D and 3D animation, motion graphic and UX/UI design. ', 70,280)


  }

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }