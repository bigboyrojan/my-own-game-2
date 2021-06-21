
var  dolphin, shark, fish, blobfish;
var dolphinimg, sharkimg, fishimg, blobfishimg;
var house, houseimg;
var daybackground, nightbackground;
var daybackgroundimg, nightbackgroundimg;

var track1,track2,track3,track4,track5,track6,track7,track8,track9,track10,track11,track12,track13,track14,track15;

var tracks1,tracks2,tracks3,tracks4,tracks5,tracks6, tracks7,tracks8,tracks9,tracks10,tracks11,tracks12,tracks13,tracks14,tracks15;

var rail1,rail2,rail3,rail4,rail5,rail6,rail7,rail8,rail9,rail10,rail11,rail12,rail13,rail14,rail15;

var rails1,rails2,rails3,rails4,rails5,rails6,rails7,rails8,rails9,rails10,rails11,rails12,rails13,rails14,rails15;

var diceanimation1,diceanimation2,diceanimation3,diceanimation4,diceanimation5,diceanimation6;

var backgroundImage,line;
function preload(){
dolphinimg = loadImage("images/gamedolphin.png");
sharkimg = loadImage("images/gameshark.png");
fishimg = loadImage("images/gamefish.png");
blobfishimg = loadImage("images/gameblobfish.png");
houseimg = loadImage("images/gamehouse.png");
daybackgroundimg = loadImage("images/gamedaybackground.PNG");
nightbackgroundimg = loadImage("images/gamenightbackground.PNG");
diceanimation1 = loadImage("images/dice1.PNG");
diceanimation2 = loadImage("images/dice2.PNG");
diceanimation3 = loadImage("images/dice3.PNG");
diceanimation4 = loadImage("images/dice4.PNG");
diceanimation5 = loadImage("images/dice5.PNG");
diceanimation6 = loadImage("images/dice6.PNG");
backgroundImage = loadImage("images/gamedaybackground.png");
}

function setup(){
createCanvas(1000,1000);
dolphin = createSprite(50,50,30,30);
dolphin.addImage(dolphinimg);
dolphin.scale = 0.35;
shark = createSprite(950,920,30,30);
shark.addImage(sharkimg);
shark.scale = 0.45;
shark.depth = 10;
fish = createSprite(50,950,30,30);
fish.addImage(fishimg);
fish.scale = 0.4;
blobfish = createSprite(950,50,30,30);
blobfish.addImage(blobfishimg);
blobfish.scale = 0.5;
house = createSprite(500,500,30,30);
house.addImage(houseimg);
house.scale = 0.75;
line = createSprite(500,577,200,5);
line.shapeColor = "black";
}

function draw(){
    background(backgroundImage);
    console.log(shark.depth);
drawSprites();
}

