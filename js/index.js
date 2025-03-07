
const tags = [
  { name: '#2021'}
  { name: '#2022'}
  { name: '#2023'}
  { name: '#2024'}
  { name: '#2025'}
  { name: '#Unsorted21/24'}
  { name: '#Unsorted'}
  //{ name: '#'}
]

const searchInput = document.querySelector('.input')

searchInput.addEventListener("input", (e) => {

  let value = e.target.value
  if (value && value.trim().length > 0){

          value = value.trim().toLowerCase()

         setList(tags.filter(person => {
           return person.tags.includes(value)
         }))
    } else {
        // 5. return nothing
        // input is invalid -- show an error message or show no results

    }

}


const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {
    while (list.firstChild){
      list.removeChild(list.firstChild)
    }
})

function setList(results){

    for (const person of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(person.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
}
