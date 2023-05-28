class PizzaStore{
    static pizzas = [
        {
            id: 999,
            name: 'Cheeze Pizza',
            price: 100,
        },
        {
            id: 888,
            name: 'Choclate Pizza',
            price: 200
        },
        {
            id: 777,
            name: 'Chicken Pizza',
            price: 300
        }
    ];

    static walletAmount = 5000;

    static getAllPizzas() {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(this.pizzas);
            }, 2000);
        })
    }

    static applyDiscountOnPizza(id, discount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const foundPizza = this.pizzas.find((pizza) => pizza.id === id);
                foundPizza.price = foundPizza.price - (foundPizza.price * discount / 100);
                resolve(foundPizza);
            }, 3000);
        })
    }

    static async apply50PerDiscountOnBulkPizza(...pizzaIds) { // here we using rest parameters
        
        // THIS CODE IS WRITTEN IN A SERIES FORMAT WHICH WILL HAMPER THE PERFORMANCE
        // const list = [];
        // for (let id of pizzaIds) {
        //     const pizza = await this.applyDiscountOnPizza(id, 50);
        //     list.push(pizza);
        // }
        // return list;

        // WE CAN WRITE THE ABOVE CODE USING COMPLETE PARELLEL STYLE
        const list = [];
        for (let id of pizzaIds) {
            const pizza = this.applyDiscountOnPizza(id, 50);
            list.push(pizza);
        }
        return await Promise.all(list);
    }

    static performPayment(orderId, amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.walletAmount >= amount) {
                    const TxnId = "TXN" + Math.floor(Math.random() * 100000);
                    this.walletAmount = this.walletAmount - amount;
                    resolve(TxnId, orderId);
                } else {
                    reject('Insufficient Balance!');
                }
              
            }, 1000); 
        });
    }

    static sendEmailNotification(email, orderId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Email Sent to ${email} for the orderId : ${orderId}`);
            }, 1000);
        })
    }

    static createPizzaOrder(orderRequest) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const OrderId = "ODR" + Math.floor(Math.random() * 10000);
                const totalAmount = orderRequest.pizzas.reduce((total, pizza) => total + pizza.price*pizza.qty, 0);
                resolve({ OrderId, orderRequest, totalAmount});
            }, 1000);
        })
    }
}

async function main() {
    // const allPizza = await PizzaStore.getAllPizzas();
    // console.log(allPizza);
    // const updatedPizza = await PizzaStore.applyDiscountOnPizza(999, 50);
    // console.log(updatedPizza);
    // const allPizza1 = await PizzaStore.getAllPizzas();
    // console.log(allPizza1);
    // console.time('timer');
    // const pizzalist = await PizzaStore.apply50PerDiscountOnBulkPizza(999, 888, 777);
    // console.log(pizzalist);
    // console.timeEnd('timer');
    const orderRequest = {
        pizzas: [
            { id: 999, price: 10, qty: 2 },
            { id: 888, price: 20, qty: 3 }
        ]
    }
    const order = await PizzaStore.createPizzaOrder(orderRequest);
    console.log(order);
}

main();