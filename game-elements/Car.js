class Car {
    constructor(){
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
    }
}
