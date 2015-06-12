debugger;
var game;
var WIDTH = 1280;
var HEIGHT = 600;
var sprite1;
var sprite2;
var sprite3;
var sprite4;
var sprite5;
var sprite6;
var sprite7;
var sprite8;
var sprite9;
var sprite10;
var sprite11;
var sprite12;
var sprite13;
var sprite14;
var sprite15;

// var generateRandomNumberWithMax = function(maxNumber) {
//     debugger;
//     var randomNumber = Math.random() *10;
//     return randomNumber;
// };
// var allSpikesAndBalls = [sprite1,sprite2,sprite3,sprite4,sprite6,sprite7,sprite8,sprite9,sprite10,sprite11,sprite11,sprite12,sprite13,sprite14,sprite15];
// // var allBalls = sprite1,sprite6,sprite7,sprite8,sprite9,sprite10,sprite11,sprite12,sprite13,sprite14,sprite15
// // var allSpikes = sprite2,sprite3,sprite4
// var hoop = sprite5;

// var createSprites = function() {
//     game.add.sprite([allSpikesAndBalls,hoop]);
//     game.physics.arcade.enable([allSpikesAndBalls,hoop]);
//     allBalls.bounce.set(0.7);
//     allBalls.velocity.x = game.rnd.integerInRange(-500,500);
//     allBalls.x = game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200);
//     allSpikesAndBalls.body.collideWorldBounds = true;
//     allSpikes.body.immovable = true;
// var createSpike = function () {
//     game.add.sprite(game.rnd.integerInRange(0,1240), 471, "spike" );
//     game.physics.arcade.enable(sprite2);
//     sprite2.bounce.set(1);
//     sprite2.collideWorldBounds = true;
// }
// var spike1 = createSpike();
// var spike2 = createSpike();
// var spike3 = createSpike();
    
// var ball1 = createBall();
// var ball2 = createBall();
// var ball3 = createBall();
    
// var balls = createAllBalls(1000);
    
    
// }

// debugger
// var x = generateRandomNumberWithMax(500);

var music;

var preload = function () {
    debugger
    game.world.setBounds(0,0,1280,500);
    
    game.load.image('backround1', 'assets/tests/whitebackround.jpg');
    game.load.image('ground', 'assets/tests/ground.png');
    game.load.image("ball", 'assets/tests/ball.gif');
    game.load.image("spikes", 'assets/tests/spikes.jpg');
    game.load.image("hoop", 'assets/tests/hoop.png')
    
    game.load.audio("boing", 'assets/tests/boing.mp3')

};
var creatNewSprite = function(spriteName) {
    debugger
    var randomX = game.rnd.integerInRange(100,600);
    var randomY = game.rnd.integerInRange(0,1240)
    
    var myNewSprite = game.add.sprite(randomX,randomY,spriteName);
    game.physics.enable(myNewSprite,Phaser.Physics.ARCADE);
    
    myNewSprite.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    myNewSprite.body.collideWorldBounds = true;
    myNewSprite.body.bounce.set(.7);
    
    return myNewSprite;
}
var creatAllTheBalls = function(numberOfBalls) {
    for (var count = 0; count < numberOfBalls; count++) {
        creatNewSprite('ball');
    }
}

