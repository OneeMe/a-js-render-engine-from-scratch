(function main() {
    const context = setupWebGL();
})();

function setupWebGL() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('webgl2');
    if (!context) {
        alert('浏览器不支持 webgl2');
        return;
    }
    context.clearColor(1.0, 1.0, 1.0, 1.0);
    context.clear(context.COLOR_BUFFER_BIT);
    return context;
}
