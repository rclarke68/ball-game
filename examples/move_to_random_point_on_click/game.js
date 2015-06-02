var game;
var WIDTH = 320;
var HEIGHT = 480;

// These variables need to be declared here so that the rest of the program can know about it.
var image = null;
var sprite = null;

var getRandomNumberWithMax = function(max) {
    var number = Math.floor((Math.random() * max) + 1);
    return number;
}

var preload = function () {
    game.stage.backgroundColor = '#ffffff'; // see http://html-color-codes.info/ for color options
    
    image = game.add.bitmapData(100, 100);

    image.ctx.beginPath();
    image.ctx.rect(0, 0, 200, 200);
    image.ctx.fillStyle = '#00ffff'; // see http://html-color-codes.info/ for color options
    image.ctx.fill();
}

var create = function () {
    sprite = game.add.sprite(5, 100, image);
}

var update = function () {
    
    if (game.input.mousePointer.isDown || game.input.pointer1.isDown) {
        if (Phaser.Rectangle.contains(sprite, game.input.x, game.input.y)) {
            sprite.x = getRandomNumberWithMax(WIDTH);
            sprite.y = getRandomNumberWithMax(HEIGHT);
        }
    }

}

var render = function () {
    game.debug.text("sprite.x = " + sprite.x || '--', 2, 14, '#00ff00');
    game.debug.text("sprite.y = " + sprite.y || '--', 2, 30, '#00ff00');
}

var mainState = { preload: preload, create: create, render: render, update: update };
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');
game.state.add('main', mainState);
game.state.start('main');