var create = function () {
    debugger
    // spike1;
    game.add.tileSprite(0,0,1280,600, "backround1");
    game.add.sprite(0,500, "ground");
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 10;
    
    
    creatAllTheBalls(250)

    
    sprite1 = game.add.sprite(360,240, 'ball');
    game.physics.arcade.enable(sprite1);
    sprite1.body.collideWorldBounds = true;
    sprite1.body.velocity.x = game.rnd.integerInRange(-500,500);
    sprite1.body.bounce.set(0.7);
    
    sprite2 = game.add.sprite(game.rnd.integerInRange(0,1000),370, "spikes");
    game.physics.arcade.enable(sprite2);
    sprite2.body.immovable = true;
    sprite2.body.bounce.set(1);
    sprite2.body.collideWorldBounds = true;
    
    sprite3 = game.add.sprite(game.rnd.integerInRange(0,1000),370, "spikes");
    game.physics.arcade.enable(sprite3);
    sprite3.body.immovable = true;
    sprite3.body.bounce.set(1);
    sprite3.body.collideWorldBounds = true;
    
    sprite4 = game.add.sprite(game.rnd.integerInRange(0,1000),471, "spikes");
    game.physics.arcade.enable(sprite4);
    sprite4.body.immovable = true;
    sprite4.body.bounce.set(1);
    sprite4.body.collideWorldBounds = true;
    
    sprite5 = game.add.sprite(1200, 100, "hoop")
    game.physics.arcade.enable(sprite5);
    sprite5.body.immovable = true;
    sprite5.body.gravity = false;
    sprite5.body.checkCollision.left = false;
    sprite5.body.checkCollision.right = false;
    sprite5.body.checkCollision.down = false;
    
    sprite6 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200), 'ball');
    game.physics.arcade.enable(sprite6);
    sprite6.body.bounce.set(0.7);
    sprite6.body.collideWorldBounds = true;
    sprite6.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite7 =  game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200),'ball');
    game.physics.arcade.enable(sprite7);
    sprite7.body.bounce.set(0.7);
    sprite7.body.collideWorldBounds = true;
    sprite7.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite8 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200),'ball');
    game.physics.arcade.enable(sprite8);
    sprite8.body.bounce.set(0.7);
    sprite8.body.collideWorldBounds = true;
    sprite8.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite9 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200),'ball');
    game.physics.arcade.enable(sprite9);
    sprite9.body.bounce.set(0.7);
    sprite9.body.collideWorldBounds = true;
    sprite9.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite10 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200), 'ball');
    game.physics.arcade.enable(sprite10);
    sprite10.body.bounce.set(0.7);
    sprite10.body.collideWorldBounds = true;
    sprite10.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite11 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200), 'ball');
    game.physics.arcade.enable(sprite11);
    sprite11.body.bounce.set(0.7);
    sprite11.body.collideWorldBounds = true;
    sprite11.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite12 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200), 'ball');
    game.physics.arcade.enable(sprite12);
    sprite12.body.bounce.set(0.7);
    sprite12.body.collideWorldBounds = true;
    sprite12.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite13 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200), 'ball');
    game.physics.arcade.enable(sprite13);
    sprite13.body.bounce.set(0.7);
    sprite13.body.collideWorldBounds = true;
    sprite13.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite14 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200), 'ball');
    game.physics.arcade.enable(sprite14);
    sprite14.body.bounce.set(0.7);
    sprite14.body.collideWorldBounds = true;
    sprite14.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    sprite15 = game.add.sprite(game.rnd.integerInRange(0,600), game.rnd.integerInRange(0,200), 'ball');
    game.physics.arcade.enable(sprite15);
    sprite15.body.bounce.set(0.7);
    sprite15.body.collideWorldBounds = true;
    sprite15.body.velocity.x = game.rnd.integerInRange(-500,500);
    
    
    this.score = 0;
    this.labelScore = game.add.text(20,20, "0", { font: "72 px Arial", fill: "#00ff00"});
    
    music = game.add.audio('boing');
    
};
 

