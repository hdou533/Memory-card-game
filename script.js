const cards = document.querySelectorAll('.card');

let cardOne, cardTwo;
let disableDesk = false;
let matchedCard = 0;
const flipCard = (e) => {
    let clickedCard = e.target;
    if (clickedCard !== cardOne && !disableDesk) {
        clickedCard.classList.add('flip');
        if (!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDesk = true;
        let cardOneImg = cardOne.querySelector('img').src;
        let cardTwoImg = cardTwo.querySelector('img').src;
       

        matchedCards(cardOneImg, cardTwoImg);
    }
    
}

const matchedCards = (img1, img2) => {
    if (img1 === img2) {
        matchedCard++;
        if (matchedCard === 8) {
            setTimeout(() => {
                return shuffleCard()
            }, 1000);
        }
        cardOne.removeEventListener('click', flipCard);
        cardTwo.removeEventListener('click', flipCard);
        cardOne = cardTwo = '';
        disableDesk = false;
        return;
    }
    setTimeout(() => {
        cardOne.classList.add('shake');
        cardTwo.classList.add('shake');
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove('shake', 'flip');
        cardTwo.classList.remove('shake', 'flip');
        cardOne = cardTwo = '';
        disableDesk = false;
    }, 1000);

}

const shuffleCard = () => {
    matchedCard = 0;
    cardOne = cardTwo = '';
    const IMAGENAMES = ['carrot',
        'collard',
        'cucumber',
        'daikon',
        'eggplant',
        'fennel',
        'kohlrabi',
        'leek'];
    let arr = IMAGENAMES.concat([...IMAGENAMES]);
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector('img');
        imgTag.src = `images/${arr[index]}.png`
        card.addEventListener('click', flipCard);
    })
}
shuffleCard();
cards.forEach(card => {
    
    card.addEventListener('click', flipCard);
});