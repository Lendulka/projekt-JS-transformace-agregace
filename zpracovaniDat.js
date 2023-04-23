console.log('Zpracování dat')

const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = [
    'Petr',
    'Jana',
    'Pavel',
    'Zuzana',
    'Eva',
    'Adam',
    'Onyx',
    'Alex',
];
const persons = [
    { name: 'Petr', age: 16, gender: 'male' },
    { name: 'Jana', age: 8, gender: 'female' },
    { name: 'Pavel', age: 34, gender: 'male' },
    { name: 'Zuzana', age: 41, gender: 'female' },
    { name: 'Eva', age: 22, gender: 'female' },
    { name: 'Adam', age: 22, gender: 'male' },
    { name: 'Onyx', age: 37, gender: 'intersex' },
    { name: 'Alex', age: 29, gender: 'androgyne' },
];

// a) Pomocí metody forEach napište cyklus, který vypíše do konzole poslední písmeno z každého jména v poli names.
names.forEach((name) => {
    console.log(name[name.length - 1])
})

// b) Pomocí metody filter získejte z pole names pouze ta jména, která jsou delší než 4 znaky.
const upFour = names.filter(name => name.length > 4)
console.log(upFour)

// c) Pomocí metody filter získejte z pole persons pouze dospělé muže.
const adults = persons.filter(person => person.gender === 'male' && person.age > 18)
console.table(adults)

// d) Pomocí metody every zjistěte, jestli v poli persons platí, že každá zletilá osoba je vždy buď muž nebo žena
// (tedy že vlastnost gender má hodnotu male nebo hodnotu female).

console.log(persons.every(person => person.age > 18 && (person.gender === 'male' || person.gender === 'female')))

// e) Pomocí metody forEach napište cyklus, který spočítá průměr čísel v poli numbers.

let sum = 0
numbers.forEach(number => {
    sum += number
})
let average = sum / numbers.length
console.log(average)
