function createCanvas(parent, width, height) {
  const canvas = {};
  canvas.node = document.createElement("canvas");
  canvas.context = canvas.node.getContext("2d");
  canvas.node.width = width || 100;
  canvas.node.height = height || 100;
  parent.appendChild(canvas.node);
  return canvas;
}
let ctx = null;
function init(container, width, height) {
  const canvas = createCanvas(container, width, height);
  ctx = canvas.context;
  // define a custom fillCircle method
  ctx.fillCircle = function (x, y, radius, fillColor) {
    this.fillStyle = fillColor;
    this.beginPath();
    this.moveTo(x, y);
    this.arc(x, y, radius, 0, Math.PI * 2, false);
    this.fill();
  };
  ctx.clearTo = function (fillColorClear) {
    ctx.fillStyle = fillColorClear;
    ctx.fillRect(0, 0, width, height);
  };
  // ctx.clearTo("#ffffff");

  // bind mouse events
  canvas.node.onmousemove = function (e) {
    if (!canvas.isDrawing) {
      return;
    }
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    const radius = 10;
    const fillColorDraw = "#000000";
    ctx.fillCircle(x, y, radius, fillColorDraw);
  };
  canvas.node.onmousedown = function () {
    canvas.isDrawing = true;
  };
  canvas.node.onmouseup = function () {
    canvas.isDrawing = false;
  };
}

const container = document.getElementById("canvas");
init(container, 300, 300);

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const getDataArrayFromCanvaDrawing = () => {
  const imageData = ctx.getImageData(0, 0, 300, 300).data;
  const onlyBlackPixelData = [];
  for (let i = 3; i < imageData.length; i += 4) {
    onlyBlackPixelData.push(imageData[i]);
  }
  return chunkArray(onlyBlackPixelData, 300).map((row) =>
    row.map((cell) => {
      if (cell === 255) {
        return 1;
      }
      return 0;
    })
  );
};

const el = document.getElementById("#getImageData");
el.addEventListener(
  "click",
  () => {
    getDataArrayFromCanvaDrawing();
  },
  false
);
