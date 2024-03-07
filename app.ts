// Exercise 21
interface item {
    name : string
    price : number
}
const book : item ={
    name : 'ESSENTIAL TYPESCRIPT'
    price : 400 
}
const apple : item ={
    name : 'apple'
    price : 360
}
console.log(`book name: ${book.name}, price: $${book.price}`)
console.log(`apple name: ${apple.name}, price: $${apple.price}`)