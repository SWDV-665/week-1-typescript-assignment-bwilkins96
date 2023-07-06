// SWDV 665: Advanced Topics
// Grocery class
var Grocery = /** @class */ (function () {
    function Grocery(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
function main() {
    var groceries = [
        new Grocery('Eggs', 12, 3.50),
        new Grocery('Bread', 15, 2.00),
        new Grocery('Milk', 5, 3.00),
        new Grocery('Lemonade', 15, 1.85),
        new Grocery('Cheese', 8, 4.00)
    ];
    var groceryList = document.getElementById('groceryList');
    for (var _i = 0, groceries_1 = groceries; _i < groceries_1.length; _i++) {
        var grocery = groceries_1[_i];
        var liEle = document.createElement('li');
        liEle.innerText = "Name: ".concat(grocery.name, " | Quantity: ").concat(grocery.quantity, " | Price: $").concat(grocery.price.toFixed(2));
        groceryList.appendChild(liEle);
    }
}
main();
