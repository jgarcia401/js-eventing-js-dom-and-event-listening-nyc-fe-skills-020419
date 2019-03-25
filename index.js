// Problem: we want to react to clicks on the <main> tag

const main = document.getElementById('main')

// addEventListener has two options

// 1. is the even that we care about
// 2. is the function that is supposed to run when the event happens

function onClick(event) {
  console.log(event)
}

function onKeyDown(event) {
  console.log(event.keyCode)
}

main.addEventListener('click', onClick)

document.addEventListener('keydown', onKeyDown)