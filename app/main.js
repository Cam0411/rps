const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const player = document.querySelector(".player__value span")
const bot = document.querySelector(".bot__value span")
const result = document.querySelector(".result__box p span")
const win__lose = document.querySelector(".win__lose")
const randomArray = [`<i class="fa-solid fa-hand-back-fist"></i>`,`<i class="fa-solid fa-hand"></i>`,`<i class="fa-solid fa-hand-scissors">`]
var num = 0
function renderValue(){
  rock.addEventListener("click",() => {
    const random = Math.floor(Math.random() * randomArray.length)

    player.innerHTML = `<i class="fa-solid fa-hand-back-fist"></i>`
    bot.innerHTML = randomArray[random]

    if (bot.innerHTML == `<i class="fa-solid fa-hand-back-fist"></i>` ){
       win__lose.innerHTML = "DRAW"
       win__lose.style.color = "Yellow"
    }
     if (bot.innerHTML == `<i class="fa-solid fa-hand"></i>` ){
      win__lose.innerHTML = "LOSE"
      win__lose.style.color = "RED"
      if (num > 0){
        result.innerHTML =  num-=1
      }
    }
     if (bot.innerHTML == `<i class="fa-solid fa-hand-scissors"></i>` ){
      win__lose.innerHTML = "WIN"
      win__lose.style.color = "#16ff12"
       if (num < 11){
        result.innerHTML = num+=1
      } 

     }
  })
  paper.addEventListener("click",() => {
    player.innerHTML = `<i class="fa-solid fa-hand"></i>`
    
    const random = Math.floor(Math.random() * randomArray.length)
    bot.innerHTML = randomArray[random]

    if (bot.innerHTML == `<i class="fa-solid fa-hand-back-fist"></i>` ){
      win__lose.innerHTML = "WIN"
      win__lose.style.color = "#16ff12"
      if (num < 11){
        result.innerHTML = num+=1
      } 
   }
    if (bot.innerHTML == `<i class="fa-solid fa-hand"></i>` ){
     win__lose.innerHTML = "DRAW"
     win__lose.style.color = "yellow"
   }
    if (bot.innerHTML == `<i class="fa-solid fa-hand-scissors"></i>` ){
     win__lose.innerHTML = "LOSE"
     win__lose.style.color = "RED"
     if (num > 0){
      result.innerHTML =  num-=1
    }
    }

  })
  scissor.addEventListener("click",() => {
    player.innerHTML = `<i class="fa-solid fa-hand-scissors"></i>`

    const random = Math.floor(Math.random() * randomArray.length)
    bot.innerHTML = randomArray[random]

    if (bot.innerHTML == `<i class="fa-solid fa-hand-back-fist"></i>` ){
      win__lose.innerHTML = "LOSE"
      win__lose.style.color = "RED"
      if (num > 0){
        result.innerHTML =  num-=1
      }
   }
    if (bot.innerHTML == `<i class="fa-solid fa-hand"></i>` ){
     win__lose.innerHTML = "WIN"
     win__lose.style.color = "#16ff12"
     if (num < 11){
      result.innerHTML = num+=1
    } 
   }
    if (bot.innerHTML == `<i class="fa-solid fa-hand-scissors"></i>` ){
     win__lose.innerHTML = "DRAW"
     win__lose.style.color = "yellow"
    }
  })
}
renderValue()