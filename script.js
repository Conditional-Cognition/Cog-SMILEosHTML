// Grab all the navigation buttons
const buttons = document.querySelectorAll('.os-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Add your screen text switching logic here later!
        console.log(`${button.textContent} clicked`);
    });
});

// --- Enemies tab: socials roster ---
const subTitleText = document.getElementById('sub-title-text');
const subIcon = document.getElementById('sub-icon');
const screenContent = document.getElementById('screen-content');

// Snapshot the original Tip of the Day markup before anything overwrites it
const tipOfDayHTML = screenContent.innerHTML;

function resetToTipOfDay() {
    subIcon.textContent = '✓';
    subTitleText.textContent = 'Tip of the Day';
    screenContent.classList.remove('top-anchored');
    screenContent.innerHTML = tipOfDayHTML;
}

document.getElementById('main-close-btn').addEventListener('click', () => location.reload());
document.getElementById('sub-close-btn').addEventListener('click', resetToTipOfDay);

const enemyData = {
    artfight: {
        name: 'ARTFIGHT',
        url: 'https://artfight.net/~Cdtnl_Cognition',
        image: 'assets/enemies/artfight.png',
        description: 'I do low poly, 3D modelling of characters, mine and yours.'
    },
    youtube: {
        name: 'YOUTUBE',
        url: 'https://www.youtube.com/@StorageUnitNo.199',
        image: 'assets/enemies/youtube.png',
        description: 'Short and Long videos of varied games (WIP)'
    },
    github: {
        name: 'GITHUB',
        url: 'https://github.com/Conditional-Cognition/',
        image: 'assets/enemies/github.png',
        description: 'Small mods, most WIP, and other assets I create.'
    }
};

function renderEnemyScreen(activeKey = null) {
    const realSlots = Object.keys(enemyData).map(key => `
        <button class="enemy-grid-btn${key === activeKey ? ' active-tab' : ''}"
                style="background-image: url('${enemyData[key].image}')"
                data-enemy="${key}"
                aria-label="${enemyData[key].name}">
        </button>
    `).join('');

    // Extra locked-looking tiles so the grid reads as "more to come", same as the in-game bestiary
    const lockedSlots = Array(3).fill('<div class="enemy-grid-locked">?</div>').join('');

    subIcon.textContent = '☠';
    subTitleText.textContent = 'Enemies';

    screenContent.classList.add('top-anchored');
    screenContent.innerHTML = `<div class="enemy-grid">${realSlots}${lockedSlots}</div>`;

    screenContent.querySelectorAll('.enemy-grid-btn').forEach(btn => {
        btn.addEventListener('click', () => renderEnemyDetail(btn.dataset.enemy));
    });
}

function renderEnemyDetail(key) {
    const enemy = enemyData[key];
    subIcon.textContent = '🔍';
    subTitleText.textContent = enemy.name;

    screenContent.classList.add('top-anchored');
    screenContent.innerHTML = `
        <div class="enemy-detail-page">
            <img class="enemy-detail-image" src="${enemy.image}" alt="${enemy.name}">
            <div class="enemy-detail-panel">
                <p class="highlight-red enemy-name">${enemy.name}</p>
                <p class="screen-text">${enemy.description}</p>
                <a class="enemy-link" href="${enemy.url}" target="_blank" rel="noopener">${enemy.url}</a>
            </div>
        </div>
        <button class="enemy-back-btn" id="enemy-back-btn">Back</button>
    `;

    document.getElementById('enemy-back-btn').addEventListener('click', () => renderEnemyScreen(key));
}

const enemiesButton = document.querySelector('.os-button[data-target="enemies"]');
if (enemiesButton) {
    enemiesButton.addEventListener('click', () => renderEnemyScreen());
}
