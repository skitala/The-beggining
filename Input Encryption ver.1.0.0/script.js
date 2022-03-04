const button = document.querySelector('.btn')
const text = document.querySelector('input').value
const result = document.querySelector('.result')
//Gettin an input value that I will use later for encryption, u need to add value="" in input html element
function getValue() {
  let text = document.querySelector('input').value
  console.log(text)
}

button.addEventListener('click', () => {
  encryptions()
  enter()
})
window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    location.reload()
  }
})

function encryptions() {
  let encrypted = ''
  let text = document.querySelector('input').value
  if (text === '') {
    return (result.innerHTML = 'Even I cannot encrypt empty space!')
  } else {
    encrypted += text.replace(
      /[ASDFGHJKLZXCVBNMQWERTYUIOPasdfghjklzxcvbnmqwertyuiop]/g,
      (charToReplace) =>
        ({
          A: 'w',
          B: 'h',
          C: 'f',
          D: 'r',
          E: '4',
          F: 't',
          G: 'y',
          H: 'u',
          I: '9',
          J: 'i',
          K: 'o',
          L: 'p',
          M: 'k',
          N: 'j',
          O: '0',
          P: '-',
          Q: '2',
          R: '5',
          S: 'e',
          T: '6',
          U: '8',
          V: 'g',
          W: '3',
          X: 'd',
          Y: '7',
          Z: 's',
          a: '    ',
          b: 'G',
          c: 'D',
          d: 'E',
          e: '#',
          f: 'R',
          g: 'T',
          h: 'Y',
          i: '*',
          j: 'U',
          k: 'I',
          l: 'O',
          m: 'J',
          n: 'H',
          o: '(',
          p: ')',
          q: '`',
          r: '$',
          s: 'Q',
          t: '%',
          u: '&',
          v: 'F',
          w: '@',
          x: 'S',
          y: '^',
          z: 'A',
        }[charToReplace])
    )
  }

  result.innerHTML = encrypted
}

function enter() {
  button.innerHTML = 'Hit ENTER for a new word'
}
