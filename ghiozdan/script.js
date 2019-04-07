const cardsArray = [{
    'revealed': false,
    'name': 'shell',
    'img': 'img/blueshell.png',
},
    {
        'revealed': false,
        'name': 'star',
        'img': 'img/star.png',
    },
    {
        'revealed': false,
        'name': 'bobomb',
        'img': 'img/bobomb.png',
    },
    {
        'revealed': false,
        'name': 'mario',
        'img': 'img/mario.png',
    },
    {
        'revealed': false,
        'name': 'luigi',
        'img': 'img/luigi.png',
    },
    {
        'revealed': false,
        'name': 'peach',
        'img': 'img/peach.png',
    },
    {
        'revealed': false,
        'name': '1up',
        'img': 'img/1up.png',
    },
    {
        'revealed': false,
        'name': 'mushroom',
        'img': 'img/mushroom.png',
    },
    {
        'revealed': false,
        'name': 'thwomp',
        'img': 'img/thwomp.png',
    },
    {
        'revealed': false,
        'name': 'bulletbill',
        'img': 'img/bulletbill.png',
    },
    {
        'revealed': false,
        'name': 'coin',
        'img': 'img/coin.png',
    },
    {
        'revealed': false,
        'name': 'goomba',
        'img': 'img/goomba.png',
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
        card.dataset.revealed = revealed;

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
            if (!foundOne && element.dataset.revealed === 'false') {
                element.dataset.revealed = 'true';
                element.classList.add('selected');
                foundOne = true;
            }
        });
    });
}

initGame();
