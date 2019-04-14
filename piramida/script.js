const wordsArray = [
    {
        'name': 'Buch',
        'syllables': 1,
        'img': '/img/Buch.png',
    },

    {
        'name': 'Pinsel',
        'syllables': 2,
        'img': '/img/Pinsel.png',
    },
    {
        'name': 'Schere',
        'syllables': 2,
        'img': '/img/Schere.png',
    },

    {
        'name': 'Buntstifte',
        'syllables': 3,
        'img': '/img/Buntstifte.png',
    },
    {
        'name': 'Schultasche',
        'syllables': 3,
        'img': '/img/Schultasche.jpg',
    },
    {
        'name': 'Lineal',
        'syllables': 3,
        'img': '/img/Lineal.png',
    },

    {
        'name': 'artikel_0000065_b_1',
        'syllables': 4,
        'img': '/img/artikel_0000065_b_1.jpg',
    },
    {
        'name': 'Radiergummi',
        'syllables': 4,
        'img': '/img/Radiergummi.png',
    },
    {
        'name': 'Oekonorm',
        'syllables': 4,
        'img': '/img/oekonorm.jpg',
    },
    {
        'name': 'Federtasche',
        'syllables': 4,
        'img': '/img/Federtasche.png',
    },


];

function initGame() {
    const gameGrid = wordsArray
        .sort(() => 0.5 - Math.random());

    const grid = document.getElementsByClassName('grid1')[0];

    gameGrid.forEach(item => {
        const {name, syllables, img} = item;

        const card = document.createElement('div');
        card.dataset.name = name;
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
