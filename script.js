//All Sounds
let gun=document.getElementById("gun");
let Loops=document.getElementById("loop");
let playerimgchange=document.getElementById("imgplay");
let GameOverS=document.getElementById("GameOverS");

setTimeout(()=>{
    let loading=document.getElementById("loading");
    loading.style.display="none";
},10000)


let player =document.getElementById("player");
let kill=document.getElementById("kill");
let play=document.getElementById("play");
let gameover=document.getElementById("gameover");
let time=document.getElementById("time");
let playbox=document.getElementById("playbox");
let reset=document.getElementById("reset");
let game=document.getElementById("game");
let Kills=document.getElementById("Kill");
let playerskn=document.getElementById("playerskn");
let boxplayer=document.getElementById("boxPlayer");
let cl=document.getElementById("cl");
let imagesPlayer=document.querySelectorAll("#boxPlayer .boximg img");
let back=document.getElementById("back");
let backimg=document.querySelectorAll("#back #b img");
let background=document.getElementById("background");
let clo=document.getElementById("clo");







background.addEventListener("click",()=>{
    playbox.style.display="none";
    back.style.display="inline-block";
})
clo.addEventListener("click",()=>{
    playbox.style.display="inline-block";
    back.style.display="none";
})



backimg.forEach((imgs)=>{
    imgs.addEventListener("click",()=>{
        game.style.backgroundImage=`url(${imgs.src})`;
    })
})

imagesPlayer.forEach((img)=>{
    img.addEventListener("click",()=>{
        player.style.backgroundImage=`url(${img.src})`;
        playerimgchange.currentTime=0;
         playerimgchange.play();
    })
})

let a=0;
player.addEventListener("click",()=>{
    gun.currentTime=0;
    gun.play();
    player.style.left=Math.floor(Math.random()*280)+"px";
    player.style.top=Math.floor(Math.random()*480)+"px";
    a=a+1;
    kill.innerText=a;
    Kills.innerText=a;
})
let t=30;

setInterval(()=>{
    t=t-1;
    time.innerText=t;
    if(t==0&&playbox.style.display=="none"&&game.style.display=="inline-block"){
        gameover.style.display="inline-block";
        Loops.pause();
        Loops.loop=false;
        GameOverS.play();
    }
},1000)


reset.addEventListener("click",()=>{
    gameover.style.display="none";
    playbox.style.display="inline-block";
    game.style.display="none";
    GameOverS.pause();
})


play.addEventListener("click",()=>{
    a=0;
    t=30;
    playbox.style.display="none";
    game.style.display="inline-block";
    Loops.loop=true;
    Loops.play();
})

playerskn.addEventListener("click",()=>{
    boxplayer.style.display="inline-block";
    playbox.style.display="none";
})
cl.addEventListener("click",()=>{
    boxplayer.style.display="none";
    playbox.style.display="inline-block";
    playerimgchange.pause();
})