
// map
// 1) Увеличить возраст всех людей на 5 лет
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
    ]

const updatedAge = people.map(person => {
    return person.age + 5
})
console.log(updatedAge);


// 2) Получить массив, где только имена (строки), из массива объектов
const workers = [
     { name: 'Alice', age: 25 },
     { name: 'Bob', age: 30 },
     { name: 'Charlie', age: 35 }
    ]

const onlyNames = workers.map(person => {
    return person.name
})
console.log(onlyNames);



// filter
// 1) Отфильтровать массив объектов, чтобы оставить только те, у кого возраст больше 18 лет.
const humans = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 15 }
]

const adults = humans.filter(person => {
    if(person.age >= 18) {
        return true
    }
})
console.log(adults);

// или

// const adults = humans.filter(person => person.age >= 18)
// console.log(adults)

// 2) Отфильтровать массив объектов, чтобы оставить только тех, кто проголосовал
const individuals = [
    { name: 'Alice', voted: true },
    { name: 'Bob', voted: false },
    { name: 'Charlie', voted: true },
    { name: 'Dave', voted: false }
]

const voted = individuals.filter(person => {
    if (person.voted){
        return true
    }
})
console.log(voted);

// 3) Отфильтровать массив студентов, чтобы оставить только тех, у кого оценка выше 70.
const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 62 },
    { name: 'Charlie', grade: 74 },
    { name: 'Dave', grade: 55 }
]

const excellentStudents = students.filter(person => {
    if(person.grade >= 70){
        return true
    }
})
console.log(excellentStudents);

// или

// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 62 },
//     { name: 'Charlie', grade: 74 },
//     { name: 'Dave', grade: 55 }
// ]
// const excellentStudents = students.filter(person => person.grade >= 70)
// console.log(excellentStudents);



// forEach:
// 1)Пройтись по массиву объектов и добавить каждому объекту новое свойство discountedPrice, которое будет равно price * 0.9.
const electronicEquipment = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
]

electronicEquipment.forEach(product => {
    product.discountedPrice = product.price * 0.9;
});

console.log(electronicEquipment);