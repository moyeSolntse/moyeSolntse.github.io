var character = document.getElementById("character");
var block = document.getElementById("block");
var cnt = 0;
function jump(){
    if(character.classlist == "animate"){return}
        character.classList.add("animate");
        setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
   let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   if(blockLeft < 20 && blockLeft > -20 && characterTop >= 130){
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(cnt/100));
        cnt = 0;
        block.style.animation = "block 1s infinite linear";
   }else{
        cnt++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(cnt/100);
    }
}, 10);