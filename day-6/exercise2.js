class product {
    name = ""
    price =0
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const product1 = new product("apple", 4000)
const product2 = new product("banana", 7000)
const product3 = new product("orange", 9000)
const product4 = new product("melon", 14000)

class transaction {
    #total = 0
    product = []

    addToCart(item, qty) {
        item.qty = qty
        this.product.push(item)
    }
    getTotal () {
        this.product.forEach(item => {
            this.#total += item.price * item.qty
            console.log ('${item.name} x $ {item.qty} = $ {item,price * item.qty}');
        });
        console.log('total : $ {this.#total}')
    }

    checkout(money) {
        if (money < this.#total) {
            console.log("uang tidak cukup");
        }else {
            console.log('cash : ${money}');
            console.log('return : $ {money - this.#total}');
        }
    }
}

const transaction1 =new transaction()
transaction1.addToCart(product1, 4)
transaction1.addToCart(product3, 2)
transaction1.addToCart(product4, 3)
transaction1.addToCart(product2, 5)
console.log(transaction1);
transaction1.getTotal()
transaction1.checkout(100000)