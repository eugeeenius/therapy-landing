// window.addEventListener('scroll', scrollHandler)
// $surface.addEventListener('touchmove', scrollHandler)
function scrollHandler() {
  if (window.pageYOffset > 150) {
    navSecondActive()
  }
}
// function scrollHandler() {
//   const offsetTop = $surface.getBoundingClientRect().top

//   if (offsetTop >= -400) {
//     navFirstActive()
//     // window.scrollTo(0, 0)
//   }
//   else if (-1168 <= offsetTop && offsetTop <= -400) {
//     navSecondActive()
//     window.scroll(0, 768)
//   }
//   else {
//     navThirdActive()
//     window.scroll(0, 1536)
//   }

// }

// function goToSection() {
//   if (navFirst.classList.contains('active')) {
//     window.scrollTo(0, 0)
//   }
//   else if (navSecond.classList.contains('active')) {
//     window.scrollTo(0, -768)
//   }
//   else if (navThird.classList.contains('active')) {
//     $slider.scrollIntoView()
//     window.scrollTo(0, -1536)
//   }
// }