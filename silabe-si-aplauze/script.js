const wordsArray = [{
    'revealed': false,
    'syllables':2,
    'name': 'Bleistift',
    'img': 'img/Bleistift.png',
},
    {
        'revealed': false,
        'syllables': 2,
        'name': 'Spitzer',
        'img': 'img/Anspitzer.png',
    },
    {
        'revealed': false,
        'syllables': 1,
        'name': 'Heft',
        'img': 'img/Arbeitsheft.png',
    },
    {
        'revealed': false,
        'syllables': 1,
        'name': 'Buch',
        'img': 'img/Buch.png',
    },
    {
        'revealed': false,
        'syllables': 3,
        'name': 'Buntstifte',
        'img': 'img/Buntstifte.png',
    },
    {
        'revealed': false,
        'syllables': 4,
        'name': 'Federtasche',
        'img': 'img/Federtasche.png',
    },
    {
        'revealed': false,
        'syllables': 3,
        'name': 'Filzstifte',
        'img': 'img/Filzstifte.png',
    },
    {
        'revealed': false,
        'syllables': 3,
        'name': 'Lineal',
        'img': 'img/Lineal.png',
    },
    {
        'revealed': false,
        'syllables': 4,
        'name': 'Radiergummi',
        'img': 'img/Radiergummi.png',
    }

];

const sleep = (milliseconds) => {
    if (milliseconds === 0) {
        return new Promise(() => {
            return true
        });
    }
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

const myPlayer = document.getElementById('player');

function playClaps(clapNumbers) {
    for (let i = 0; i < clapNumbers; i++) {
        sleep(i * 1000 + 10).then(() => {
            myPlayer.play();
        });

    }
}

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
                playClaps(element.dataset.syllables);
                element.classList.add('selected');
                foundOne = true;
            }
        });
    });
}

initGame();
