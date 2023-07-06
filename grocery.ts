// SWDV 665: Advanced Topics
// Grocery class

class Grocery {
    name: string;
    quantity: number;
    price: number;

    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

function main() {
    const groceries: Array<Grocery> = [
        new Grocery('Eggs', 12, 3.50),
        new Grocery('Bread', 15, 2.00),
        new Grocery('Milk', 5, 3.00),
        new Grocery('Lemonade', 15, 1.85),
        new Grocery('Cheese', 8, 4.00)
    ];

    const groceryList: HTMLElement = document.getElementById('groceryList')!;

    for(const grocery of groceries) {
        const liEle: HTMLElement = document.createElement('li');
        liEle.innerText = `Name: ${grocery.name} | Quantity: ${grocery.quantity} | Price: $${grocery.price.toFixed(2)}`;
        
        groceryList.appendChild(liEle);
    }
}

main();
