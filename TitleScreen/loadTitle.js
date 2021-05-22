var barn;
var pig;
var haybale = new Array(17);
var text;

function preload()
{
    barn = loadImage('../Images/Barn.png');
    pig = loadImage('../Images/Pig.png');

    for (let i = 0; i < haybale.length; i++)
    {
        haybale[i] = loadImage('../Images/HayBale.png');
    }
}

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight) //make canvas fill entire webpage
    text = createElement('h1', 'Programmer Farm') //title to appear
}

function draw()
{
    barn.resize(window.innerWidth, window.innerHeight) //resize barn image to fill canvas/webpage
    background(barn) //barn is the background

    text.style('font-size', '130px')
    text.position(285,5)
    text.style('font-family', 'Fonts/PressStart2P-Regular.ttf')
    text.style('color', 'yellow')

    for (let i = 0; i < haybale.length; i++)
    {
        image(haybale[i], -5+i*89, 560, 100, 100) //bottom most layer of haybales
        image(haybale[i], -5+i*89, 600, 100, 100) //overlapped haybales layer 1
        image(haybale[i], -5+i*89, 640, 100, 100) //overlapped haybales layer 2
    }
    
    for (let i = 0; i < 8; i++)
    {
        image(haybale[i], 245+i*89, 507, 100, 100) //second layer of haybales
    }

    for (let i = 0; i < 7; i++)
    {
        image(haybale[i], 300+i*89, 454, 100, 100) //third layer of haybales
    }

    for (let i = 0; i < 6; i++)
    {
        image(haybale[i], 358+i*89, 401, 100, 100) //fourth layer of haybales
    }

    for (let i = 0; i < 5; i++)
    {
        image(haybale[i], 380+i*89, 348, 100, 100) //fifth and top most layer of haybales
    }

    for (let i = 0; i < 1; i++)
    {
        image(haybale[i], 558+i*89, 295, 100, 100) //top most haybale that pig stands on
    }

   image(pig, 575, 240, 80, 80) //display pig
}