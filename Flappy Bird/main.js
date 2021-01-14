// mình bắt đầu nhé hôm nay mic hư :)
let canvas= document.getElementById('myFlappy');
let scoreShow=document.getElementById('score');
let score = document.getElementById('scoreNumber').value
// score.innerHTML.style.color= "red"
let birdImg = new Image();
let context= canvas.getContext('2d');

birdImg.src = "bird.png"
let background = new Image();

background.src = "nenchinh.png";
let upperTube = new Image();

upperTube.src = "ongtren.png"
let lowerTube = new Image()

lowerTube.src ="ongduoi.png"

//Create data after adding images   

// Create score
// let score =   0;

let spaceTubes = 140; // Space from 2 tubes
let spaceToLower;
let bird = {
    x: background.width/5,
    y: background.height/2
}
let tubes = []  // Create moving tubes
tubes[0] = {
    x:canvas.width,
    y: 0 // Initialize y=0
}

//Create function

function run(){
    context.drawImage(background,0,0);
    context.drawImage(birdImg,bird.x,bird.y);

    for(let i=0; i<tubes.length;i++){
        spaceToLower= upperTube.height+spaceTubes;
        context.drawImage(upperTube,tubes[i].x, tubes[i].y);

        //Lower tubes depend on upper tubes
        context.drawImage(lowerTube,tubes[i].x, tubes[i].y+ spaceToLower);

        tubes[i].x-=5; // For tubes to move

        //When tubes move, create more tubes
        if(tubes[i].x == canvas.width/2){
            tubes.push({
                x:canvas.width,
                y:Math.floor(Math.random()*upperTube.height)-upperTube.height
                
            })
        }
        if(tubes[i].x ==0 )tubes.splice(0,1);
        //If tube touches left corner then will be deleted

        if(tubes[i].x == bird.x)score++;

        //When Lose
        if(bird.y+birdImg.height==canvas.height||
            bird.x+birdImg.width>= tubes[i].x && bird.x <= tubes[i].x +upperTube.width
            && (bird.y<=tubes[i].y+upperTube.height||
            bird.y +birdImg.height>= tubes[i].y+ spaceToLower)    
            ){
            alertify.alert('You lose! Play Again!!');

                return;
            }  
        }    
    scoreShow.innerHTML= score  
    //Let birds go down
    bird.y += 2.5;
    requestAnimationFrame(run)
}
//Fly when press key
document.addEventListener("keydown",function(){
    bird.y -=60;
})
run();