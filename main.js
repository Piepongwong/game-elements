// function isCollide($element1, $element2) {
//     var a = {
//         y: 100 - $element1.offsetTop - $element1.height, 
//         x: $element1.offsetLeft,
//         height: $element1.height,
//         width: $element1.width
//     }
//     var b = {
//         y: 100 - $element2.offsetTop - $element2.height, 
//         x: $element2.offsetLeft,
//         height: $element2.height,
//         width: $element2.width
//     }

//     return !(
//         ((a.y + a.height) < (b.y)) ||
//         (a.y > (b.y + b.height)) ||
//         ((a.x + a.width) < b.x) ||
//         (a.x > (b.x + b.width))
//     );
// }

let $box1 = document.querySelector(".box-1");
let $box2= document.querySelector(".box-2");

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
    // Method 2. Only works with squares and is more verbose.
    // if( (sq2.y >= sq1.y && sq2.y <= sq1.y + sq1.height) && (sq2.x >= sq1.x && sq2.x <= sq1.x + sq1.width) ||
    //     (sq2.y >= sq1.y && sq2.y <= sq1.y + sq1.height) && (sq2.x + sq2.width >= sq1.x && sq2.x + sq2.width <= sq1.x + sq1.width) ||
    //     (sq2.y + sq2.height >= sq1.y && sq2.y + sq2.height <= sq1.y + sq1.height) && (sq2.x >= sq1.x && sq2.x <= sq1.x + sq1.width) ||
    //     (sq2.y + sq2.height >= sq1.y && sq2.y + sq2.height <= sq1.y + sq1.height) && (sq2.x + sq2.width >= sq1.x) && (sq2.x + sq2.width <= sq1.x + sq1.width)
    // ) {
    //     console.log("Collision!");
    //     return true;
    // } else {
    //     console.log("NO collision!");
    //     return false;
    // }
}


let $box3 = document.querySelector(".box-3");
let $grandma = document.querySelector("#grandma");

// let $box4= document.querySelector(".box-4");
// collisionDetectIon($box1, $box2);
// collisionDetectIon($box3, $box4);
let $car = document.querySelector("#car");
document.addEventListener("keydown", function(event){
    switch (event.key.toLowerCase()) {
        case "d":
            $car.style.left = `${$car.offsetLeft + 10}px`;
            break;
        case "a":
            $car.style.left = `${$car.offsetLeft - 10}px`;
            break;
        case "w":
            $car.style.top = `${$car.offsetTop - 10}px`;
            break;
        case "s":
            $car.style.top = `${$car.offsetTop + 10}px`;
            break;
        default:
            break;
    }
    if(collisionDetectIon($grandma, $car)) alert("You hit grandma. BOooooe!");
})

// setInterval(()=> {
//     $grandma.style.left = `${$grandma.offsetLeft + 10}px`
// },500)

let $body = document.querySelector("body");
// let policeOfficers = [];
// setInterval(()=> {
//     let $police = document.createElement("img");
//     $police.src = "./police.jpg";
//     $police.setAttribute("class", "police");
//     $body.appendChild($police);
//     $police.style.left = `${Math.random() * 100}%`;
//     policeOfficers.push($police);
// },3000)

// setInterval(()=> {
//     policeOfficers.forEach(($police)=> {
//         if(collisionDetectIon($police, $car)) alert("Busted!");
//         $police.style.top = `${$police.offsetTop + 10}px`;
//     })
// },500)