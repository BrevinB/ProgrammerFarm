var barn; //barn image
var pig; //pig
var haybale = new Array(6); //haybale array
var title; //Programmer Farm title
var pressToPlay; //text prompting user to click screen to start playing
var myFont; //font to be used for text

function preload()
{
    barn = loadImage('../Images/Barn.png');
    pig = loadImage('../Images/Pig.png');
    loadFont('../Fonts/PressStart2P-Regular.ttf');

    for (let i = 0; i < haybale.length; i++)
    {
        haybale[i] = loadImage('../Images/HayBale.png');
    }
}

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight) //make canvas fill entire webpages
    title = createElement('h1', 'PROGRAMMER FARM') //title to appear
    pressToPlay = createP('Click anywhere to start!') //prompt text to appear
}

function draw()
{
    barn.resize(window.innerWidth, window.innerHeight) //resize barn image to fill canvas/webpage
    background(barn) //barn is the background

    //create stools for sign to stand on
    strokeWeight(20)
    stroke(160, 73, 30)
    line(250, 265, 250, 680) //leftmost stool
    line(1450, 265, 1450, 680) //rightmost stool

    //create sign for title to appear on
    fill(160, 73, 30)
    strokeWeight(4)
    stroke(0, 0, 0)
    rect(235, 90, 1230, 220)

    //style title
    title.style('font-size', '74px')
    title.position(290,123)
    title.style('color', 'white')
    title.style('font-family', 'PressStart2P-Regular')

    //style press to play prompt
    pressToPlay.style('font-size', '20px')
    pressToPlay.position(563,240)
    pressToPlay.style('color', 'white')
    pressToPlay.style('font-family', 'PressStart2P-Regular')

    //make points to represent nails in the wood of the sign
    for (let i = 0; i < 16; i++) //uppermost nails
    {
        stroke('grey');
        strokeWeight(5);
        point(250+i*80, 105);
    }

    for (let i = 0; i < 16; i++) //lowermost nails
    {
        stroke('grey');
        strokeWeight(5);
        point(250+i*80, 295);
    }



    for (let i = 0; i < haybale.length; i++)
    {
        image(haybale[i], 350+i*89, 660, 100, 100) //bottom most layer of haybales
    }
    
    for (let i = 0; i < 5; i++)
    {
        image(haybale[i], 390+i*89, 607, 100, 100) //second layer of haybales
    }

    for (let i = 0; i < 4; i++)
    {
        image(haybale[i], 443+i*89, 554, 100, 100) //third layer of haybales
    }

    for (let i = 0; i < 3; i++)
    {
        image(haybale[i], 487+i*89, 501, 100, 100) //fourth layer of haybales
    }

    for (let i = 0; i < 2; i++)
    {
        image(haybale[i], 530+i*89, 448, 100, 100) //fifth and top most layer of haybales
    }

    for (let i = 0; i < 1; i++)
    {
        image(haybale[i], 573+i*89, 395, 100, 100) //top most haybale that pig stands on
    }

   image(pig, 590, 342, 80, 80) //display pig

   pig.mousePressed()
}

function mousePressed()
{
   
}