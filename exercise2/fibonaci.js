// n=10  → 0 1 1 2 3 5 8 13 21 34

let n =10
let curr =0
let next =1

for (let i = 1; i<= n; i++) {
    console.log(curr)
    desc += '${curr}'
    let count =curr + next
    curr=next
    nex=count
}

console.log('${n} → ${desc}');