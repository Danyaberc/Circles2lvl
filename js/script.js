let container1 = document.querySelector('.container_1')

let container2 = document.querySelector('.container_2')

let container3 = document.querySelector('.container_3')

let container4 = document.querySelector('.container_4')

let circles = document.querySelectorAll('.circles')

let btncircles = document.querySelector('.btn')

btncircles.addEventListener('click', () => {
   traficbottomrightred()
   traficbottomleftgreen()
   trafictoprightgreen()
   trafictopleftred()
})
// BEGIN BOTTOM-RIGHT(CONTAINER1)
const traficbottomrightred = () => {
   container1.childNodes[1].classList.add('red')
   container1.childNodes[5].classList.remove('green')
   setTimeout(traficbottomrightyellow, 5000)
}
const traficbottomrightyellow = () => {
   container1.childNodes[3].classList.add('yellow')
   setTimeout(removered1, 500)
   setTimeout(traficbottomrightgreen, 3000)
}
const traficbottomrightgreen = () => {
   container1.childNodes[3].classList.remove('yellow')
   container1.childNodes[5].classList.add('green')
   setTimeout(traficbottomrightred, 5000)
}
const removered1 = () => {
   container1.childNodes[1].classList.remove('red')
}

//-----------------END BOTTOM-RIGHT----------------------
// BEGIN BOTTOM-LEFT(CONTAINER2)
const traficbottomleftgreen = () => {
   container2.childNodes[5].classList.add('green')
   container2.childNodes[3].classList.remove('yellow')
   setTimeout(traficbottomleftred, 5000)
}
const traficbottomleftred = () => {
   container2.childNodes[1].classList.add('red')
   container2.childNodes[5].classList.remove('green')
   setTimeout(traficbottomleftyellow, 5000)
}
const traficbottomleftyellow = () => {
   setTimeout(removered2, 500)
   setTimeout(traficbottomleftgreen, 3000)
   container2.childNodes[3].classList.add('yellow')
}
const removered2 = () => {
   container2.childNodes[1].classList.remove('red')
}
// ----------------END BOTTOM-left-------------------------------
// BEGIN TOP-RIGHT(CONTAINER3)
const trafictoprightgreen = () => {
   container3.childNodes[5].classList.add('green')
   container3.childNodes[3].classList.remove('yellow')
   setTimeout(trafictoprightred, 5000)
}
const trafictoprightred = () => {
   container3.childNodes[1].classList.add('red')
   container3.childNodes[5].classList.remove('green')
   setTimeout(trafictoprightyellow, 5000)
}
const trafictoprightyellow = () => {
   setTimeout(removered3, 500)
   setTimeout(trafictoprightgreen, 3000)
   container3.childNodes[3].classList.add('yellow')
}
const removered3 = () => {
   container3.childNodes[1].classList.remove('red')
}

// -----------------END TOP-RIGHT----------------------------------
// BEGIN TOP-LEFT(CONTAINER4)

const trafictopleftred = () => {
   container4.childNodes[1].classList.add('red')
   container4.childNodes[5].classList.remove('green')
   setTimeout(trafictopleftyellow, 5000)
}
const trafictopleftyellow = () => {

   container4.childNodes[3].classList.add('yellow')
   setTimeout(removered4, 500)
   setTimeout(trafictopleftgreen, 3000)
}
const trafictopleftgreen = () => {
   container4.childNodes[3].classList.remove('yellow')
   container4.childNodes[5].classList.add('green')
   setTimeout(trafictopleftred, 5000)
}
const removered4 = () => {
   container4.childNodes[1].classList.remove('red')
}

// END TOP-LEFT----------




// ------CONTAINER1---(BOTTOM-RIGHT)
// let addLightRed = () => {
//    circles[0].classList.add('red')
//    circles[2].classList.remove('green')
//    setTimeout(() => {
//       addLightYellow()
//    }, 1500)
// }

// let addLightYellow = () => {
//    circles[0].classList.remove('red')
//    circles[1].classList.add('yellow')
//    setTimeout(() => {
//       addLightGreen()
//    }, 1500)
// }

// let addLightGreen = () => {
//    circles[1].classList.remove('yellow')
//    circles[2].classList.add('green')
//    setTimeout(() => {
//       addLightRed()
//    }, 1500)
// }



















