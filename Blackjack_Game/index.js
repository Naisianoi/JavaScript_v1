//Objects - store data in-depth. Also called composite/complex data types. They are key:value pairs.
let player = {
    name: "Per",
    chips: 145
}

let cards = [] //Array - ordered lists of itams. 0 index based.
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false 

document.getElementById("player-el").textContent = player.name + ": $" + player.chips

//Blackjack is 21
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true //Player is in the game
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] 
    sum = firstCard + secondCard
    
    renderGame()
}

function renderGame(){ 
    document.getElementById("cards-el").textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        document.getElementById("cards-el").textContent += cards[i] + " "
    }
    document.querySelector("#sum-el").textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got blackjack!"
        hasBlackJack = true
    } else if (sum > 21) {
        message = "You're out of the game!"
        isAlive = false //Player is out of the game
    }
    
    document.getElementById("message-el").textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard() 
        sum += card
        cards.push(card)
        renderGame()
    }
}
