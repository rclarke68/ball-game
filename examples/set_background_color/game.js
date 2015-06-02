var game;
var WIDTH = 320;
var HEIGHT = 480;

var preload = function () {
    game.stage.backgroundColor = '#00ff00';
    // see http://html-color-codes.info/ for color options
}

var create = function () {

    
}

var update = function () {
}

var render = function () {
    game.debug.text(game.time.fps || '--', 2, 14, '#00ff00');
}

var mainState = { preload: preload, create: create, render: render, update: update };
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');
game.state.add('main', mainState);
game.state.start('main');
