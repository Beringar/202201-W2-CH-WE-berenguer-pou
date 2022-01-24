/* eslint-disable no-unused-vars */
let runLifeCycleSetTimeOut;
const createBidimensionalSquareArray = (rows) => {
  const array = [];
  for (let i = 0; i < rows; i++) {
    array[i] = [];
    for (let j = 0; j < rows; j++) {
      array[i][j] = [];
    }
  }
  return array;
};

const getRandomState = (NumberOfPossibleStates) =>
  Math.floor(Math.random() * NumberOfPossibleStates);

const fillGridCells = (grid, numberOfStates, assignStateCallback) => {
  const gridToBeFilled = grid;
  for (let i = 0; i < gridToBeFilled.length; i++) {
    for (let j = 0; j < gridToBeFilled[i].length; j++) {
      gridToBeFilled[i][j] = assignStateCallback(numberOfStates);
    }
  }
  return gridToBeFilled;
};

const getNeighbours = (positionRow, positionCol, gridArray) => {
  let aliveNeighbours = 0;
  // top left neighbour
  if (positionRow !== 0) {
    if (positionCol !== 0) {
      aliveNeighbours += gridArray[positionRow - 1][positionCol - 1];
    }
  }
  // top center neighbour
  if (positionRow !== 0) {
    aliveNeighbours += gridArray[positionRow - 1][positionCol];
  }
  // top right neighbour
  if (positionRow !== 0) {
    if (positionCol !== gridArray.length - 1) {
      aliveNeighbours += gridArray[positionRow - 1][positionCol + 1];
    }
  }
  // middle left neighbour
  if (positionCol !== 0) {
    aliveNeighbours += gridArray[positionRow][positionCol - 1];
  }
  // middle right neighbour
  if (positionCol !== gridArray.length - 1) {
    aliveNeighbours += gridArray[positionRow][positionCol + 1];
  }
  // bottom left neighbour
  if (positionRow !== gridArray.length - 1) {
    if (positionCol !== 0) {
      aliveNeighbours += gridArray[positionRow + 1][positionCol - 1];
    }
  }
  // bottom center
  if (positionRow !== gridArray.length - 1) {
    aliveNeighbours += gridArray[positionRow + 1][positionCol];
  }
  // bottom right
  if (positionRow !== gridArray.length - 1) {
    if (positionCol !== gridArray.length - 1)
      aliveNeighbours += gridArray[positionRow + 1][positionCol + 1];
  }
  return aliveNeighbours;
};

const getCellNewStatus = (actualStatus, numberOfNeighbours) => {
  if (actualStatus === 0) {
    switch (numberOfNeighbours) {
      case 3:
        return 1; // dead + 3 neighbours --> the revenant!
      default:
        return 0;
    }
  }
  switch (numberOfNeighbours) {
    case 0:
    case 1:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
      return 0; // (0-1) --> die of lonelines (4-8) --> of overcrowding
    case 2:
    case 3:
      return 1; // (2-3) --> remains alive
    default:
      return 0;
  }
};

let grid = fillGridCells(
  createBidimensionalSquareArray(300),
  2,
  getRandomState
);
const canvasElement = document.querySelector("#canvas");

const getRandomColor = () => {
  let color = "#";
  const letters = "ABCDEF0123456789";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const ctx = canvasElement.getContext("2d");
let msIntervalNewCycle = 500;
const drawLifeCycleCanva = (gridArray) => {
  if (canvasElement.getContext) {
    ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    for (let row = 0; row < gridArray.length; row++) {
      for (let col = 0; col < gridArray.length; col++) {
        if (grid[row][col] === 1) {
          ctx.fillStyle = "#ff0066";
          ctx.fillRect(row, col, 1, 1);
        }
      }
    }
  }
};

const setNextCycle = (actualStateGrid) => {
  grid = actualStateGrid.map((row, rowKey) =>
    row.map((cell, cellKey) =>
      getCellNewStatus(cell, getNeighbours(rowKey, cellKey, actualStateGrid))
    )
  );
  return grid;
};

const startCycle = () => {
  runLifeCycleSetTimeOut = setTimeout(() => {
    drawLifeCycleCanva(setNextCycle(grid));
    startCycle();
  }, msIntervalNewCycle);
};

const speedCanvaInputElement = document.querySelector("#speed-canva");
const actualSpeedTextElement = document.querySelector("#actual-speed-canva");

speedCanvaInputElement.addEventListener(
  "input",
  () => {
    msIntervalNewCycle = speedCanvaInputElement.value;
    actualSpeedTextElement.innerHTML = `${speedCanvaInputElement.value}`;
  },
  false
);

function createCanvas(parent, width, height) {
  const canvas = {};
  canvas.node = document.createElement("canvas");
  canvas.context = canvas.node.getContext("2d");
  canvas.node.width = width || 100;
  canvas.node.height = height || 100;
  parent.appendChild(canvas.node);
  return canvas;
}
let ctxDraw = null;
function init(container, width, height) {
  const canvas = createCanvas(container, width, height);
  ctxDraw = canvas.context;

  ctxDraw.fillCircle = function (x, y, radius, fillColor) {
    this.fillStyle = fillColor;
    this.beginPath();
    this.moveTo(x, y);
    this.arc(x, y, radius, 0, Math.PI * 2, false);
    this.fill();
  };
  ctxDraw.clearTo = function (fillColorClear) {
    ctxDraw.fillStyle = fillColorClear;
    ctxDraw.fillRect(0, 0, width, height);
  };

  // bind mouse events
  canvas.node.onmousemove = function (e) {
    if (!canvas.isDrawing) {
      return;
    }
    const x = e.pageX - this.offsetLeft;
    const y = e.pageY - this.offsetTop;
    const radius = 10;
    const fillColorDraw = "#000000";
    ctxDraw.fillCircle(x, y, radius, fillColorDraw);
  };
  canvas.node.onmousedown = function () {
    canvas.isDrawing = true;
  };
  canvas.node.onmouseup = function () {
    canvas.isDrawing = false;
  };
}

const container = document.getElementById("draw-canvas");
init(container, 300, 300);

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const getDataArrayFromCanvaDrawing = () => {
  const imageData = ctxDraw.getImageData(0, 0, 300, 300).data;
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

const el = document.querySelector("#getImageData");
el.addEventListener(
  "click",
  () => {
    grid = getDataArrayFromCanvaDrawing();
  },
  false
);

const stopCycle = () => {
  clearTimeout(runLifeCycleSetTimeOut);
};

startCycle();
