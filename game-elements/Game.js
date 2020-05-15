class Game {
    constructor(){
        this.render();
    }

    car = new Car();
    grandma = new Grandma();
    officers = [new PoliceOfficer()];

    render(){
        setInterval(()=> {
            this.grandma.render();
            this.officers.forEach((officer)=> {
                officer.render();
            })
        }, 200)
    }
}