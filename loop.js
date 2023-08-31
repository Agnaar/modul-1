// while loop

let i =0 // 3

while (i <= 3) {
    console.log("hello ke ${i}");
    i++
}

// do while
do {
    console.log('hello ke ${i} do while');
    i++
} while (i < 3);

// break
let sum =0

while (true) {
    if (sum === 5) break
    console.log(sum)
    sum++
}
