const car = {
    brand :"honda",
    model : "supra",
    price : 10000000
}
 
// cara ke 2
const car2 =new object ({
brand : "honda",
model : "supra",
price : 1000000
})

// accessing value 
console.log(car.brand);

console.log(car['brand'])


//properties and method
let user = {
    name : "agna",
    greet() {
        console.log("hello")
    }
}

user.greet()

//add property
user.age = 25
console.log(user);

//update property
user.name = "budi"
console.log(user);

//delete property
delete user.greet
console.log(user);


let person = {
    name : "asep",
    // addres : {
    //     city : "cimahi",
   // }
}

//eror
console.log (person.addres.city)

// optional chaining
console.log (person.addres?.city)

//accessing key
console.log(Object.keys(person));
console.log(Object.keys(person.addres));

//for in
for (const key in person) {
    console.log(key)
    console.log(person[key]);    
    }

 //getter & setter   
 let student = {
    firstName : "jhon",
    lastName : "smith",

    get fullName(){
        return '${this.firstName}  ${this.lastName}'
    },
    set fullName(value) {

    }
 }












 //desructuring
 let arr = ["apple", "lemon"]
 let [a, b] = arr
 console.log(a);
 console.log(b);


 let fruit ={
    name : "apple",
    color : "red"
 }

 //object destructuring
 let {color, name} = fruit

 console.log(name);
 console.log(fruit, name);

 let fruit2 = {
    price: 10000
    
 }



 let fruits = {...fruit, ...fruit2}
 console.log(fruit)

 let fruits2 = object.assign(fruit, fruit2)
 console.log(fruits2);