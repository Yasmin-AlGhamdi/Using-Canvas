let canvas = document.querySelector("#canvas");
//              let canvas: HTMLElement;

let context = canvas.getContext("2d");


console.log(context);

context.fillStyle='purple';
  context.fillRect(350,400,100,100)
context.fillStyle='yellow';
  context.fillRect(490,400,100,100)

  /*
context.beginPath();
context.moveTo(300,0);
context.lineTo(300, 300);
context.lineTo(400, 400);
//context.stroke();
context.fill();
*/

/*
context.beginPath();
context.moveTo(300, 50);
context.lineTo(100, 500);
context.lineTo(500, 300);
context.lineTo(-10, 250);
context.lineTo(400, 500);
context.lineTo(300, 50);
//context.stroke();
context.fill();
*/

context.font = "30px Arial";
context.fillStyle="black"
context.fillText("Yasmin", 450, 90);

make_base();

function make_base()
{
  base_image = new Image();
  base_image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&usqp=CAU';
  context.drawImage(base_image, 0, 0);
}

context.beginPath();
context.moveTo(0, 150);
context.lineTo(600, 150);
context.stroke();

context.beginPath();
context.arc(270, 450, 50, 0, Math.PI * 2);
context.stroke();


for(let i=0; i < 300; i++)
{
    context.beginPath();

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    context.arc(x, y, 10, 0, Math.PI * 2);
    context.stroke();
}
