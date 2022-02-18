function preload()
{

}

function setup()
{
   canvas = createCanvas(800, 800);
   canvas.position(300, 300);
   video = createCapture(VIDEO);
   video.hide();

   tint_color = "";
}

function draw()
{
   image(video, 230, 150, 200, 240);
   fill(255, 0, 0);
   stroke(255, 0, 0);
   circle(50, 50, 80);
   circle(50, 430, 80);
   circle(590, 50, 80);
   circle(590, 430, 80);
   fill(0, 128, 0);
   stroke(0, 128, 0);
   rect(90, 40, 460, 20);
   rect(90, 420, 460, 20);
   rect(40, 90, 20, 300);
   rect(580, 90, 20, 300);
   tint(tint_color);
}

function take_snapshot()
{
    save('Picture.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}