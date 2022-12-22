document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'gingerbread',
        img: 'images/gingerbread.png'

    },
    {
        name: 'grinch',
        img: 'images/grinch.png'

    },
    {
        name: 'house',
        img: 'images/house.png'

    },
    {
        name: 'santa',
        img: 'images/santa.png'

    },
    {
        name: 'snowflake',
        img: 'images/snowflake.png'

    },
    {
        name: 'snowman',
        img: 'images/snowman.png'

    },
    {
        name: 'star',
        img: 'images/star.png'

    },
    {
        name: 'tree',
        img: 'images/tree.png'

    },
    {
        name: 'gingerbread',
        img: 'images/gingerbread.png'

    },
    {
        name: 'grinch',
        img: 'images/grinch.png'

    },
    {
        name: 'house',
        img: 'images/house.png'

    },
    {
        name: 'santa',
        img: 'images/santa.png'

    },
    {
        name: 'snowflake',
        img: 'images/snowflake.png'

    },
    {
        name: 'snowman',
        img: 'images/snowman.png'

    },
    {
        name: 'star',
        img: 'images/star.png'

    },
    {
        name: 'tree',
        img: 'images/tree.png'

    }

];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

//create game board
function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('name', cardArray[i].name);
        card.setAttribute('src', 'images/gift.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    };
}

createBoard();

//check for match
function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].style.visibility = 'hidden';
        cards[optionTwoId].style.visibility = 'hidden';
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/gift.png');
        cards[optionTwoId].setAttribute('src', 'images/gift.png');
        alert('Sorry, try again');
    };
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulation! You have found them all!';
    }
}


//flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

//function to reset the game
function resetGame() {
    location.reload();    
}

let resetButton = document.querySelector(".reset");
resetButton.addEventListener('click', resetGame);


})


