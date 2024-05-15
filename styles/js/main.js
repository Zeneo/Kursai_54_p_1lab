
let budget = 0;
let time = 0;
let timeMin = 2000;
let timeMax = 5000;
let timeUntil = 3000;
let boxes = document.getElementById('js-main').querySelectorAll('.js-square');
let active = 0;
let actCnt = '';
let d = {
    'cntSize': parseInt(document.getElementById('square_'+1).offsetHeight),
    'stickerSize': 20,
    'top': 0,
    'left': 0
};
const interval = setTimeout(function() {
    generate();
}, timeUntil);


function generate() {
    console.log('Generate');
    let el = document.getElementById('actCnt')
    if (el) {
        el.parentNode.removeChild(el);
    }
    active = getRandom(1, boxes.length);
    if(!d.size) {
        d.size = document.getElementById('square_'+active).offsetHeight;
    }
    d.top = getRandom(0, d.cntSize-d.stickerSize);
    d.left = getRandom(0, d.cntSize-d.stickerSize);
    actCnt = document.getElementById('square_'+active).innerHTML = '<div id="actCnt" ' +
        'style="top: '+d.top+'px; left: '+d.left+'px; height: '+d.stickerSize+'px; width: '+d.stickerSize+'px;"></div>';
    document.getElementById('actCnt').addEventListener('click', function(e) {
        document.getElementById('js-counter').querySelector('span').innerHTML
            = parseInt(document.getElementById('js-counter').querySelector('span').innerText)+1;
    })
    timeUntil = getRandom()
    setTimeout(function() {
        generate();
    }, timeUntil);
}

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}