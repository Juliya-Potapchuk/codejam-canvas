const buttonDrawSize4 = document.getElementById('buttonDrawSize4');
const buttonDrawSize256 = document.getElementById('buttonDrawSize256');

let picture = [['00BCD4', 'FFEB3B','FFEB3B','00BCD4'],
               ['FFEB3B', 'FFC107','FFC107','FFEB3B'],
               ['FFEB3B', 'FFC107','FFC107','FFEB3B'],
               ['00BCD4', 'FFEB3B','FFEB3B','00BCD4']];

buttonDrawSize4.addEventListener('click', function() {
    const canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    width = picture[0].length;
    height = picture.length;
    scale = 512 / picture.length;

    canvas.width = width * scale;
    canvas.height = height * scale;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            ctx.fillStyle = '#' + picture[row][col];
            ctx.fillRect(col * scale, row * scale, scale, scale);
        };
    };
});

buttonDrawSize256.addEventListener('click', function(){
    const canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    pic = new Image();
    pic.src = './images/icon_rsschool.png';
    pic.onload = function() {
        ctx.drawImage(pic, 0, 0, 512, 512);
    };
});