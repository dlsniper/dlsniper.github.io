const wordsArray = [{
    'revealed': false,
    'syllables':2,
    'name': 'Bleistift',
    'img': '/img/Bleistift.png',
},
    {
        'revealed': false,
        'syllables': 2,
        'name': 'Spitzer',
        'img': '/img/Anspitzer.png',
    },
    {
        'revealed': false,
        'syllables': 1,
        'name': 'Heft',
        'img': '/img/Arbeitsheft.png',
    },
    {
        'revealed': false,
        'syllables': 1,
        'name': 'Buch',
        'img': '/img/Buch.png',
    },
    {
        'revealed': false,
        'syllables': 3,
        'name': 'Buntstifte',
        'img': '/img/Buntstifte.png',
    },
    {
        'revealed': false,
        'syllables': 4,
        'name': 'Federtasche',
        'img': '/img/Federtasche.png',
    },
    {
        'revealed': false,
        'syllables': 3,
        'name': 'Filzstifte',
        'img': '/img/Filzstifte.png',
    },
    {
        'revealed': false,
        'syllables': 3,
        'name': 'Lineal',
        'img': '/img/Lineal.png',
    },
    {
        'revealed': false,
        'syllables': 4,
        'name': 'Radiergummi',
        'img': '/img/Radiergummi.png',
    }

];

function initGame() {
    const gameGrid = wordsArray
        .sort(() => 0.5 - Math.random());

    const game = document.getElementById('game');
    const grid = document.createElement('section');
    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    gameGrid.forEach(item => {
        const {revealed, name, img, syllables} = item;

        const card = document.createElement('div');
        card.dataset.name = name;
        card.dataset.revealed = revealed;
        card.dataset.syllables = syllables;

        card.classList.add('card');
        card.classList.add('draggable');

        const front = document.createElement('div');
        front.classList.add('front');
        front.style.backgroundImage = `url(${img})`;

        grid.appendChild(card);
        card.appendChild(front);
    });

    $(function () {
        // noinspection JSValidateTypes
        $(".draggable").draggable();
    });
}

initGame();
