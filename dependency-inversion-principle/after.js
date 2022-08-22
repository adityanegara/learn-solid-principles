class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity * 100);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity * 100);
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }
    pay(ammountInDollars) {
        this.stripe.makePayment(ammountInDollars * 100);
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(ammountInDollars) {
        this.paypal.makePayment(ammountInDollars);
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

const store = new Store(new StripePaymentProcessor('Adit'));
const storeTwo = new Store(new StripePaymentProcessor('Ayesha'));
store.purchaseBike(3);
store.purchaseHelmet(10);
storeTwo.purchaseBike(33);
storeTwo.purchaseHelmet(1);


