// Challenge Instructions:
// 1. Craft and add a new button element with the text “Add” to the content area.
const btn = document.createElement('button')
btn.textContent = "Add"
const contentArea = document.getElementById('contentArea')
contentArea.appendChild(btn)

// 2. Summon a new list item and add it to the existing list 'taskList'.
const newItem = document.createElement('li')
const existingItem = document.querySelector('li')
newItem.textContent = 'Prioritary task'
existingItem.parentNode.insertBefore(newItem, existingItem)


// 3. Clone an element and add its twin to the page.
const dog = document.getElementById('puppyImage')
const secondDog = dog.cloneNode()
dog.parentNode.appendChild(secondDog)

// 4. Replace the old paragraph at the top of the page with a new one.
const paragraph = document.querySelector('p')
const newParagraph = document.createElement('p')
newParagraph.innerText = "Hey, I'm the new paragraph!"
paragraph.parentNode.replaceChild(newParagraph, paragraph)

// 5. Make the image of the puppy vanish from the page. (I know, terrible!)
dog.parentNode.removeChild(dog)
//Don't worry, I kept the second one