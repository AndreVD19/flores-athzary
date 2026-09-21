function goTo(id){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    if(id === 'screen-text'){
        startFireflies('fireflies3');
        setTimeout(() => goTo('screen-image'), 4200);
    }

    if(id === 'screen-image'){
        startFireflies('fireflies4');
        setTimeout(showLoveText, 2200);
    }
}



function createStars(containerId, amount){
    const container = document.getElementById(containerId);
    if(!container) return;
    for(let i = 0; i < amount; i++){
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 60 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.opacity = Math.random();
        container.appendChild(star);
    }
}



const lanternsBox = document.getElementById('lanterns');
for(let i = 0; i < 10; i++){
    const l = document.createElement('div');
    l.className = 'lantern';
    l.style.left = (5 + Math.random() * 90) + '%';
    l.style.animationDuration = (10 + Math.random() * 8) + 's';
    l.style.animationDelay = (Math.random() * 10) + 's';
    lanternsBox.appendChild(l);
}

const susuBox = document.getElementById('susuwataris');
for(let i = 0; i < 6; i++){
    const s = document.createElement('div');
    s.className = 'susuwatari';
    s.style.left = (10 + Math.random() * 80) + '%';
    s.style.animationDuration = (1.4 + Math.random()) + 's';
    s.style.animationDelay = (Math.random() * 2) + 's';
    susuBox.appendChild(s);
}

const bathhouseBody = document.getElementById('bathhouse-body');
for(let i = 0; i < 8; i++){
    const w = document.createElement('div');
    w.className = 'window';
    w.style.left = (10 + i * 32) + 'px';
    w.style.animationDelay = (Math.random() * 4) + 's';
    bathhouseBody.appendChild(w);
}



const petalContainer = document.getElementById('petals');
const totalPetals = 14;

for(let i = 0; i < totalPetals; i++){
    const petal = document.createElement('div');
    petal.className = 'petal';
    const angle = (360 / totalPetals) * i;
    petal.style.transform = `rotate(${angle}deg)`;
    petalContainer.appendChild(petal);
}

const garden = document.getElementById('garden');
const flowerEmojis = ['🌻','🌼','🌻','🌼','🌻'];


const rows = 9;
for(let r = 0; r < rows; r++){
    const flowersInRow = 14 + Math.floor(Math.random() * 6);
    const rowBottom = (r / rows) * 50; 
    for(let i = 0; i < flowersInRow; i++){
        const flower = document.createElement('div');
        flower.className = 'g-flower';
        flower.textContent = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        flower.style.left = (Math.random() * 100) + '%';
        flower.style.bottom = (rowBottom + Math.random() * (50 / rows)) + '%';
        flower.style.fontSize = (22 + Math.random() * 22) + 'px';
        flower.style.zIndex = 4 + r;
        flower.style.animationDelay = (Math.random() * 3) + 's';
        flower.style.animationDuration = (3.5 + Math.random() * 2) + 's';
        garden.appendChild(flower);
    }
}

const petalEmojis = ['🌸','💛','✨'];
for(let i = 0; i < 18; i++){
    const p = document.createElement('div');
    p.className = 'petal-fall';
    p.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
    p.style.left = (Math.random() * 100) + '%';
    p.style.animationDuration = (6 + Math.random() * 6) + 's';
    p.style.animationDelay = (Math.random() * 8) + 's';
    garden.appendChild(p);
}

setTimeout(() => {
    document.getElementById('continue-btn').classList.add('show');
}, 10000);


const firefliesStarted = {};

function startFireflies(containerId){
    if(firefliesStarted[containerId]) return;
    firefliesStarted[containerId] = true;

    const container = document.getElementById(containerId);
    const amount = 40;

    for(let i = 0; i < amount; i++){
        const fly = document.createElement('div');
        fly.className = 'firefly';
        fly.style.left = (Math.random() * 100) + '%';
        fly.style.top = (20 + Math.random() * 70) + '%';
        fly.style.animationDuration =
            (4 + Math.random() * 4) + 's, ' + (2 + Math.random() * 3) + 's';
        fly.style.animationDelay =
            (Math.random() * 4) + 's, ' + (Math.random() * 4) + 's';
        container.appendChild(fly);
    }
}



function showLoveText(){
    const el = document.getElementById('amo-text');
    const text = 'Te amo Athzary';
    el.innerHTML = '';
    el.classList.add('show');

    [...text].forEach((char, i) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = (i * 0.12) + 's';
        el.appendChild(span);
    });
}
