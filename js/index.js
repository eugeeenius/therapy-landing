// Elements
const $surface = document.getElementById('surface')
const $basis = document.getElementById('basis')
const $slider = document.getElementById('slider')
const navFirst = document.getElementById('navFirst')
const navSecond = document.getElementById('navSecond')
const navThird = document.getElementById('navThird')

const surfaceHeight = $surface.offsetHeight
const basisHeight = $basis.offsetHeight

// Make nav button active and scroll to section
function navFirstActive() {
  navThird.classList.remove('active'),
    navSecond.classList.remove('active'),
    navFirst.classList.add('active')
  window.scrollTo(0, 0)
}

function navSecondActive() {
  navFirst.classList.remove('active'),
    navThird.classList.remove('active'),
    navSecond.classList.add('active')
  window.scroll(0, surfaceHeight)
}

function navThirdActive() {
  navFirst.classList.remove('active'),
    navSecond.classList.remove('active'),
    navThird.classList.add('active')
  window.scroll(0, surfaceHeight + basisHeight)
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

// On scroll behaviour
$surface.addEventListener('touchend', async () => {
  await window.scrollY > surfaceHeight / 2 === true
  navSecondActive()
})

$basis.addEventListener('touchend', async () => {
  await window.scrollY > surfaceHeight + basisHeight / 2 === true
  navThirdActive()
})

$slider.addEventListener('touchmove', (e) => {
  console.log(determineSwipeDirection(e.target))
  // await window.scrollY > surfaceHeight / 2 === true
  // navSecondActive()
})




