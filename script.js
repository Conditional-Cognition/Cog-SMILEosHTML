// noinspection SpellCheckingInspection
const buttons = document.querySelectorAll('.os-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');
        if (target === 'cybergrind') {
            renderCyberGrind();
        } else if (target === 'sandbox') {
            renderSandbox();
        } else if (target === 'socials') {
            renderSocialsScreen();
        }
        else if (target === 'enemies') {
            renderEnemiesScreen();
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

const socialData = {
    artfight: {
        name: 'ARTFIGHT',
        url: 'https://artfight.net/~Cdtnl_Cognition',
        image: 'assets/socials/artfight.png',
        description: 'I do low poly, 3D modelling of characters, mine and yours.'
    },
    youtube: {
        name: 'YOUTUBE',
        url: 'https://www.youtube.com/@StorageUnitNo.199',
        image: 'assets/socials/youtube.png',
        description: 'Short and Long videos of varied games (WIP)'
    },
    github: {
        name: 'GITHUB',
        url: 'https://github.com/Conditional-Cognition/',
        image: 'assets/socials/github.png',
        description: 'Small mods, most WIP, and other assets I create.'
    }
};

const enemyData = {
    filth: {
        name: 'FILTH',
        url: 'https://ultrakill.wiki.gg/wiki/Filth',
        image: 'assets/enemies/filth.webp',
        type: 'Lesser Husk',
        data: 'Husks are physical manifestations of the souls of the damned. The physical form is based on the value of the original soul, which is determined by the strength of its will and its prevalence in public consciousness: the living souls that remember it. Filth are the lowest form of Husk, whose souls were too weak and unimportant to even form a complete physical body. Even among Husks, they have the lowest intelligence, driven purely by hunger.',
        strategy:
            '- Most weapons are easily capable of taking down Filth, but their powerful jaws and sheer numbers can overwhelm a target quickly if underestimated.\n' +
            '\n' +
            '- Explosives are the most effective way to take down swarms, but any weapon that can hit more than one target will be efficient.'
    },
    stray: {
        name: 'STRAY',
        url: 'https://ultrakill.wiki.gg/wiki/Stray',
        image: 'assets/enemies/stray.png',
        type: 'Lesser Husk',
        data:
            'While their tall stature may seem intimidating, Strays are afraid of most danger and will try to stay at a safe distance, only attacking via projectiles formed with Hell Energy.\n' +
            '\n' +
            'Although controlling and manifesting this energy is a complicated task, Strays have very low intelligence and are only able to do so via pure instinct.\n' +
            '\n' +
            'Nevertheless, humans were unable to replicate this level of accuracy and control, particularily the Stray’s ability to cause the energy orbs to selectively ignore other Husks.\n',
        strategy:
            '- Most weapons will be effective against them, but a Revolver headshot is the quickest and surest way to eliminate a Stray.\n' +
            '\n' +
            '- Due to their static nature and slow rate of attacking, they are an excellent target for projectile parrying.'
    },
    stalker: {
        name: 'STALKER',
        url: 'https://ultrakill.wiki.gg/wiki/Stalker',
        image: 'assets/enemies/stalker.png',
        type: 'Lesser Husk',
        data:
            'As the Greed layer\'s punishment, Stalkers have been forced to carry heavy boulders up the monuments of mankind\'s greed for all eternity.\n' +
            '\n' +
            'They have carried out their punishment for so long that their bodies have evolved, warped and grown to better suit it.\n' +
            '\n' +
            'Their limbs have twisted to give them better balance while carrying boulders on their backs and their skin and muscles have completely dried up, allowing them to survive direct contact with the dunes of gold dust that Greed\'s sun has raised to unfathomably high temperatures.\n' +
            '\n' +
            'However, an unidentified sentient force has replaced the boulders they would normally carry with high tech bombs that, upon detonation, will transform any nearby blood into the gold dust "sand" that covers the layer\'s surface.\n' +
            '\n' +
            'Research has shown the technology to be very similar to the augmentations of the modified Strays known as Soldiers, so it is likely both modifications come from the same source.',
        strategy:
            '- The lights on the canister give information on a Stalker\'s state. The color shows the state of their explosive and the brightness of the color shows how much health the Stalker has left.\n' +
            '\n' +
            '- It\'s advisable to forcibly detonate a Stalker rather than allowing one to detonate itself, as the latter explosion will have a larger area of effect.\n' +
            '\n' +
            '- If a Stalker gets close to its target and can no longer be pushed away, a ground slam wave can launch them out of range so they can be detonated safely in mid-air, since the explosion is mostly horizontal.\n' +
            '\n' +
            '- Attaching magnets to a Stalker will reduce the radius of its detonation.'
    },
    schism: {
        name: 'SCHISM',
        url: 'https://ultrakill.wiki.gg/wiki/Schism',
        image: 'assets/enemies/schism.png',
        type: 'Greater Husk',
        data:
            'The result of two souls attempting to manifest in the same space, causing an amalgamation of two physical bodies.\n' +
            '\n' +
            'Due to the doubled body mass, they’re quite resilient to damage, but have very poor motor control and thus cannot aim with any degree of accuracy, resorting to barrages of energy orbs in the general direction of their opponent.',
        strategy:
            '- Piercer revolver\'s charged headshots are an efficient tool for a quick kill against Schisms, though their displaced head can make aiming difficult for the inexperienced.\n' +
            '\n' +
            '- A point-blank Pump Charge shotgun blast with 2 pumps will be able to take them down in a single shot.\n' +
            '\n' +
            '- Due to their poor aim, they aren\'t a priority target, but the sheer amount of projectiles can sometimes make avoiding them tricky in busy encounters.'
    },
    soldier: {
        name: 'SOLDIER',
        url: 'https://ultrakill.wiki.gg/wiki/Soldier',
        image: 'assets/enemies/soldier.png',
        type: 'Greater Husk',
        data:
            'Soldiers are an augmented version of Strays, whose technological implants have been scavenged from broken machines to channel Hell Energy with greater efficiency.\n' +
            '\n' +
            'This increase in power gives Soldiers more self-confidence, causing them to act more aggressively than normal Strays.\n' +
            '\n' +
            'Despite the enhancements, their intelligence remains low and it has yet to be determined who or what actually augmented them.',
        strategy:
            '- The shotgun is an excellent weapon against Soldiers, as long as its use is swift so as to not allow them to protect themselves with melee attacks.\n' +
            '\n' +
            '- Since Soldiers charge their shots in front of them rather than above them, the charge is also easier to interrupt via a precise revolver shot for an explosive kill.\n' +
            '\n' +
            '- Thanks to their augmentations, Soldiers are able to withstand normal explosions with little to no damage. The more powerful red explosions will go through their guard however, and they are unable to block if not on the ground.'
    },
    corpseofkingminos: {
        name: 'THE CORPSE OF KING MINOS',
        url: 'https://ultrakill.wiki.gg/wiki/The_Corpse_of_King_Minos',
        image: 'assets/enemies/corpse.png',
        type: 'Supreme Husk',
        data:
            'Once the great and beloved king of the Lust layer, Minos has now been reduced to a shambling corpse.\n' +
            '\n' +
            'Due to his incredible power of will and status as a just ruler in life remembered even millenia[sic] after his death, the manifestation of his soul is the largest Husk to ever have been recorded.\n' +
            '\n' +
            'Small traces of the original soul can still be detected in the body, but the corpse itself is animated and controlled entirely by the snakelike Parasites that he once commanded.\n' +
            '\n' +
            'Despite once bringing upon the renaissance of the Lust layer, his corpse now only seeks sinners to punish.',
        strategy:
            '- Due to his large stature, it can be quite difficult to recover blood from him, but his hands are usually holding on to the walls of the arena, which can be used for refueling.\n' +
            '\n' +
            '- Any weapon will work against an enemy this large, but melee and projectile parries make for a quick way to inflict grave damage.\n' +
            '\n' +
            '- Although it moves slowly, the Black Hole he summons is extremely dangerous and cannot be destroyed.'
    },
    insurrectionist: {
        name: 'INSURRECTIONIST',
        url: 'https://ultrakill.wiki.gg/wiki/Insurrectionist',
        image: 'assets/enemies/insurrectionist.png',
        type: 'Supreme Husk',
        data:
            'The Sisyphean Insurrectionists were an army of Husks gathered and trained by King Sisyphus for overthrowing Heaven\'s control of Hell, freeing the sinners from their eternal torment.\n' +
            '\n' +
            'During an era of chaos in Heaven, as the angelic watch was absent, Sisyphus began setting his plan in motion as his forces recruited all Husks that were intelligent enough to be useful to their cause and began attacking the demons that wandered the dunes of Greed.\n' +
            '\n' +
            'Upon the establishment of the Council and subsequent return of peace to Heaven, Gabriel and an army of angels were sent down to crush the insurrection and subjugate Sisyphus\' army.\n' +
            '\n' +
            'Although their battle was well-fought, the inexperienced Insurrectionists could not match the educated strategy of the angels, who quickly descended upon King Sisyphus with great force, eventually overpowering and killing him, leaving the Insurrectionists without a chain of command.\n' +
            '\n' +
            'Left scattered and disoriented, the warriors were easily picked off one by one, their bodies cut apart, leaving behind only the bare essentials required to carry on their eternal punishment of hauling heavy boulders up the monuments of mankind\'s arrogance and greed.\n' +
            '\n' +
            'Although the blood of their enemies still stains their bodies and their grasp still clutches their fallen foes, their will and fierce fury only serve as mental torment in knowing how close they were to freedom.',
        strategy:
            '- The Sisyphean Insurrectionists soak their feet in the blood of their enemies to protect them from the heat of Greed\'s dunes, but the rest of their body is still skin and flesh, which can be set aflame to greatly weaken their defences, increasing the damage of any attack dealt to them.\n' +
            '\n' +
            '- Though they have practically unlimited range, each of the Insurrectionist\'s swings has strengths and weaknesses. Learning which way to dodge to avoid each attack is vital.\n' +
            '\n' +
            '- The Insurrectionist\'s stomp is fast and destructive, so it\'s inadvisable to stay close for long.\n' +
            '\n' +
            '- The Malicious Face they wield as a weapon is not a part of their body, so hitting it will not deal damage to an Insurrectionist, but this also means that it can still be used to heal even if its wielder\'s blood has been turned to sand.'
    },
    ferryman: {
        name: 'FERRYMAN',
        url: 'https://ultrakill.wiki.gg/wiki/Ferryman',
        image: 'assets/enemies/ferryman.png',
        type: 'Supreme Husk',
        data:
            'Ferrymen are rare husks whose powerful bodies, trained skills and blind faith have granted them the chance of becoming the transporters of souls between the layers of Hell.\n' +
            '\n' +
            'They have each been given a holy cloth by Heaven as a symbol of their devotion to God\'s order, which they wear over their bodies to hide the human form that they\'ve grown to despise as a reminder of their sins in life stopping them from becoming angels, to the extent that they have torn off their own skin and flesh, leaving behind only bones.\n' +
            '\n' +
            'Due to the holy power emanating from the cloth, Ferrymen\'s skeletal bodies have slowly been colored bright and radiant, and their skulls have enough latent energy to open gates that otherwise stop Husks from exiting their places of torment.\n' +
            '\n' +
            'Each ferry can only have one Ferryman at a time, so when a new Ferryman is formed, it will fight another to the death in order to take their place and inherit their cloth. The loser\'s skull is taken as a trophy and used to grant the winner passage across the layers in order to transport the souls of the damned to their destinations.\n' +
            '\n' +
            'Ferrymen will often use the knowledge from their past life to improve their ferries, growing past the need for oars, which are now used by Ferrymen only as weapons.\n' +
            '\n' +
            'As the influx of souls has ended with the death of mankind, the Ferrymen have lost their purpose and now wander around aimlessly, hoping that the angels would grant them passage into Heaven, despite Gabriel being the only one who cares about their efforts.',
        strategy:
            '- Ferrymen choose their attacks based on their opponent\'s actions. When approached, they move to safety, and when retreated from, they\'ll apply pressure via attacks with greater reach.\n' +
            '\n' +
            '- Despite its looks, their uppercut is quite dangerous and can be difficult to dodge. It\'s best not to stay in the air for too long.\n' +
            '\n' +
            '- Some of their attacks are parryable and some are not. Pay attention to the color of their warning flash to learn which are which.\n' +
            '\n' +
            '- Ferrymen may attempt to cross a retreating opponent up by rolling behind them before attacking. Keep track of their position and if they roll too often, try being more aggressive.'
    },
    mirrorreaper: {
        name: 'MIRROR REAPER',
        url: 'https://ultrakill.wiki.gg/wiki/Mirror_Reaper',
        image: 'assets/enemies/mirrorreaper.png',
        type: 'Supreme Husk',
        data:
            'Due to its illusory nature, very little is known about the 8th layer of Hell. Even its punishment remains shrouded in mystery.\n' +
            '\n' +
            'Extended exposure to the layer, which seems like picturesque recreation of a New Peace community on the surface, causes eventual total collapse of sensory information and physical space, after which all connection is lost.\n' +
            '\n' +
            'The only point of reference is the elusive Mirror Reaper, an amalgamation of multiple husks arranged in a deliberate, twisted fashion, which seems to exist between spaces, often inside reflections, hence its name.\n' +
            '\n' +
            'Although this example could be used to draw conclusions about the fates of its layer\'s inhabitants, it\'s important to keep in mind that this instance is the only one of its kind to ever be seen, which may imply that what happened to everyone else was far, far worse.',
        strategy:
            '- The Mirror Reaper\'s height and speed make it an imposing opponent, but its poor motor control gives shorter opponents an advantage in passing under its swings.\n' +
            '\n' +
            '- When the Mirror Reaper escapes, the hands it summons can be followed back to their source to find it.\n' +
            '\n' +
            '- The summoned hands can be destroyed with projectiles, but explosions do not damage them.\n' +
            '\n' +
            '- When in grave danger, the Mirror Reaper can escape into a fold in space, making it only visible through reflections.'
    },
    drone: {
        name: 'DRONE',
        url: 'https://ultrakill.wiki.gg/wiki/Drone',
        image: 'assets/enemies/drone.png',
        type: 'Lesser Machine',
        data:
            'A mass-produced security device built as both a surveillance camera and a security guard.\n' +
            '\n' +
            'Though originally built to only use non-lethal ammunition, they have scavenged parts from the defunct machines on the surface for greater efficiency at collecting blood.\n' +
            '\n' +
            'Curious by nature, but to keep production costs low, their intelligence is very limited.',
        strategy:
            '- Due to their light weight, physical projectiles such as nails will push them around, making them harder to deal consistent damage to.\n' +
            '\n' +
            '- On death they will make a last ditch effort to harm their opponent with a self-destruct, but powerful single attacks and explosives will make them explode instantly.\n' +
            '\n' +
            '- Punching a drone will redirect their suicide dive, making them a high-risk offensive opportunity.\n' +
            '\n' +
            '- Their scanning mechanism makes a chirping sound, which can be listened for to make them easier to track down, as their flight and small size can lead them to hard to reach places.'
    },
    streetcleaner: {
        name: 'STREETCLEANER',
        url: 'https://ultrakill.wiki.gg/wiki/Streetcleaner',
        image: 'assets/enemies/streetcleaner.png',
        type: 'Lesser Machine',
        data:
            'Originally built as a way to purify the tainted air of cities after the climate catastrophe, Streetcleaners were made obsolete during the New Peace, and were repurposed as scouts for Hell expeditions.\n' +
            '\n' +
            'However, their urge to clean remained, and after the fall of mankind, they began burning any organic matter they came across in an effort to purify the world.',
        strategy:
            '- Due to their combat experience, they can be tricky to take down with projectiles or explosives.\n' +
            '\n' +
            '- The canister on their back is a major weakpoint that can be shattered with a precision shot, such as a Marksman coin ricochet from behind.\n' +
            '\n' +
            '- Point-blank attacks can also be very efficient, but must be performed quickly to avoid the fire of their flamethrowers.'
    }
};

function renderSocialsScreen(activeKey = null) {
    const realSlots = Object.keys(socialData).map(key => `
        <button class="enemy-grid-btn${key === activeKey ? ' active-tab' : ''}"
                style="background-image: url('${socialData[key].image}')"
                data-enemy="${key}"
                aria-label="${socialData[key].name}">
        </button>
    `).join('');

    // Extra locked-looking tiles so the grid reads as "more to come", same as the in-game bestiary
    const lockedSlots = Array(3).fill('<div class="enemy-grid-locked">?</div>').join('');

    subIcon.innerHTML = `<img src="assets/SmileOS_2_icon_enemy.svg" style="width: 16px; height: 16px;" alt="enemy icon">`;
    subTitleText.textContent = 'Socials';

    screenContent.classList.add('top-anchored');
    screenContent.innerHTML = `<div class="enemy-grid">${realSlots}${lockedSlots}</div>`;

    screenContent.querySelectorAll('.enemy-grid-btn').forEach(btn => {
        btn.addEventListener('click', () => renderSocialDetail(btn.dataset.enemy));
    });
}

function renderEnemiesScreen(activeKey = null) {
    const realSlots = Object.keys(enemyData).map(key => `
        <button class="enemy-grid-btn${key === activeKey ? ' active-tab' : ''}"
                style="background-image: url('${enemyData[key].image}')"
                data-enemy="${key}"
                aria-label="${enemyData[key].name}">
        </button>
    `).join('');

    // Extra locked-looking tiles so the grid reads as "more to come", same as the in-game bestiary
    const lockedSlots = Array(20).fill('<div class="enemy-grid-locked">?</div>').join('');

    subIcon.innerHTML = `<img src="assets/SmileOS_2_icon_enemy.svg" style="width: 16px; height: 16px;" alt="enemy icon">`;
    subTitleText.textContent = 'Enemies';

    screenContent.classList.add('top-anchored');
    screenContent.innerHTML = `<div class="enemy-grid">${realSlots}${lockedSlots}</div>`;

    screenContent.querySelectorAll('.enemy-grid-btn').forEach(btn => {
        btn.addEventListener('click', () => renderEnemyDetail(btn.dataset.enemy));
    });
}

function renderSocialDetail(key) {
    const enemy = socialData[key];
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
    document.getElementById('enemy-back-btn').addEventListener('click', () => renderSocialsScreen(key));
}

function renderEnemyDetail(key) {
    const enemy = enemyData[key];
    if (!enemy) return;

    subIcon.textContent = '🔍';
    subTitleText.textContent = enemy.name;

    screenContent.innerHTML = `
        <div class="enemy-detail-wrapper">
            <div class="enemy-detail-page">
                <div class='enemy-display'>
                    <img class="enemy-detail-image" src="${enemy.image}" alt="">
                    <button class="enemy-back-btn" id="enemy-back-btn">Back</button>
                </div>
                <div class="enemy-detail-panel">
                    <div class="enemy-text">
                        <p class="highlight-red">TYPE:</p>
                        <p>${enemy.type}</p>
                        <p class="highlight-red">DATA:</p>
                        <p class="screen-text">${enemy.data}</p>
                        <p class="highlight-red">STRATEGY:</p>
                        <p class="screen-text">${enemy.strategy}</p>
                        <p style="height: 15px"></p>
                        <a class="enemy-link" href="${enemy.url}" target="_blank" rel="noopener">${enemy.url}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.getElementById('enemy-back-btn').addEventListener('click', () => renderEnemiesScreen());
}

const enemiesButton = document.querySelector('.os-button[data-target="enemies"]');
if (enemiesButton) {
    enemiesButton.addEventListener('click', () => renderEnemiesScreen());
}

const weaponCategories = {
    revolver: {
        name: 'Revolver',
        variants: [
            { name: 'PIERCER', altName: 'PIERCER', image: 'assets/weapons/SingleRevolver.webp', altImage: 'assets/weapons/RevolverAltSingle.webp' },
            { name: 'MARKSMAN', altName: 'MARKSMAN', image: 'assets/weapons/RevolverSpecial.webp', altImage: 'assets/weapons/RevolverAltSpecial.webp' },
            { name: 'SHARPSHOOTER', altName: 'SHARPSHOOTER', image: 'assets/weapons/RevolverSharp.webp', altImage: 'assets/weapons/RevolverAltSharp.webp' }
        ]
    },
    shotgun: {
        name: 'Shotgun',
        variants: [
            { name: 'CORE EJECT', altName: 'CORE EJECT', image: 'assets/weapons/Standard_Core_Eject_Shotgun.webp', altImage: 'assets/weapons/Alternate_Core_Eject_Shotgun.webp' },
            { name: 'PUMP CHARGE', altName: 'PUMP CHARGE', image: 'assets/weapons/Shotgun1.webp', altImage: 'assets/weapons/Alternate_Pump_Charge_Shotgun.webp' },
            { name: 'SAWED-ON', altName: 'SAWED-ON', image: 'assets/weapons/Standard_Sawed-On_Shotgun.webp', altImage: 'assets/weapons/Alternate_Sawed-On_Shotgun.webp' }
        ]
    },
    nailgun: {
        name: 'Nailgun',
        variants: [
            { name: 'ATTRACTOR', altName: 'ATTRACTOR', image: 'assets/weapons/Nailgun2.webp', altImage: 'assets/weapons/SawbladeLauncher.webp' },
            { name: 'OVERHEAT', altName: 'OVERHEAT', image: 'assets/weapons/NailgunOverheat.webp', altImage: 'assets/weapons/SawbladeLauncherOverheat.webp' },
            { name: 'JUMPSTART', altName: 'JUMPSTART', image: 'assets/weapons/Standard_JumpStart_Nailgun.webp', altImage: 'assets/weapons/Alternate_JumpStart_Nailgun.webp' }
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
            { name: 'FREEZEFRAME', image: 'assets/weapons/Rocketlauncher.webp' },
            { name: 'S.R.S. CANNON', image: 'assets/weapons/S.R.S._Cannon.webp' },
            { name: 'FIRESTARTER', image: 'assets/weapons/Firestarter_Rocket_Launcher.webp' }
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

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');

    if (tab === 'socials') {
        renderSocialsScreen();
        subTitleText.textContent = 'Socials';
    } else if (tab === 'enemies') {
        renderEnemiesScreen();
        subTitleText.textContent = 'Enemies';
    } else if (tab === 'weapons') {
        renderWeaponsScreen();
        renderWeaponVariantList();
        renderWeaponCategoryNav();
        subTitleText.textContent = 'Weapons';
    }
});
if (window.location.hash === '#socials') {
    renderSocialsScreen();
    subTitleText.textContent = 'Socials';
} else if (window.location.hash === '#enemies') {
    renderEnemiesScreen();
    subTitleText.textContent = 'Enemies';
} else if (window.location.hash === '#weapons') {
    renderWeaponsScreen();
    renderWeaponVariantList();
    renderWeaponCategoryNav();
    subTitleText.textContent = 'Weapons';
}
document.getElementById('external-socials-btn').addEventListener('click', () => {
    renderSocialsScreen();
    subTitleText.textContent = 'Socials';
});