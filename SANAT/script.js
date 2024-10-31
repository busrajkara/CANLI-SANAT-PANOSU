const canvas = document.getElementById('sanatPanosu');
const ctx = canvas.getContext('2d');

canvas.addEventListener('click', (event) => {
    createRandomShape(event.offsetX, event.offsetY);
});

function createRandomShape(x, y) {
    const shapes = ['circle', 'square', 'triangle'];
    const selectedShape = shapes[Math.floor(Math.random() * shapes.length)];
    const size = Math.floor(Math.random() * 50) + 10;
    const color = getRandomColor();

    ctx.fillStyle = color;

    if (selectedShape === 'circle') {
        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fill();
    } else if (selectedShape === 'square') {
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
    } else if (selectedShape === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(x, y - size / 2);
        ctx.lineTo(x - size / 2, y + size / 2);
        ctx.lineTo(x + size / 2, y + size / 2);
        ctx.closePath();
        ctx.fill();
    }
}


function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function saveCanvas() {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'sanat_panosu.png';
    link.click();
}
