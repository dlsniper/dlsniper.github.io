const cardsArray = [
    {
        'revealed': false,
        'name': 'Anspitzer',
        'img': 'img/Anspitzer.png',
    },
    {
        'revealed': false,
        'name': 'Arbeitsheft',
        'img': 'img/Arbeitsheft.png',
    },
    {
        'revealed': false,
        'name': 'Bleistift',
        'img': 'img/Bleistift.png',
    },
    {
        'revealed': false,
        'name': 'Buch',
        'img': 'img/Buch.png',
    },
    {
        'revealed': false,
        'name': 'Buntstifte',
        'img': 'img/Buntstifte.png',
    },
    {
        'revealed': false,
        'name': 'Federtasche',
        'img': 'img/Federtasche.png',
    },
    {
        'revealed': false,
        'name': 'Filzstifte',
        'img': 'img/Filzstifte.png',
    },
    {
        'revealed': false,
        'name': 'Fuller',
        'img': 'img/Fuller.png',
    },
    {
        'revealed': false,
        'name': 'Kleber',
        'img': 'img/Kleber.png',
    },
    {
        'revealed': false,
        'name': 'Lineal',
        'img': 'img/Lineal.png',
    },
    {
        'revealed': false,
        'name': 'Pinsel',
        'img': 'img/Pinsel.png',
    },
    {
        'revealed': false,
        'name': 'Radiergummi',
        'img': 'img/Radiergummi.png',
    },
    {
        'revealed': false,
        'name': 'Schere',
        'img': 'img/Schere.png',
    },
];

function initGame() {
    const gameGrid = cardsArray
        .sort(() => 0.5 - Math.random());

    const game = document.getElementById('game');
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    gameGrid.forEach(item => {
        const {revealed, name, img} = item;

        const card = document.createElement('div');
        card.dataset.name = name;
        card.dataset.played = revealed;

        card.classList.add('card');

        const front = document.createElement('div');
        front.classList.add('front');

        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url(${img})`;

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });

    const backpack = document.createElement('div');
    backpack.classList.add('backpack');

    const front = document.createElement('div');
    front.classList.add('front-backpack');

    grid.appendChild(backpack);
    backpack.appendChild(front);
    backpack.addEventListener('click', () => {
        let foundOne;
        let elements = document.getElementsByClassName('card');
        Array.prototype.forEach.call(elements, element => {
            if (!foundOne && element.dataset.played === 'false') {
                element.dataset.played = 'true';
                element.classList.add('selected');
                foundOne = true;
            }
        });
    });
}

initGame();
