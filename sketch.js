var database, back_img, gameState = 0, playerCount = 0, allPlayers, player, form, game, player1, player2, players, fruits, fruitGroup, fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img, player_img;

function preload(){
  back_img = loadImage("jungle.jpg");
  player_img = loadImage("basket2.png");
  fruit1_img = loadImage("apple2.png");
  fruit2_img = loadImage("banana2.png");
  fruit3_img = loadImage("melon2.png");
  fruit4_img = loadImage("orange2.png");
  fruit5_img = loadImage("pineapple2.png");
  fruitGroup = new Group();
}

function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(back_img);
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}