import './styles/main.scss'
import { make_butterflies } from './butterflies.js'
import clouds from './clouds.js'
import { getEarliestYear, getHappenings } from './dateInfo'
import { getTimeQuote } from './timequotes.js'

import divider from './assets/divider.png'

document.getElementById('divider-img').setAttribute("src", divider)

console.log(getEarliestYear())

let cloudList = clouds()

const BTN = document.getElementById('btn')
const ERROR = document.getElementById('error')
const SKY = document.getElementById('sky')
const GRAVEYARD = document.getElementById('graveyard')
const TIME_QUOTE = getTimeQuote()

document.getElementById('quote').innerText = TIME_QUOTE['quote']
document.getElementById('quote-by').innerText = TIME_QUOTE['by']


document.getElementById('age').addEventListener("focus", function () {
  ERROR.innerText = ''
  console.log('input clicked')
})

BTN.addEventListener('click', function (e) {
  e.preventDefault()

  let validated = true
  let birthYear = parseInt(document.getElementById('age').value)

  console.log(birthYear)
  console.log(Number.isInteger(birthYear))

  if(validated && !Number.isInteger(birthYear)) {
    validated = false
    ERROR.innerText = 'Please enter a valid year'
    return
  }

  if(validated && birthYear < (new Date().getFullYear() - 90)) {
    validated = false
    ERROR.innerText = "You're " + (new Date().getFullYear() - birthYear) 
      + " years old? How are you using a computer? "
    return
  }

  if(validated && birthYear > new Date().getFullYear()) {
    validated = false
    ERROR.innerText = "You're either from the future or you made a mistake."
    return
  }

  if(validated && birthYear > (new Date().getFullYear() - 7)) {
    validated = false
    ERROR.innerText = "You're " + (new Date().getFullYear() - birthYear) 
      + "!  Come back after your first existential crisis."
    return
  }

  if(validated) {
    document.getElementById('year').innerText = birthYear

    SKY.classList.add('animate-sky')
    GRAVEYARD.classList.add('animate-graveyard')

    document.getElementById('dialog').classList.add('fadeout')
    setTimeout(function () {
      document.getElementById('dialog').remove()
      document.getElementById('results-dialog').classList.add('fadein')
    }, 2500)
  
    // Hide the clouds and release the butterflies!
    let fadeInTimout = 4500
    for(let i = 0; i < cloudList.length; i++) {
      cloudList[i].classList.add('hide-cloud')
    }
    setTimeout(function () {
      for(let i = 0; i < cloudList.length; i++) {
        cloudList[i].remove()
      }
      make_butterflies()
    }, fadeInTimout)

    // Get and display the events
    let delay = 8000
    let happenings = getHappenings(birthYear)
    let results_dialog = document.getElementById('results-dialog')
    for(let i = 0; i < happenings.length; i++) {
      setTimeout(function () {
        console.log(happenings[i])
        console.log(happenings[i][0])
        console.log(happenings[i][1])

        let line1 = "The time that has passed from " + happenings[i][0]['happening'] 
          + " in " + String(happenings[i][0]['year']) + " to now" 

        console.log(line1)

        let element1 = document.createElement('div')
        element1.classList.add('output')
        element1.classList.add('output-line-1')
        element1.innerText = line1

        results_dialog.appendChild(element1)

        let line2 = "...is the same amount of time as from your birth to " 
          + happenings[i][1]['happening']
          + ' in ' + String(happenings[i][1]['year'])

        console.log(line2)

        let element2 = document.createElement('div')
        element2.classList.add('output')
        element2.classList.add('output-line-2')
        element2.innerText = line2

        setTimeout(function () {
          results_dialog.append(element2)
        }, delay / 2)

      }, fadeInTimout + (i * delay) + 500)
    }

    console.log(fadeInTimout + (happenings.length * delay) + 2500)

    setTimeout(function () {
      let element1 = document.createElement('h1')
      element1.classList.add('output')
      element1.classList.add('closing-line')
      element1.innerText = "Don't let time pass you by. History will not be waiting!"

      results_dialog.appendChild(element1)

    }, fadeInTimout + (happenings.length * delay) + 500)
  }

})