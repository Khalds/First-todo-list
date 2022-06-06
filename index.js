const input = document.getElementById('input')
const btn = document.getElementById('btn')
const result = document.getElementById('result')

btn.addEventListener('click', (e) => {

  if (input.value === '') return
  createDeleteElement(input.value)
  input.value = ''
})

//? Create and delete todo
const createDeleteElement = (value) => {

  //? Add li
  const li = document.createElement('li')
  li.className = 'li'
  li.textContent = value

  //? Add button
  const btn = document.createElement('button')
  btn.className = 'btn'
  btn.textContent = 'x'
  li.appendChild(btn)

  //? Remove Todo
  btn.addEventListener('click', (e) => {
    result.removeChild(li)
  })

  li.addEventListener('click', (e) => {
    li.classList.toggle('li-active')
  })

  result.appendChild(li)
}