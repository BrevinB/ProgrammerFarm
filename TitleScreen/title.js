var backdrop; //title backdrop

function preload()
{
    backdrop = loadImage('../Images/TitleScreen(6).png')
}

function setup()
{
    createCanvas(window.innerWidth, window.innerHeight)
    backdrop.resize(window.innerWidth, window.innerHeight)
    background(backdrop)
}