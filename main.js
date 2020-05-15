function collisionDetectIon($dom1,$dom2){
    
    let sq1 = {
        x: $dom1.offsetLeft,
        y: $dom1.offsetTop,
        width: $dom1.offsetWidth,
        height: $dom1.offsetHeight
    }
    
    let sq2 = {
        x:$dom2.offsetLeft,
        y:$dom2.offsetTop,
        width:$dom2.offsetWidth,
        height:$dom2.offsetHeight
    }
    // Method 1. Works with all rectangles and is cleaner.
    if(!(sq2.y + sq2.height < sq1.y || 
          sq2.y > sq1.y + sq1.height ||
          sq2.x + sq2.width < sq1.x ||
          sq2.x > sq1.x + sq1.width   
    )) {
        console.log("Collision!");
        return true;
    } else {
        console.log("No collision!");
        return false
    }
}


let $body = document.querySelector("body");
let game = new Game();