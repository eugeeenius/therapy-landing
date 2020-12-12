const range = document.getElementById('range')
const $slideOne = document.getElementById('slider-one')
const $slideTwo = document.getElementById('slider-two')
const $slideThree = document.getElementById('slider-three')


range.ontouchmove = () => {
  range.classList.add('scrolling')
  if (range.value > 75) {
    $slideThree.scrollIntoView()
  } else if (range.value < 25) {
    $slideOne.scrollIntoView()
  } else {
    $slideTwo.scrollIntoView()
  }
}
