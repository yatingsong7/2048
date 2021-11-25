var successMove = false;
var scores = 0;
var initial = function () {
  var number = [2, 2, 2, 4];
  var item1 = number[Math.floor(Math.random() * number.length)];
  var item2 = number[Math.floor(Math.random() * number.length)];
  var item3 = number[Math.floor(Math.random() * number.length)];
  var grid = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44];
  var grid1 = grid[Math.floor(Math.random() * grid.length)];
  var grid2 = grid[Math.floor(Math.random() * grid.length)];
  var grid3 = grid[Math.floor(Math.random() * grid.length)];
  var pic1 = document.getElementById(grid1);
  var pic2 = document.getElementById(grid2);
  var pic3 = document.getElementById(grid3);
  pic1.src = "img/" + item1 + ".png";
  pic1.alt = item1;
  pic2.src = "img/" + item2 + ".png";
  pic2.alt = item2;
  pic3.src = "img/" + item3 + ".png";
  pic3.alt = item3;
};

var getAllAlt = function () {
  var gridId = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44];
  var gridArray = [];
  for (var i = 0; i < gridId.length; i++) {
    gridArray.push(document.getElementById(gridId[i]).alt);
  }
  return gridArray;
};

var moveDown = function () {
  var gridArray = getAllAlt();
  for (var i = 1; i <= 4; i++) {
    sumForMoveDown(i);
  }
  checkIfSuccessMove(gridArray);
  if (successMove == true) generatePic();
  document.getElementById("scores").innerHTML = scores;
};

var moveUp = function () {
  var gridArray = getAllAlt();
  for (var i = 1; i <= 4; i++) {
    sumForMoveUp(i);
  }
  checkIfSuccessMove(gridArray);
  if (successMove == true) generatePic();
  document.getElementById("scores").innerHTML = scores;
};

var moveRight = function () {
  var gridArray = getAllAlt();
  for (var i = 1; i <= 4; i++) {
    sumForMoveRight(i);
  }
  checkIfSuccessMove(gridArray);
  if (successMove == true) generatePic();
  document.getElementById("scores").innerHTML = scores;
};

var moveLeft = function () {
  var gridArray = getAllAlt();
  for (var i = 1; i <= 4; i++) {
    sumForMoveLeft(i);
  }
  checkIfSuccessMove(gridArray);
  if (successMove == true) generatePic();
  document.getElementById("scores").innerHTML = scores;
};

var sumForMoveDown = function (i) {
  var grid1 = document.getElementById(10 + i);
  var grid2 = document.getElementById(20 + i);
  var grid3 = document.getElementById(30 + i);
  var grid4 = document.getElementById(40 + i);
  var gridArray = [grid1, grid2, grid3, grid4];
  for (var s = 3; s >= 0; s--) {
    if (gridArray[s].alt !== "0") {
      comparePic(gridArray, s);
    }
  }

  if (grid2.alt === "0") {
    grid2.alt = grid1.alt;
    grid1.alt = "0";
  }
  if (grid3.alt === "0") {
    grid3.alt = grid2.alt;
    grid2.alt = grid1.alt;
    grid1.alt = "0";
  }
  if (grid4.alt === "0") {
    grid4.alt = grid3.alt;
    grid3.alt = grid2.alt;
    grid2.alt = grid1.alt;
    grid1.alt = "0";
  }

  for (var s = 3; s >= 0; s--) {
    gridArray[s].src = "img/" + gridArray[s].alt + ".png";
  }
};

var comparePic = function (gridArray, i) {
  var gridI = gridArray[i].getAttribute("alt");
  for (var j = i - 1; j >= 0; j--) {
    if (gridArray[j].getAttribute("alt") !== "0") {
      break;
    }
  }
  if (j >= 0 && gridArray[j].getAttribute("alt") === gridI) {
    gridArray[i].alt = gridI * 2;
    scores += gridI * 2;
    gridArray[j].alt = "0";
  }
};

