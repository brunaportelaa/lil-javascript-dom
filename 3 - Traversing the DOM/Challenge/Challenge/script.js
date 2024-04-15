// Your tasks:
// 1. Find the parent element of a cat and log it to the console.
const ourCat = document.querySelector('li:nth-child(2)')
console.log(ourCat)
const catFather = ourCat.parentNode
console.log(catFather)

// 2. List all the children of the cat’s parent and log them.
let kittens = catFather.children
kittens = Array.from(kittens)
console.log(kittens)
kittens.forEach (kitten => console.log(kitten))

// 3. Identify the cat’s parent's next sibling in the tree and log it.
const catUncle = catFather.nextSibling
console.log(catUncle)
