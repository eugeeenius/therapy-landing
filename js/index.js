const $surface = document.getElementById('surface')
const $basis = document.getElementById('basis')
const $slider = document.getElementById('slider')
const navFirst = document.getElementById('navFirst')
const navSecond = document.getElementById('navSecond')
const navThird = document.getElementById('navThird')
const moveDown = document.getElementById('move-down')

const surfaceHeight = $surface.offsetHeight
const basisHeight = $basis.offsetHeight

// Make nav button active and scroll to section
function navFirstActive() {
  navThird.classList.remove('active'),
    navSecond.classList.remove('active'),
    navFirst.classList.add('active')
  window.scrollTo(0, 0)

  range.classList.add('hidden')
  moveDown.classList.remove('hidden')
}

function navSecondActive() {
  navFirst.classList.remove('active'),
    navThird.classList.remove('active'),
    navSecond.classList.add('active')
  window.scroll(0, surfaceHeight)

  range.classList.add('hidden')
  moveDown.classList.remove('hidden')
}

function navThirdActive() {
  navFirst.classList.remove('active'),
    navSecond.classList.remove('active'),
    navThird.classList.add('active')
  window.scroll(0, surfaceHeight + basisHeight)
  range.classList.remove('hidden')

  moveDown.classList.add('hidden')
}

// Nav buttons behaviour
navFirst.addEventListener('click', () => {
  navFirstActive()
})
navSecond.addEventListener('click', () => {
  navSecondActive()
})
navThird.addEventListener('click', () => {
  navThirdActive()
})

document.addEventListener('DOMContentLoaded', navFirstActive());
