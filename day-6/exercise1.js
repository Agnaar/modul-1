








const student1 = new student ("anto", "anto@gmail.com", "2000-04-01", 80)
const student2 = new student ("bambang", "anto@gmail.com", "2004-04-01", 80)
const student3 = new student ("cahyono", "anto@gmail.com", "2001-04-01", 80)

const arrStudent = [student1, student2, student3]

console.log(arrStudent)

function convertAge(date) {
    let birthdate = new date(date).getTime()
    let now = new date().getTime()
    let diff = now - birthdate

    return Math.floor(diff/ (24))
}

