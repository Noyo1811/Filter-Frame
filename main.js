function setup(){
    canvas=createCanvas(750,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    tint_color=""
}
function draw(){
    image(video,0,0,750,450);

        fill('#fae');
          circle(50,50,60);
          fill('rgba(100%,0%,100%,0.5)');
        rect(50, 80, 5,300);
          fill('#fae');
          circle(50,400,60);
           fill('rgba(100%,0%,100%,0.5)');
        rect(80, 400,600,5);
            fill('#fae');
          circle(700,400,60);
            fill('rgba(100%,0%,100%,0.5)');
        rect(700, 70, 5,300);
                  fill('#fae');
          circle(700,50,60);
            fill('rgba(100%,0%,100%,0.5)');
        rect(80, 50,590,5);
          
     
}
function take_snapshot(){
    save("photo.png");
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;


}