var sumForMoveUp = function (i) {
  var grid1 = document.getElementById(10 + i);
  var grid2 = document.getElementById(20 + i);
  var grid3 = document.getElementById(30 + i);
  var grid4 = document.getElementById(40 + i);
  var gridArray = [grid1, grid2, grid3, grid4];
  for (var s = 0; s < 4; s++) {
    if (gridArray[s].alt !== "0") {
      comparePic(gridArray, s);
    }
  }

  if (grid3.alt === "0") {
    grid3.alt = grid4.alt;
    grid4.alt = "0";
  }
  if (grid2.alt === "0") {
    grid2.alt = grid3.alt;
    grid3.alt = grid4.alt;
    grid4.alt = "0";
  }
  if (grid1.alt === "0") {
    grid1.alt = grid2.alt;
    grid2.alt = grid3.alt;
    grid3.alt = grid4.alt;
    grid4.alt = "0";
  }

  for (var s = 3; s >= 0; s--) {
    gridArray[s].src = "img/" + gridArray[s].alt + ".png";
  }
};

var sumForMoveRight = function (i) {
  var regex = "[id ^= '" + i + "']";
  var gridArray = document.querySelectorAll(regex);
  for (var s = 0; s < 4; s++) {
    if (gridArray[s].alt !== "0") {
      comparePic(gridArray, s);
    }
  }

  if (gridArray[1].alt === "0") {
    gridArray[1].alt = gridArray[0].alt;
    gridArray[0].alt = "0";
  }
  if (gridArray[2].alt === "0") {
    gridArray[2].alt = gridArray[1].alt;
    gridArray[1].alt = gridArray[0].alt;
    gridArray[0].alt = "0";
  }
  if (gridArray[3].alt === "0") {
    gridArray[3].alt = gridArray[2].alt;
    gridArray[2].alt = gridArray[1].alt;
    gridArray[1].alt = gridArray[0].alt;
    gridArray[0].alt = "0";
  }

  for (var s = 3; s >= 0; s--) {
    gridArray[s].src = "img/" + gridArray[s].alt + ".png";
  }
};

var sumForMoveLeft = function (i) {
  var regex = "[id ^= '" + i + "']";
  var gridArray = document.querySelectorAll(regex);
  for (var s = 0; s < 4; s++) {
    if (gridArray[s].alt !== "0") {
      comparePic(gridArray, s);
    }
  }

  if (gridArray[2].alt === "0") {
    gridArray[2].alt = gridArray[3].alt;
    gridArray[3].alt = "0";
  }
  if (gridArray[1].alt === "0") {
    gridArray[1].alt = gridArray[2].alt;
    gridArray[2].alt = gridArray[3].alt;
    gridArray[3].alt = "0";
  }
  if (gridArray[0].alt === "0") {
    gridArray[0].alt = gridArray[1].alt;
    gridArray[1].alt = gridArray[2].alt;
    gridArray[2].alt = gridArray[3].alt;
    gridArray[3].alt = "0";
  }

  for (var s = 3; s >= 0; s--) {
    gridArray[s].src = "img/" + gridArray[s].alt + ".png";
  }
};

var generatePic = function () {
  var grid = document.querySelectorAll(".column");
  var availableGrid = [];

  for (var i = 0; i < grid.length; i++) {
    if (grid[i].src.indexOf("img/0.png") != -1) {
      availableGrid.push(grid[i]);
    }
  }
  var pick = availableGrid[Math.floor(Math.random() * availableGrid.length)];
  var number = [2, 2, 2, 2, 4];
  var item1 = number[Math.floor(Math.random() * number.length)];
  pick.src = "img/" + item1 + ".png";
  pick.alt = item1;
};

var checkIfSuccessMove = function (gridArray) {
  var grid = [11, 12, 13, 14, 21, 22, 23, 24, 31, 32, 33, 34, 41, 42, 43, 44];

  for (var i = 0; i < grid.length; i++) {
    if (document.getElementById(grid[i]).alt !== gridArray[i]) {
      successMove = true;
      console.log(successMove);
      break;
    }
  }
};

function getKeyAndMove(e) {
  var key_code = e.which || e.keyCode;
  switch (key_code) {
    case 37: //left arrow key
      moveLeft();
      successMove = false;
      break;
    case 38: //Up arrow key
      moveUp();
      successMove = false;
      break;
    case 39: //right arrow key
      moveRight();
      successMove = false;
      break;
    case 40: //down arrow key
      moveDown();
      successMove = false;
      break;
  }
}
