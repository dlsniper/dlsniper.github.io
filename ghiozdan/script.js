const cardsArray = [{
    'revealed': false,
    'name': 'shell',
    'img': 'img/Anspitzer.png',
},
    {
        'revealed': false,
        'name': 'star',
        'img': 'img/Arbeitsheft.png',
    },
    {
        'revealed': false,
        'name': 'bobomb',
        'img': 'img/Bleistift.png',
    },
    {
        'revealed': false,
        'name': 'mario',
        'img': 'img/Schere.png',
    },
    {
        'revealed': false,
        'name': 'luigi',
        'img': 'img/Buch.png',
    },
    {
        'revealed': false,
        'name': 'peach',
        'img': 'img/Buntstifte.png',
    },
    {
        'revealed': false,
        'name': '1up',
        'img': 'img/Federtasche.png',
    },
    {
        'revealed': false,
        'name': 'mushroom',
        'img': 'img/Filzstifte.png',
    },
    {
        'revealed': false,
        'name': 'thwomp',
        'img': 'img/Fuller.png',
    },
    {
        'revealed': false,
        'name': 'bulletbill',
        'img': 'img/Kleber.png',
    },
    {
        'revealed': false,
        'name': 'coin',
        'img': 'img/Lineal.png',
    },
    {
        'revealed': false,
        'name': 'goomba',
        'img': 'img/Pinsel.png',
    },
    {
        'revealed': false,
        'name': 'goomba',
        'img': 'img/Radiergummi.png',
    },
];

function initGame() {
    const gameGrid = cardsArray;
        //.sort(() => 0.5 - Math.random());

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
