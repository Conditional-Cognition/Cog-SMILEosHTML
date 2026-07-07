// Grab all the navigation buttons
// noinspection SpellCheckingInspection

const buttons = document.querySelectorAll('.os-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        if (target === 'cybergrind') {
            renderCyberGrind();
        } else if (target === 'sandbox') {
            renderSandbox();
        }
    });
});

function renderCyberGrind() {
    subIcon.innerHTML = `<img src="assets/SmileOS_2_icon_cybergrind.png" style="width: 16px; height: 16px;" alt="cybergrind icon">`;
    subTitleText.textContent = 'The Cyber Grind';
    screenContent.classList.add('top-anchored');
    screenContent.innerHTML = `<p class="screen-text">Cyber Grind simulation currently offline.</p>`;
    leftPane.innerHTML = leftPaneDefaultHTML; // Ensure nav stays consistent
}

function renderSandbox() {
    subIcon.innerHTML = `<img src="assets/SmileOS_2_icon_sandbox.png" style="width: 16px; height: 16px;" alt="sandbox icon">`;
    subTitleText.textContent = 'The Sandbox';
    screenContent.classList.add('top-anchored');
    screenContent.innerHTML = `<p class="screen-text">Sandbox mode initialized.</p>`;
    leftPane.innerHTML = leftPaneDefaultHTML;
}

// --- Enemies tab: socials roster ---
const subTitleText = document.getElementById('sub-title-text');
const subIcon = document.getElementById('sub-icon');
const screenContent = document.getElementById('screen-content');
const leftPane = document.querySelector('.left-pane');

// Snapshot the original Tip of the Day markup and left-pane nav before anything overwrites them
const tipOfDayHTML = screenContent.innerHTML;
const leftPaneDefaultHTML = leftPane.innerHTML;

function resetToTipOfDay() {
    subIcon.innerHTML = `<img src="assets/SmileOS_2_icon_tip.webp" style="width: 16px; height: 16px;" alt="tip_icon">`;
    subTitleText.textContent = 'Tip of the Day';
    screenContent.classList.remove('top-anchored', 'weapons-mode');
    screenContent.innerHTML = tipOfDayHTML;

    // Weapons mode swaps out the whole left-pane nav, so restore it too
    leftPane.innerHTML = leftPaneDefaultHTML;
}

document.getElementById('main-close-btn').addEventListener('click', () => location.reload());
document.getElementById('sub-close-btn').addEventListener('click', resetToTipOfDay);

// --- Logo click toggle: swap between the custom text logo and the real image ---
// Delegated on the left-pane container itself (rather than .brand-area directly)
// since the weapons screen replaces the left-pane's innerHTML entirely.
leftPane.addEventListener('click', (e) => {
    const brand = e.target.closest('.brand-area');
    if (brand) brand.classList.toggle('showing-image');
});

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

