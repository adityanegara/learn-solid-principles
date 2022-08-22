class Store {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(200 * quantity * 100);
    }

    purchaseHelmet(quantity) {
        this.stripe.makePayment(15 * quantity * 100);
    }
}

class StorePaypal {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }
    purchaseBike(quantity) {
        this.paypal.makePayment(this.user, 200 * quantity * 100);
    }

    purchaseHelmet(quantity) {
        this.paypal.makePayment(this.user, 15 * quantity * 100);
    }
}




class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`${this.user} made payment of ${amountInCents / 100}  with stripe`)
    }
}

class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars} with Paypal`);
    }
}

const store = new Store('Adit');
store.purchaseBike(3);
store.purchaseHelmet(10);


const test = new StorePaypal('Aura');
test.purchaseBike(3);
test.purchaseHelmet(10);
