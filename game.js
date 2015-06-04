
var game;
var WIDTH = 1280;
var HEIGHT = 600;
var sprite1;
var sprite2;
var sprite3;
var sprite4;

var preload = function () {
    game.world.setBounds(0,0,1280,500);
    
    game.load.image('whitebackround', 'assets/tests/whitebackround.jpg');
    game.load.image('ground', 'assets/tests/ground.png');
    game.load.image("ball", 'assets/tests/ball.gif');
    game.load.image("spikes", 'assets/tests/spikes.jpg');
};

var create = function () {
    
   
    game.add.tileSprite(0,0,1280,600, "whitebackround");
    game.add.sprite(0,500, "ground");
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;
    
    sprite1 = game.add.sprite(360,240, 'ball');
    game.physics.arcade.enable(sprite1);
    sprite1.body.collideWorldBounds = true;
    sprite1.body.velocity.x = 500;
    sprite1.body.bounce.set(1);
    
    sprite2 = game.add.sprite(20,370, "spikes");
    game.physics.arcade.enable(sprite2);
    sprite2.body.immovable = true;
    sprite2.body.bounce.set(1);
    sprite2.body.collideWorldBounds = true;
    
    sprite3 = game.add.sprite(500,370, "spikes");
    game.physics.arcade.enable(sprite3);
    sprite3.body.immovable = true;
    sprite3.body.bounce.set(1);
    sprite3.body.collideWorldBounds = true;
    
    sprite4 = game.add.sprite(1000,370, "spikes");
    game.physics.arcade.enable(sprite4);
    sprite4.body.immovable = true;
    sprite4.body.bounce.set(1);
    sprite4.body.collideWorldBounds = true;
    
    
};
 
debugger;
var update = function () {
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
        sprite1.body.velocity.y = 1000;
        
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
        sprite1.body.velocity.y = -1000
        
    game.physics.arcade.collide(sprite1,sprite2, collisionHandler, null);
    game.physics.arcade.collide(sprite1,sprite3, collisionHandler, null);
    game.physics.arcade.collide(sprite1,sprite4, collisionHandler, null);
    
    
};
var collisionHandler = function (sprite1, sprite3) {
        game.stage.backroundColor = '#992d2d';
};

var render = function () {
    game.debug.text(game.time.fps || '60', 2, 14, '#00ff00');
    
};

var mainState = { preload: preload, create: create, render: render, update: update };
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');
game.state.add('main', mainState);
game.state.start('main');
