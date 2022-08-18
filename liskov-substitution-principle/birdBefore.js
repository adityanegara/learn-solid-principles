class Bird {
    fly() {
        console.log('I can fly')
    }
}

class Duck extends Bird {
    quack() {
        throw new Error('I can quack')
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error('Cannot fly')
    }

    swim() {
        console.log('I can swim')
    }
}

const makeBirdFly = (bird) => {
    bird.fly();
}


const duck = new Duck();
const penguin = new Penguin();
penguin.fly();
makeBirdFly(duck);
makeBirdFly(penguin);