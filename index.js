
for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonpress=this.innerHTML;
       makesound(buttonpress);
    
       
    });}
    
document.addEventListener("keypress",function(event){
    makesound(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
            var snd = new Audio("sounds/tom-1.mp3"); // buffers automatically when created
            snd.play();
            break;
        case "a":
             var snd1 = new Audio("sounds/tom-2.mp3"); // buffers automatically when created
            snd1.play();
        case "s":
            var snd2 = new Audio("sounds/tom-3.mp3"); // buffers automatically when created
            snd2.play();
        case "d":
           var snd3 = new Audio("sounds/tom-4.mp3"); // buffers automatically when created
            snd3.play();
        case "j":
            var snd4 = new Audio("sounds/crash.mp3"); // buffers automatically when created
            snd4.play();
        case "k":
            var snd5 = new Audio("sounds/kick-bass.mp3"); // buffers automatically when created
            snd5.play();
        default:
           var snd6 = new Audio("sounds/snare.mp3"); // buffers automatically when created
            snd6.play();
            break;
       }
    };
