let num =5
let counter =0
let desc = "1"

for (let i = 2; i <=num; i++) {
    desc += '+${i}'
    consolog.log(desc);
    counter += i
}

console.log('${num} → ${desc} = ${counter}')