let number =19
let divider =0

for (let i = 1; i <=number; i++) {
    if (number % i === 0) {
        divider++
    }
}

console.log('${number} ${divider === 2 ? 'is' : 'is not'} prime number');