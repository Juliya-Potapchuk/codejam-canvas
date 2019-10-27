const button1 = document.getElementById("button1");
const button3 = document.getElementById("button3");

button1.addEventListener('click', function () {
    drawCanvas1(picture1);
});

let picture1 = [["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
               ["FFEB3B", "FFC107","FFC107","FFEB3B"],
               ["FFEB3B", "FFC107","FFC107","FFEB3B"],
               ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]];

function drawCanvas1(picture) {
    const canvas = document.querySelector("canvas"),
        ctx = canvas.getContext("2d"),
        width = picture[0].length,
        height = picture.length,
        scale = 512 / picture.length;

    canvas.width = width * scale;
    canvas.height = height * scale;

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            ctx.fillStyle = "#" + picture[row][col];
            ctx.fillRect(col * scale, row * scale, scale, scale);
        }
    }
}