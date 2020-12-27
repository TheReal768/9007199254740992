// Wait till the browser is ready to render the game (avoids glitches)
var game;
window.requestAnimationFrame(function () {
  game = new GameManager(8, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});

var last = '';
var dir = 0;
var cnt = 0;

var mover = undefined;

function doMovementPattern(moveType) {
  mover = setInterval(moveType, 20);
}

function stopMovement() {
  mover = clearInterval(mover);
}

function auto() {
  if (game == null || typeof(game) === "undefined") {
    return;
  }
  var item = document.getElementById('tile-container');
  if (item.innerHTML == last) {
    if (++cnt > 1) {
      dir = 1 - dir;
      cnt = 0;
    }
  }
  last = item.innerHTML;
  if (0 === dir) {
    game.move(0);
    game.move(3);
  } else {
    game.move(0);
    game.move(1);
  }
}

function swing() {
  if (game == null || typeof(game) === "undefined") {
    return;
  }
  var item = document.getElementById('tile-container');
  if (item.innerHTML == last) {
    if (++cnt > 1) {
      dir = 1 - dir;
      cnt = 0;
    }
  }
  last = item.innerHTML;
  if (0 === dir) {
    game.move(0);
    game.move(2);
  } else {
    game.move(1);
    game.move(3);
  }
}

function swirl() {
  dir = (dir + 1) % 4;
  game.move(dir);
}

function random() {
  game.move(Math.floor(Math.random() * 4));
}
