const numbers = [45, 65, 23, 98, 19];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);  
// }

for (const number of numbers) {
    // console.log(number);
    
}


const products = [
    {id: 1, name: 'xiaomi phone', price: 5000},
    {id: 2, name: 'apple macbook', price: 10000},
    {id: 3, name: 'symphony charger', price: 15000},
    {id: 4, name: 'htc mobile', price: 20000},
    {id: 5, name: 'redmi phone', price: 25000},
    {id: 6, name: 'oppo Phone', price: 30000},
    {id: 7, name: 'realme', price: 35000},
    {id: 8, name: 'asus motherboard', price: 40000},
    {id: 9, name: 'sony tv', price: 45000},
]

function matchedProduct(products, search) {
    let matchedItem = [];
    for(const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())){
            matchedItem.push(product);
        }
    }
    return matchedItem;
}

const matched = matchedProduct(products, 'phone')
console.log(matched);
