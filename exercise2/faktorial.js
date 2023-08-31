let num =5
let counter =1
let desc = '${num}' //menyamakan dengan num dalam bentuk string

for (let i = num; i >0; i++) {
    desc += 'x ${i - 1}'
    counter *= i
}

console.log('${num} → ${desc} = ${counter}')


    