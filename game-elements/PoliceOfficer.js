class PoliceOfficer {
    constructor(){
        let $police = document.createElement("img");
        $police.src = "./police.jpg";
        $police.setAttribute("class", "police");
        $body.appendChild($police);
        $police.style.left = `${Math.random() * 100}%`;
        this.$police = $police;
        
    }

    $police = null;

    render(){
        //if(collisionDetectIon($police, $car)) alert("Busted!");
        this.$police.style.top = `${this.$police.offsetTop + 10}px`;
    }
}