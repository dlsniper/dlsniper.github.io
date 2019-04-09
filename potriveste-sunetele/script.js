const wordsArray1 = [
    {
        'id': '1',
        'name': 'Buch',
        'img': 'img/Buch.png',
    },
    {
        'id': '2',
        'name': 'Federtasche',
        'img': 'img/Federtasche.png',
    },
    {
        'id': '3',
        'name': 'Lineal',
        'img': 'img/Lineal.png',
    },
    {
        'id': '4',
        'name': 'Pinsel',
        'img': 'img/Pinsel.png',
    },
    {
        'id': '5',
        'name': 'Arbeitsheft',
        'img': 'img/Arbeitsheft.png',
    },
    {
        'id': '6',
        'name': 'Radiergummi',
        'img': 'img/Radiergummi.png',
    },
];
const wordsArray2 = [
    {
        'id': '1',
        'name': 'Fussball',
        'img': 'img/Fussball.jpg',
    },
    {
        'id': '2',
        'name': 'Fuchs',
        'img': 'img/Fuchs.jpg',
    },
    {
        'id': '3',
        'name': 'Tischlampe',
        'img': 'img/Tischlampe.jpg',
    },
    {
        'id': '4',
        'name': 'Hellroter',
        'img': 'img/Hellroter.jpg',
    },
    {
        'id': '5',
        'name': 'Goldie-Welpe',
        'img': 'img/Goldie-Welpe.jpg',
    },
    {
        'id': '6',
        'name': 'Raupe-Nimmersatt',
        'img': 'img/Raupe-Nimmersatt.jpg',
    },
];

function resetFailDrop() {
    let elements = document.getElementsByClassName('card');
    Array.prototype.forEach.call(elements, element => {
        if (element.dataset.matched === 'true') {
            return;
        }

        element.classList.remove('fail-drop');
    });
}

function initGame() {
    const gameGrid1 = wordsArray1
        .sort(() => 0.5 - Math.random());
    const gameGrid2 = wordsArray2
        .sort(() => 0.5 - Math.random());

    const game = document.getElementById('game');
    const grid1 = document.createElement('section');
    grid1.setAttribute('class', 'grid grid1');
    game.appendChild(grid1);

    const grid2 = document.createElement('section');
    grid2.setAttribute('class', 'grid grid2');
    game.appendChild(grid2);

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
    });

    gameGrid2.forEach(item => {
        const {id, name, img} = item;

        const card = document.createElement('div');
        card.dataset.id = id;
        card.dataset.name = name;
        card.dataset.matched = 'false';

        card.classList.add('card');
        card.classList.add('droppable');

        const front = document.createElement('div');
        front.classList.add('front');
        front.style.backgroundImage = `url(${img})`;

        grid2.appendChild(card);
        card.appendChild(front);
    });

    $(function () {
        // noinspection JSValidateTypes
        $(".draggable").draggable();
        // noinspection JSUnusedGlobalSymbols
        $(".droppable").droppable({
            drop: function (event, ui) {
                const from = ui.draggable[0];
                const to = event.target;

                if (from.dataset.id === to.dataset.id) {
                    to.classList.add('ok-drop');
                    to.dataset.matched = 'true';
                    resetFailDrop()
                } else {
                    resetFailDrop()
                    to.classList.add('fail-drop');
                }
            }
        });
    });
}

initGame();