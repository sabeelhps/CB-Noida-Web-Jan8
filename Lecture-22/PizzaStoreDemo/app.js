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
}

async function main() {
    const allPizza = await PizzaStore.getAllPizzas();
    console.log(allPizza);
    const updatedPizza = await PizzaStore.applyDiscountOnPizza(999, 50);
    console.log(updatedPizza);
    const allPizza1 = await PizzaStore.getAllPizzas();
    console.log(allPizza1);

    // const bulkPizzaList = await PizzaStore.apply50PerDiscountOnBulkPizza(999,888)
}

main();