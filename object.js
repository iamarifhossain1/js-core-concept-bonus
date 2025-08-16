const student = {
    name: 'Shakib Khan',
    id: 121,
    address: 'Mirpur',
    isSingle: false,
    friends: ['Arif', 'Hanif', 'Mousumi'],
    act: function() {
        console.log('Act Like Shakib Khan');
        
    },
    movies: [{name: 'Avengers End Game', year: 2019,}, {name: 'Thor Love & Thunder', year: 2022}],
    car: {
        brand: 'Tesla',
        price: 5000000,
        color: 'Black',
        made: 2025,
        manufacturer: {
            company: 'Tesla',
            ceo: 'Elon Mask',
            country: 'USA',
        }
    }
}

console.log(student.car.manufacturer);
student.act();
const values1 = Object.keys(student);
const values2 = Object.values(student);
console.log(values1);
console.log(values2);

