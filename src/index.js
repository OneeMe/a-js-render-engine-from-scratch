(function main() {
    const [canvas, context] = setupCanvas();
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
