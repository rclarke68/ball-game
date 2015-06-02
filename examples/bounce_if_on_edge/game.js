var game;
var WIDTH = 320;
var HEIGHT = 480;

// These variables need to be declared here so that the rest of the program can know about it.
var image = null;
var sprite = null;

var preload = function () {
    game.stage.backgroundColor = '#ffffff'; // see http://html-color-codes.info/ for color options
    
    image = game.add.bitmapData(100, 100);

    image.ctx.beginPath();
    image.ctx.rect(0, 0, 20, 100);
    image.ctx.fillStyle = '#00ffff'; // see http://html-color-codes.info/ for color options
    image.ctx.fill();
}

var create = function () {
    sprite = game.add.sprite(5, 100, image);
    
    //NEW
    sprite.isMovingRight = true;
}

var update = function () {
    if (sprite.x == WIDTH) {
        sprite.isMovingRight = false
    }
    else if (sprite.x == 0) {
        sprite.isMovingRight = true;
    }

    
    if (sprite.isMovingRight == true) {
        sprite.x += 1;    
    }
    else {
        sprite.x -= 1;
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
