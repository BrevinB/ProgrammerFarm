var barn; //barn image
var pig; //pig
var haybale = new Array(6); //haybale array
var title; //Programmer Farm title
var presstoPlay; //text that tells player to click anywhere to start gameplay
var myFont; 

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
    presstoPlay = createP('Click anywhere to play!')
    //title.textFont(myFont)
}

function draw()
{
    barn.resize(window.innerWidth, window.innerHeight) //resize barn image to fill canvas/webpage
    background(barn) //barn is the background

    //create stools for sign to stand on
    strokeWeight(20)
    stroke(160, 73, 30)
    line(250, 265, 250, 615) //leftmost stool
    line(1369, 265, 1369, 615) //rightmost stool

    //create sign for title to appear on
    fill(160, 73, 30)
    strokeWeight(4)
    stroke(0, 0, 0)
    rect(235, 45, 1150, 220)

    //style title
    title.style('font-size', '74px')
    title.position(269,78)
    title.style('color', 'white')
    title.style('font-family', 'PressStart2P-Regular')

    //text that tells player to click anywhere to commence gameplay
    presstoPlay.style('font-size', '22px')
    presstoPlay.position(530, 190)
    presstoPlay.style('color', 'white')
    presstoPlay.style('font-family', 'PressStart2P-Regular')

    //make points to represent nails in the wood of the sign
    for (let i = 0; i < 15; i++) //uppermost nails
    {
        stroke('grey');
        strokeWeight(4);
        point(250+i*80, 80);
    }

    for (let i = 0; i < 15; i++) //lowermost nails
    {
        stroke('grey');
        strokeWeight(5);
        point(250+i*80, 235);
    }



    for (let i = 0; i < haybale.length; i++)
    {
        image(haybale[i], 350+i*89, 560, 100, 100) //bottom most layer of haybales
    }
    
    for (let i = 0; i < 5; i++)
    {
        image(haybale[i], 390+i*89, 507, 100, 100) //second layer of haybales
    }

    for (let i = 0; i < 4; i++)
    {
        image(haybale[i], 443+i*89, 454, 100, 100) //third layer of haybales
    }

    for (let i = 0; i < 3; i++)
    {
        image(haybale[i], 487+i*89, 401, 100, 100) //fourth layer of haybales
    }

    for (let i = 0; i < 2; i++)
    {
        image(haybale[i], 530+i*89, 348, 100, 100) //fifth and top most layer of haybales
    }

    for (let i = 0; i < 1; i++)
    {
        image(haybale[i], 573+i*89, 295, 100, 100) //top most haybale that pig stands on
    }

   image(pig, 590, 240, 80, 80) //display pig
}

function mousePressed()
{
    
}
