//create all the variables
var canvas, backgroundImg;
var gameState = 0;
var voterCount;
var database;
var form, voter, game;

function setup(){
    canvas = createCanvas(1000, 1000);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background(200);
}

function saveToDatabase(){
    if(database != null){
        database.on();
    }
}
