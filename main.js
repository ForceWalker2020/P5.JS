function preload()
{

}

function setup()
{
   canvas = createCanvas(800, 400);
   canvas.position(300, 300);
   video = createCapture(VIDEO);
   video.hide();

   tint_color = "";
}

function draw()
{
   image(video, 0, 0, 640, 480);
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