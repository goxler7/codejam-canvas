import './assets/scss/main.scss'

let img4x4 = require('./data/4x4.json');
let img32x32 = require('./data/32x32.json');

let imgRs = new Image()
imgRs.src = './data/image.png';

const btn4x4 = document.querySelector('.btn_4x4');
const btn32x32 = document.querySelector('.btn_32x32');
const btnRS = document.querySelector('.btn_rs');

let ctx = canvas.getContext('2d');

function draw(img) {
  if(!img.src) {
    canvas.width = img.length;
    canvas.height = img.length;
    for (let i = 0; i < img.length; i++) {
      for (let j = 0; j < img.length; j++) {
        if (typeof(img[i][j]) === 'string') {
          ctx.fillStyle = `#${img[i][j]}`;
        } else {
          ctx.fillStyle = `rgba(${img[i][j][0]},${img[i][j][1]},${img[i][j][2]},${img[i][j][3]})`
        }
        ctx.fillRect(i, j , 1, 1);
      }
    } 
  } else {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
  }
}

btnRS.addEventListener('click', function() {
  draw(imgRs)
});

btn4x4.addEventListener('click', function(){
  draw(img4x4);

});

btn32x32.addEventListener('click', function(){
  draw(img32x32);
});