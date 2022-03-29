import cloud1 from './assets/clouds/cloud1.svg'
import cloud2 from './assets/clouds/cloud2.svg'
import cloud3 from './assets/clouds/cloud3.svg'
import cloud4 from './assets/clouds/cloud4.svg'
import cloud5 from './assets/clouds/cloud5.svg'

export default function () {

  const NUM_OF_CLOUDS = 12
  const UPDATE_FREQUENCY = 10
  
  const SCREEN_WIDTH = window.screen.width
  const SCREEN_HEIGHT = window.screen.height
  const LAYERS = 3
  const CLOUD_SOURCE = [cloud1, cloud2, cloud3, cloud4, cloud5]
  
  console.log(SCREEN_WIDTH)
  
  function getRandomCloud() {
    return CLOUD_SOURCE[Math.floor(Math.random() * CLOUD_SOURCE.length)]
  }
  
  
  function makeClouds(numOfClouds) {
    let cloudList = []
  
    for(let i = 0; i < NUM_OF_CLOUDS; i++) {
  
      let layer = Math.floor(Math.random() * LAYERS) + 1
  
      let element = document.createElement('img')
      document.body.appendChild(element)
      element.layer = layer
      element.speed = (Math.floor(Math.random() * layer * 2) + 1) / 4
      element.className = 'cloud layer' + layer
      // element.addClassName = 'layer' + layer
      element.setAttribute("id", "cloud_" + i)
      // element.setAttribute("src", "./assets/butterfly_" + color + ".png")
      element.setAttribute("src", getRandomCloud())
      element.leftPosition = Math.floor(Math.random() * (SCREEN_WIDTH * 2) - SCREEN_WIDTH)
      element.style.width = Math.max(SCREEN_WIDTH / 10, Math.floor(Math.random() * SCREEN_WIDTH / 2)) + 'px'
      element.style.left = element.leftPosition + 'px'
      element.style.top = Math.floor(Math.random() * SCREEN_HEIGHT * .6) + 'px'
      // console.log(element)
  
      cloudList.push(element)
    }
  
    return cloudList
  }
  
  
  function moveClouds(cloudList) {
    for(let i = 0; i < cloudList.length; i++) {
      let position = cloudList[i].leftPosition
      if((position - 400) > SCREEN_WIDTH) {
        cloudList[i].leftPosition = -1000
        cloudList[i].style.top = Math.floor(Math.random() * SCREEN_HEIGHT * .6) + 'px'
        console.log('moved cloud back to the left')
      }
      cloudList[i].leftPosition = cloudList[i].leftPosition + cloudList[i].speed
      cloudList[i].style.left = cloudList[i].leftPosition + 'px'
    }
  }
  
  var cloudList = makeClouds(NUM_OF_CLOUDS)
  let move_interval = setInterval(function  () {
    moveClouds(cloudList)
  }, UPDATE_FREQUENCY)

  return cloudList
}

