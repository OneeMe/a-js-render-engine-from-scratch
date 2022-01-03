(function main() {
    const [canvas, context] = setupCanvas();
    drawA(canvas, context);
    drawB(canvas, context);
})();

function setupCanvas() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        alert('浏览器不支持 canvas 2d API');
        return;
    }
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    return [canvas, context];
}

function drawA(canvas, context) {
    context.fillStyle = 'green';
    const rectWidth = canvas.width / 3;
    const rectHeight = canvas.height;
    context.fillRect(rectWidth, 0, rectWidth, rectHeight);

    const textSize = 20;
    context.font = `${textSize}px`;
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.fillText('A', canvas.width / 2, canvas.height / 2);
}

function drawB(canvas, context) {
    const textSize = 20;

    context.fillStyle = 'blue';
    const rectWidth = canvas.width / 3;
    const rectHeight = textSize;
    context.fillRect(rectWidth, canvas.height - rectHeight, rectWidth, rectHeight);

    context.font = `${textSize}px`;
    context.fillStyle = 'black';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText('B', canvas.width / 2, canvas.height - rectHeight / 2);
}



