const wordsArray1 = [
    {
        'id': '1',
        'name': 'Buch',
        'img': 'img/Buch.png',
        'positioned': false,
    },
    {
        'id': '2',
        'name': 'Federtasche',
        'img': 'img/Federtasche.png',
        'positioned': false,
    },
    {
        'id': '3',
        'name': 'Lineal',
        'img': 'img/Lineal.png',
        'positioned': false,
    },
    {
        'id': '4',
        'name': 'Pinsel',
        'img': 'img/Pinsel.png',
        'positioned': false,
    },
    {
        'id': '5',
        'name': 'Arbeitsheft',
        'img': 'img/Arbeitsheft.png',
        'positioned': false,
    },
    {
        'id': '6',
        'name': 'Radiergummi',
        'img': 'img/Radiergummi.png',
        'positioned': false,
    },
    {
        'id': '7',
        'name': 'Fussball',
        'img': 'img/Fussball.jpg',
        'positioned': false,
    },
    {
        'id': '8',
        'name': 'Fuchs',
        'img': 'img/Fuchs.jpg',
        'positioned': false,
    },
    {
        'id': '9',
        'name': 'Tischlampe',
        'img': 'img/Tischlampe.jpg',
        'positioned': false,
    },
    {
        'id': '10',
        'name': 'Hellroter',
        'img': 'img/Hellroter.jpg',
        'positioned': false,
    },
    {
        'id': '11',
        'name': 'Goldie-Welpe',
        'img': 'img/Goldie-Welpe.jpg',
        'positioned': false,
    },
    {
        'id': '12',
        'name': 'Raupe-Nimmersatt',
        'img': 'img/Raupe-Nimmersatt.jpg',
        'positioned': false,
    },
];

function initGame() {
    const gameGrid1 = wordsArray1
        .sort(() => 0.5 - Math.random());

    const game = document.getElementById('game');
    const grid1 = document.createElement('section');
    grid1.setAttribute('class', 'grid');
    game.appendChild(grid1);

    let idx = 0;
    gameGrid1.forEach(item => {
        const {id, name, img} = item;

        const card = document.createElement('div');
        card.dataset.id = id;
        card.dataset.name = name;

        card.classList.add('card');
        card.classList.add('draggable');

        const front = document.createElement('div');
        front.classList.add('front');
        front.style.backgroundImage = `url(${img})`;

        grid1.appendChild(card);
        card.appendChild(front);

        idx++;
    });

    $(function () {
        // noinspection JSValidateTypes
        $(".draggable").draggable();
        $(".draggable2").draggable();
    });
}

initGame();