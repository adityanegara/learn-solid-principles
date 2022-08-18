class FlyingBird {
    fly() {
        console.log('I can fly')
    }
}

class SwimmingBird {
    swim() {
        console.log('I can swim')
    }
}

class Duck extends FlyingBird {
    quack() {
        throw new Error('I can quack')
    }
}

class Penguin extends SwimmingBird {
    fly() {
        throw new Error('Cannot fly')
    }
}

const makeFlyingBirdFly = (bird) => {
    bird.fly();
}

const makeSwimmingBirdSwim = (bird) => {
    bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();
makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);