const weaponCategories = {
    revolver: {
        name: 'Revolver',
        variants: [
            { name: 'PIERCER', altName: 'SLAB PIERCER', image: 'assets/weapons/SingleRevolver.webp', altImage: 'assets/weapons/RevolverAltSingle.webp' },
            { name: 'MARKSMAN', altName: 'SLAB MARKSMAN', image: 'assets/weapons/RevolverSpecial.webp', altImage: 'assets/weapons/RevolverAltSpecial.webp' },
            { name: 'SHARPSHOOTER', altName: 'SLAB SHARPSHOOTER', image: 'assets/weapons/RevolverSharp.webp', altImage: 'assets/weapons/RevolverAltSharp.webp' }
        ]
    },
    shotgun: {
        name: 'Shotgun',
        variants: [
            { name: 'CORE EJECT', altName: 'CORE EJECT JACKHAMMER', image: 'assets/weapons/Standard_Core_Eject_Shotgun.webp', altImage: 'assets/weapons/Alternate_Core_Eject_Shotgun.webp' },
            { name: 'PUMP CHARGE', altName: 'PUMP CHARGE JACKHAMMER', image: 'assets/weapons/Shotgun1.webp', altImage: 'assets/weapons/Alternate_Pump_Charge_Shotgun.webp' },
            { name: 'SAWED-ON', altName: 'SAWED-ON JACKHAMMER', image: 'assets/weapons/Standard_Sawed-On_Shotgun.webp', altImage: 'assets/weapons/Alternate_Sawed-On_Shotgun.webp' }
        ]
    },
    nailgun: {
        name: 'Nailgun',
        variants: [
            { name: 'ATTRACTOR', altName: 'ATTRACTOR SAWBLADE', image: 'assets/weapons/Nailgun2.webp', altImage: 'assets/weapons/SawbladeLauncher.webp' },
            { name: 'OVERHEAT', altName: 'OVERHEAT SAWBLADE', image: 'assets/weapons/NailgunOverheat.webp', altImage: 'assets/weapons/SawbladeLauncherOverheat.webp' },
            { name: 'JUMPSTART', altName: 'JUMPSTART SAWBLADE', image: 'assets/weapons/Standard_JumpStart_Nailgun.webp', altImage: 'assets/weapons/Alternate_JumpStart_Nailgun.webp' }
        ]
    },
    railcannon: {
        name: 'Railcannon',
        variants: [
            { name: 'ELECTRIC', image: 'assets/weapons/Railcannonelectric.webp' },
            { name: 'MALICIOUS', image: 'assets/weapons/Railcannonmalicious.webp' },
            { name: 'SCREWDRIVER', image: 'assets/weapons/Railcannonscrew.webp' }
        ]
    },
    rocketlauncher: {
        name: 'Rocket Launcher',
        variants: [
            { name: 'FIRESTARTER', image: 'assets/weapons/Firestarter_Rocket_Launcher.webp' },
            { name: 'S.R.S. CANNON', image: 'assets/weapons/S.R.S._Cannon.webp' },
            { name: 'FREEZEFRAME', image: 'assets/weapons/Rocketlauncher.webp' }
        ]
    },
    arms: {
        name: 'Arms',
        variants: [
            { name: 'FEEDBACKER', image: 'assets/weapons/FeedbackerHUDNew.webp' },
            { name: 'KNUCKLEBLASTER', image: 'assets/weapons/KnuckleblasterHUDNew.webp' },
            { name: 'WHIPLASH', image: 'assets/weapons/WhiplashHUDNew.webp' }
        ]
    }
};

const weaponNumbering = {};
const weaponRowStatus = {};
const statusLabels = {
    equipped: 'Equipped',
    alternate: 'Alternate',
    unequipped: 'Unequipped'
};

// 1st: Ensure every weapon row defaults entirely to 'equipped' on reload
Object.keys(weaponCategories).forEach(key => {
    weaponNumbering[key] = [1, 2, 3];
    weaponRowStatus[key] = ['equipped', 'equipped', 'equipped'];
});

let activeWeaponCategory = 'revolver';

function renderWeaponCategoryNav(activeKey) {
    const items = Object.keys(weaponCategories).map(key => `
        <button class="os-button weapon-category-btn${key === activeKey ? ' active-tab' : ''}" data-category="${key}">
            ${weaponCategories[key].name}
        </button>
    `).join('');

    leftPane.innerHTML = `
        <div class="weapons-header">Weapons</div>
        <nav class="button-list weapon-category-list">${items}</nav>
    `;

    leftPane.querySelectorAll('.weapon-category-btn').forEach(btn => {
        btn.addEventListener('click', () => renderWeaponsScreen(btn.dataset.category));
    });
}

