const guig = document.getElementById('guiggle')
const squigOne = document.getElementById('squiggle-one')
const squigTwo = document.getElementById('squiggle-two')
const squigThree = document.getElementById('squiggle-three')
const squigFour = document.getElementById('squiggle-four')
const squigFive = document.getElementById('squiggle-five')
const gear = document.getElementById('gear')
const logo = document.getElementById('logo')

function move() {
    const incrementor = window.scrollY
    
    guig.style.bottom = 0 + incrementor*0.1 + '%'
    
    squigOne.style.bottom = 35 + incrementor*0.13 + '%'
    squigOne.style.marginRight = 34 + incrementor*0.09 + '%'

    squigTwo.style.bottom = 65 + incrementor*0.13 + '%'
    squigTwo.style.marginRight = 52 + incrementor*0.09 + '%'

    squigFour.style.bottom = 65 + incrementor*0.13 + '%'
    squigFour.style.marginRight = 14 + incrementor*0.12 + '%'

    squigFive.style.bottom = 80 + incrementor*0.13 + '%'
    squigFive.style.marginLeft = 22 + incrementor*0.09 + '%'

    squigThree.style.bottom = 55 + incrementor*0.13 + '%'
    squigThree.style.marginLeft = 20 + incrementor*0.09 + '%'
    
    gear.style.marginLeft = 5 + incrementor*0.2 + '%'


}

window.addEventListener('scroll',move)