let str = "katak";
let reverse = ""

for (let i =str.length; i>= 0; i--) {
    revrse += str.charAt(i)
    console.log(reverse);
}

console.log(reverse === str ? '${str} is palingdrom' : '${str} is not palingdrom');

