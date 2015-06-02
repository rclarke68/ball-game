var game;
var WIDTH = 320;
var HEIGHT = 480;

var BLACK_TILE_WIDTH = WIDTH / 4;
var BLACK_TILE_HEIGHT = HEIGHT / 4;

var blackTileImage = null;
var blackTileSprite = null;

var preload = function () {
    game.stage.backgroundColor = '#ffffff'; // see http://html-color-codes.info/ for color options
    
    blackTileImage = game.add.bitmapData(BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);

    blackTileImage.ctx.beginPath();
    blackTileImage.ctx.rect(0, 0, BLACK_TILE_WIDTH, BLACK_TILE_HEIGHT);
    blackTileImage.ctx.fillStyle = '#000000'; // see http://html-color-codes.info/ for color options
    blackTileImage.ctx.fill();
}

var create = function () {
    blackTileSprite = game.add.sprite(0, 0, blackTileImage);
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
