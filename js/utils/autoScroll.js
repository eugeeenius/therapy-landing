let surfaceToggleMoveDown = true
let basisToggleMoveDown = true
let sliderPreventVerticalScroll = true

$surface.addEventListener('touchend', async () => {
  if (basisToggleMoveDown) {
    await window.scrollY > surfaceHeight / 2 === true
    navSecondActive()
    surfaceToggleMoveDown = !surfaceToggleMoveDown
  } else {
    surfaceToggleMoveDown = !surfaceToggleMoveDown
  }
})

// $basis.addEventListener('touchend', async () => {
//   if (basisToggleMoveDown) {
//     await window.scrollY > surfaceHeight + basisHeight / 2 === true
//     navThirdActive()
//     basisToggleMoveDown = !basisToggleMoveDown
//   } else {
//     await window.scrollY < surfaceHeight + basisHeight / 2 === true
//     await navFirstActive()
//     basisToggleMoveDown = !basisToggleMoveDown
//   }
// })

// $slider.addEventListener('touchmove', async () => {
//   await window.scrollY < 1.2 * surfaceHeight + basisHeight === true
//   navSecondActive()
// })

window.addEventListener('touchmove', event => {

})