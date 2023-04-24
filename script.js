console.log('funguju!');

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

//1 TRANSFORMACE
// Použijte opět pole numbers, names a persons z předchozího cvičení.

// a) Pomocí metody filter získejte z pole numbers pouze ta čísla, která jsou sudá, a uložte je do proměnné evenNumbers. 
// Vypište toto nové pole do konzole.

const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

// b) Pomocí metody filter získejte z pole persons pouze dospělé lidi a uložte je do proměnné adults. 
// Vypište toto nové pole do konzole.

const adults = persons.filter(person => person.age > 18)
console.log(adults)

// c) Pomocí metody map vydělte všecha čísla v poli numbers třemi a uložte je do proměnné dividedByThree. 
// Vypište toto nové pole do konzole.

const dividedByThree = numbers.map(number => number / 3)
console.table(dividedByThree)

// d) Pomocí metody map převeďte všechna čísla z pole numbers na řetězce. Výsledek vypište do konzole.

const numberString = numbers.map(number => `${number}`)
console.log(numberString)
console.log(typeof (numberString[0]))

// e) Z pole persons pomocí metody map vytvořte pro každou osobu e-mail ve formátu petr@gmail.com a výsledek uložte 
// do proměnné emails. Vypište toto nové pole do konzole.

const emails = persons.map(person => `${person.name.toLowerCase()}@gmail.com`)
console.table(emails)

// f) Z pole persons pomocí metody map vytvořte pro každou osobu položku HTML seznamu ve formátu <li>Petr (16)</li> 
// a výsledek uložte do proměnné list. Vypište toto nové pole do konzole.

const list = persons.map(person => `<li>${person.name} (${person.age})</li>`)
console.log(list)

//2 AGREGACE

const createListPersons = (persons) => {
    const ulElm = document.querySelector('.listPersons')
    persons
        .filter(person => person.age >= 18)
        .map(person => {
            if (person.gender === 'male' || person.gender === 'female') {
                ulElm.innerHTML += `<li class="${person.gender}">${person.name} (${person.age})</li>`
            }
            else { ulElm.innerHTML += `<li class="nonbinary">${person.name} (${person.age})</li>` }
        })
        .join('')
}
createListPersons(persons)