function renderWeaponVariantList(categoryKey) {
    const category = weaponCategories[categoryKey];
    const numbering = weaponNumbering[categoryKey];
    const rowStatus = weaponRowStatus[categoryKey];

    const rows = category.variants.map((variant, rowPosition) => {
        const displayNumber = numbering[rowPosition];
        const state = rowStatus[rowPosition];
        const statusText = statusLabels[state];
        const statusClass = state === 'equipped' ? '' : ` weapon-status-${state}`;

        // 2.5th: Alternate picture logic and dynamic text switching
        let weaponNameDisplay = variant.name;
        let weaponImageSrc = variant.image;

        if (state === 'alternate' && variant.altImage) {
            weaponImageSrc = variant.altImage;
            if (variant.altName) {
                weaponNameDisplay = variant.altName;
            }
        }

        return `
            <div class="weapon-row" data-row="${rowPosition}">
                <div class="weapon-order-controls">
                    <button class="weapon-order-btn up" data-row="${rowPosition}" aria-label="Move number up">▲</button>
                    <button class="weapon-order-btn down" data-row="${rowPosition}" aria-label="Move number down">▼</button>
                </div>
                <div class="weapon-slot-number">${displayNumber}</div>
                <img class="weapon-thumb" src="${weaponImageSrc}" alt="${weaponNameDisplay}">
                <div class="weapon-info-text">
                    <p class="weapon-name">${weaponNameDisplay}</p>
                </div>
                <div class="weapon-row-right">
                    <span class="weapon-status-btn${statusClass}">${statusText}</span>
                    <div class="weapon-cycle-controls">
                        <button class="weapon-cycle-btn prev" data-row="${rowPosition}" aria-label="Previous equip status">«</button>
                        <button class="weapon-cycle-btn next" data-row="${rowPosition}" aria-label="Next equip status">»</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    screenContent.innerHTML = `
        <div class="weapon-variant-list">${rows}</div>
        <div class="weapon-footer">
            <button class="weapon-footer-btn">Info</button>
            <button class="weapon-footer-btn">Color</button>
        </div>
    `;

    screenContent.querySelectorAll('.weapon-order-btn.up').forEach(btn => {
        btn.addEventListener('click', () => {
            swapWeaponNumberByValue(categoryKey, parseInt(btn.dataset.row, 10), -1);
        });
    });
    screenContent.querySelectorAll('.weapon-order-btn.down').forEach(btn => {
        btn.addEventListener('click', () => {
            swapWeaponNumberByValue(categoryKey, parseInt(btn.dataset.row, 10), 1);
        });
    });
    screenContent.querySelectorAll('.weapon-cycle-btn.prev').forEach(btn => {
        btn.addEventListener('click', () => {
            cycleRowEquipStatus(categoryKey, parseInt(btn.dataset.row, 10), -1);
        });
    });
    screenContent.querySelectorAll('.weapon-cycle-btn.next').forEach(btn => {
        btn.addEventListener('click', () => {
            cycleRowEquipStatus(categoryKey, parseInt(btn.dataset.row, 10), 1);
        });
    });
}

function swapWeaponNumberByValue(categoryKey, row, direction) {
    const numbering = weaponNumbering[categoryKey];
    const total = numbering.length;
    const currentNumber = numbering[row];

    let targetNumber = currentNumber + direction;
    if (targetNumber < 1) targetNumber = total;
    if (targetNumber > total) targetNumber = 1;

    const partnerRow = numbering.indexOf(targetNumber);
    numbering[row] = targetNumber;
    numbering[partnerRow] = currentNumber;
    renderWeaponVariantList(categoryKey);
}

function cycleRowEquipStatus(categoryKey, row, direction) {
    const rowStatus = weaponRowStatus[categoryKey];

    // 2nd: Restrict Railcannon, Rocket Launcher, and Arms from accessing 'alternate'
    let allowedStates = ['equipped', 'alternate', 'unequipped'];
    if (categoryKey === 'railcannon' || categoryKey === 'rocketlauncher' || categoryKey === 'arms') {
        allowedStates = ['equipped', 'unequipped'];
    }

    const currentIndex = allowedStates.indexOf(rowStatus[row]);
    const total = allowedStates.length;

    if (currentIndex === -1) {
        rowStatus[row] = allowedStates[0];
    } else {
        const nextIndex = (currentIndex + direction + total) % total;
        rowStatus[row] = allowedStates[nextIndex];
    }

    renderWeaponVariantList(categoryKey);
}

function renderWeaponsScreen(categoryKey) {
    activeWeaponCategory = categoryKey;

    renderWeaponCategoryNav(categoryKey);

    subIcon.innerHTML = `<img src="assets/SmileOS_2_icon_gun.png" style="width: 16px; height: 16px;" alt="weapons icon">`;
    subTitleText.textContent = weaponCategories[categoryKey].name;
    screenContent.classList.add('top-anchored', 'weapons-mode');

    renderWeaponVariantList(categoryKey);
}

const weaponsButton = document.querySelector('.os-button[data-target="weapons"]');
if (weaponsButton) {
    weaponsButton.addEventListener('click', () => renderWeaponsScreen(activeWeaponCategory));
}