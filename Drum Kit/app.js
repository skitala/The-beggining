let numberOfBtns = document.querySelectorAll('.btn').length
console.log(numberOfBtns)

for (let i = 0; i < numberOfBtns; i++) {
  document.querySelectorAll('.btn')[i].addEventListener('click', () => {
    let buttonStyle = this.innerHTML
    sound(buttonStyle)
    active(buttonStyle)
  })
}
document.addEventListener('keypress', (e) => {
  sound(e.key)

  active(e.key)
})

function sound(key) {
  switch (key) {
    case 'c':
      let sound1 = new Audio('sounds/sounds_kick-bass.mp3')
      sound1.play()
      break
    case 's':
      let sound2 = new Audio('sounds/sounds_tom-3.mp3')
      sound2.play()
      break
    case 'f':
      let sound3 = new Audio('sounds/sounds_snare.mp3')
      sound3.play()
      break
    case 'w':
      let sound4 = new Audio('sounds/sounds_tom-1.mp3')
      sound4.play()
      break
    case 'r':
      let sound5 = new Audio('sounds/sounds_tom-2.mp3')
      sound5.play()
      break
    case 'a':
      let sound6 = new Audio('sounds/sounds_crash.mp3')
      sound6.play()
      break
    default:
      console.log(key)
  }
}

function active(currentKey) {
  let activeBtn = document.querySelector('.' + currentKey)
  if (activeBtn === null) {
    return alert('You missed, practice more')
  } else {
    activeBtn.classList.add('active')

    setTimeout(() => {
      activeBtn.classList.remove('active')
    }, 100)
  }
}