var update = function () 
{
    debugger
    if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        sprite1.body.velocity.y = 1000;
    }
    if (sprite1.body.x === 0)
    {
        music.play();
    }
    else if (sprite1.body.x >= 1240)
    {
        music.play();
    }
    if (sprite1.body.y === 0)
    {
        music.play();
    }
    else if (sprite1.body.y === 471)
    {
        music.play()
    }
    if (sprite1.body.x )
    {
        this.score += 1;
        this.labelScore.text = this.score;
    }    
    game.physics.arcade.collide(sprite1,sprite2, collisionHandler, null, this);
    game.physics.arcade.collide(sprite1,sprite3, collisionHandler, null, this);
    game.physics.arcade.collide(sprite1,sprite4, collisionHandler, null, this);
    game.physics.arcade.collide(sprite1,sprite5, winning ,null, this);
    game.physics.arcade.collide(sprite1,sprite6);
    game.physics.arcade.collide(sprite1,sprite7);
    game.physics.arcade.collide(sprite1,sprite8);
    game.physics.arcade.collide(sprite1,sprite9);
    game.physics.arcade.collide(sprite1,sprite10);
    game.physics.arcade.collide(sprite1,sprite11);
    game.physics.arcade.collide(sprite1,sprite12);
    game.physics.arcade.collide(sprite1,sprite13);
    game.physics.arcade.collide(sprite1,sprite14);
    game.physics.arcade.collide(sprite1,sprite15);
    
    game.physics.arcade.collide(sprite6,sprite7);
    game.physics.arcade.collide(sprite6,sprite8);
    game.physics.arcade.collide(sprite6,sprite9);
    game.physics.arcade.collide(sprite6,sprite2);
    game.physics.arcade.collide(sprite6,sprite10);
    game.physics.arcade.collide(sprite6,sprite11);
    game.physics.arcade.collide(sprite6,sprite12);
    game.physics.arcade.collide(sprite6,sprite13);
    game.physics.arcade.collide(sprite6,sprite14);
    game.physics.arcade.collide(sprite6,sprite15);
    
    game.physics.arcade.collide(sprite7,sprite8);
    game.physics.arcade.collide(sprite7,sprite9);
    game.physics.arcade.collide(sprite7,sprite2);
    game.physics.arcade.collide(sprite7,sprite10);
    game.physics.arcade.collide(sprite7,sprite11);
    game.physics.arcade.collide(sprite7,sprite12);
    game.physics.arcade.collide(sprite7,sprite13);
    game.physics.arcade.collide(sprite7,sprite14);
    game.physics.arcade.collide(sprite7,sprite15);
    
    game.physics.arcade.collide(sprite8,sprite9);
    game.physics.arcade.collide(sprite8,sprite2);
    game.physics.arcade.collide(sprite8,sprite10);
    game.physics.arcade.collide(sprite8,sprite11);
    game.physics.arcade.collide(sprite8,sprite12);
    game.physics.arcade.collide(sprite8,sprite13);
    game.physics.arcade.collide(sprite8,sprite14);
    game.physics.arcade.collide(sprite8,sprite15);
    
    game.physics.arcade.collide(sprite9,sprite10);
    game.physics.arcade.collide(sprite9,sprite2);
    game.physics.arcade.collide(sprite9,sprite11);
    game.physics.arcade.collide(sprite9,sprite12);
    game.physics.arcade.collide(sprite9,sprite13);
    game.physics.arcade.collide(sprite9,sprite14);
    game.physics.arcade.collide(sprite9,sprite15);
    
    game.physics.arcade.collide(sprite10,sprite2);
    game.physics.arcade.collide(sprite10,sprite11);
    game.physics.arcade.collide(sprite10,sprite12);
    game.physics.arcade.collide(sprite10,sprite13);
    game.physics.arcade.collide(sprite10,sprite14);
    game.physics.arcade.collide(sprite10,sprite15);
    
    game.physics.arcade.collide(sprite11,sprite2);
    game.physics.arcade.collide(sprite11,sprite12);
    game.physics.arcade.collide(sprite11,sprite13);
    game.physics.arcade.collide(sprite11,sprite14);
    game.physics.arcade.collide(sprite11,sprite15);
    
    game.physics.arcade.collide(sprite12,sprite2);
    game.physics.arcade.collide(sprite12,sprite13);
    game.physics.arcade.collide(sprite12,sprite14);
    game.physics.arcade.collide(sprite12,sprite15);
    
    game.physics.arcade.collide(sprite13,sprite2);
    game.physics.arcade.collide(sprite13,sprite14);
    game.physics.arcade.collide(sprite13,sprite15);
    
    game.physics.arcade.collide(sprite14,sprite2);
    game.physics.arcade.collide(sprite14,sprite15);
    
    game.physics.arcade.collide(sprite15,sprite2);
    
    
    
    
    
};
var collisionHandler = function (obj1, obj2) {
    debugger;
    alert("Game over! Try again?");
    game.state.restart();
};
var winning = function (obj1,obj2) {
    debugger;
    alert("You win! Try again?");
    game.state.restart();
};

var render = function () {
    debugger;
    game.debug.text(sprite1.body.y, 2, 14, '#00ff00');
    game.debug.body(sprite1);
    
};

var mainState = { preload: preload, create: create, render: render, update: update };
game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, 'game');
game.state.add('main', mainState);
game.state.start('main');
