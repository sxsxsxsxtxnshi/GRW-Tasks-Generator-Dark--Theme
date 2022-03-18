'use strict';
let hud = document.querySelector('.generator__col1__param.hud');
hud.textContent = 'generating hud: off'
let hudContent = hud.textContent;
let guns = document.querySelector('.generator__col1__param.guns');
guns.textContent = 'generating guns: off';
let gunsContent = guns.textContent;
let modules = document.querySelector('.generator__col1__param.modules');
modules.textContent = 'generating modules: off';
let modulesContent = modules.textContent;

hud.onclick = () => {
    hud.classList.toggle('active');
    hud.textContent = hudContent;
    if (hud.classList.contains('active')) {
        hud.textContent = 'generating HUD: on';    
    };
};
        
guns.onclick = () => {
    guns.classList.toggle('active');
    modules.classList.remove('active');
    guns.textContent = gunsContent;
    if (guns.classList.contains('active')) {
        guns.textContent = 'generating guns: on';    
    };
};

modules.onclick = () => {
    modules.classList.toggle('active');
    guns.classList.add('active');
    guns.textContent = 'generating guns: on';
    modules.textContent = modulesContent; 
    if (modules.classList.contains('active')) {
        modules.textContent = 'generating modules: on';    
    };
};

//i know that upper code is bad, but for now i leave it like this

let locationParent = document.querySelector('.generator__col2-info__sup__info.location');
let taskParent = document.querySelector('.generator__col2-info__sup__info.task');
let hudParent = document.querySelector('.generator__col2-info__sub__list__item.hud');
let coordinatesParent = document.querySelector('.generator__col2-info__sub__list__item.coordinates');
let timeParent = document.querySelector('.generator__col2-info__sub__list__item.time');
let transportParent = document.querySelector('.generator__col2-info__sub__list__item.transport');
let clothingParent = document.querySelector('.generator__col2-info__sub__list__item.clothing');
let bodyTopParent = document.querySelector('.generator__col2-info__sub__list__item.bodyTop');
let bodyDownParent = document.querySelector('.generator__col2-info__sub__list__item.bodyDown');
let armorParent = document.querySelector('.generator__col2-info__sub__list__item.armor');
let headwearParent = document.querySelector('.generator__col2-info__sub__list__item.headwear');
let facemaskParent = document.querySelector('.generator__col2-info__sub__list__item.facemask');
let glassesParent = document.querySelector('.generator__col2-info__sub__list__item.glasses');
let headphonesParent = document.querySelector('.generator__col2-info__sub__list__item.headphones');
let handwearParent = document.querySelector('.generator__col2-info__sub__list__item.handwear');
let backpackParent = document.querySelector('.generator__col2-info__sub__list__item.backpack');
let nightVisionParent = document.querySelector('.generator__col2-info__sub__list__item.nightvision');


// /\gear

let primaryGunParent = document.querySelector('.generator__col2-info__sub__list.primary.weapon');
let primaryGunName = document.querySelector('.generator__col2-info__sub__list__item.primary.weapon');
let primaryGunScope = document.querySelector('.generator__col2-info__sub__list__item.primary.scope');
let primaryGunGrip = document.querySelector('.generator__col2-info__sub__list__item.primary.grip');
let primaryGunLaser = document.querySelector('.generator__col2-info__sub__list__item.primary.laser');
let primaryGunMagazine = document.querySelector('.generator__col2-info__sub__list__item.primary.magazine');
let primaryGunBarrel = document.querySelector('.generator__col2-info__sub__list__item.primary.barrel');
let primaryGunMuzzle = document.querySelector('.generator__col2-info__sub__list__item.primary.muzzle');
let primaryGunButtstock = document.querySelector('.generator__col2-info__sub__list__item.primary.buttstock');
// /\primaryGun settings

let secondGunParent = document.querySelector('.generator__col2-info__sub__list.second.weapon');
let secondGunName = document.querySelector('.generator__col2-info__sub__list__item.second.weapon');
let secondGunScope = document.querySelector('.generator__col2-info__sub__list__item.second.scope');
let secondGunGrip = document.querySelector('.generator__col2-info__sub__list__item.second.grip');
let secondGunMagazine = document.querySelector('.generator__col2-info__sub__list__item.second.magazine');
let secondGunLaser = document.querySelector('.generator__col2-info__sub__list__item.second.laser');
let secondGunBarrel = document.querySelector('.generator__col2-info__sub__list__item.second.barrel');
let secondGunMuzzle = document.querySelector('.generator__col2-info__sub__list__item.second.muzzle');
let secondGunButtstock = document.querySelector('.generator__col2-info__sub__list__item.second.buttstock');
// /\secondGun settings

let helpGunParent = document.querySelector('.generator__col2-info__sub__list.help.weapon');
let helpGunName = document.querySelector('.generator__col2-info__sub__list__item.help.weapon');
let helpGunMagazine = document.querySelector('.generator__col2-info__sub__list__item.help.magazine');
let helpGunLaser = document.querySelector('.generator__col2-info__sub__list__item.help.laser');
let helpGunBarrel = document.querySelector('.generator__col2-info__sub__list__item.help.barrel');
let helpGunMuzzle = document.querySelector('.generator__col2-info__sub__list__item.help.muzzle');
// /\helpGun settings
let generatingGuns = document.querySelector('.generator__col2-info__sub__list__guns');
let generatingModules = document.querySelectorAll('.generator__col2-info__sub__list__item.modules');

//arrays


var regions = ['Koani', 'Tabakal', 'Monte Puncu', 'Villa Verde','Caimanes','Montuyoc','Inca Camina','Remanzo','Barvechos','Itacua','Ocoro','Flor de Oro','P.N. De Agua Verde','Pukara','Libertad','Mojocoyo','Espiritu Santo','Media Luna','San Mateo',];
var typeOfTask = [/**/'Capturing the outpost', 'Capturing the commander', 'Capturing the column', 'Diversion (C4)', 'Capturing the outpost, Capturing the commander', 'Diversion (C4), Capturing the commander', 'Liqudation the commander', 'Liqudation the commander, Diversion (С4)', 'Boss Capturing/Liquidation', 'Recon (city)',];
var hudOnOff = [true, false,];
var taskIn = ['Center', 'North','South','West','East','Northern-West','Northern-East','Southern-West','Southern-East',];
var timeOfDay = ['Morning', 'Day', 'Evening', 'Night',];
var transport = ['Four-wheel', 'Two-wheel', 'Air', 'Water',];
var typeOfClothes = ['Civillian', 'PMC', 'Special Forces', 'Hidden', 'Black Division A', 'Black Division B', 'Black Division C', 'Bravo-Six A', 'Bravo-Six B', 'Bravo-Six C', 'Bravo-Six D', 'Bravo-Six E', 'NAVY Seal A', 'NAVY Seal B', 'NAVY Seal C', 'Blackwater A', 'Blackwater B', 'Blackwater C', 'Ghost Recon A', 'Ghost Recon B', 'Ghost Recon sxsxsxsxtxnshi', 'Field Recon A',];
var bodyTop = ['Hoodie',];
var bodyDown = [];
var headProtection = ['None', 'FAST-MT', 'Team Wendy EXFIL', 'Baseball Cap', 'Baseball Cap Backwards', 'Recruit Hat 5.11®', 'Multicam 5.11® Cap', 'Santa Blanca Cap',];
var faceProtection = ['None', 'Two-Hole Balaclava', 'One-Hole Balaclava',];
var glasses = ['None', 'Oakley SI Ballistic M Frame', 'Oakley SI Straight Jacket', 'ESS Ballistic Googles', 'Aviator Sunglasses', 'Oakley SI Straight Jacket Fire',];
var headphones = ['Earpice','Headset A','Headset B','Headset C',];
var bodyProtection = ['Molle Harness', 'Molle', '5.11® VTAC LBE', 'Tactical Vest', '5.11® Tactec Plate Carrier', 'JPC','Mayflower APC',];
var nightvision = [true, false,];
var handProtection = ['None', 'Oakley Pilot', 'Fingerless Kevlar', 'Nomex® Gloves', 'Executioner', 'Echelon Gloves',];
var backpacks = ['CamelBak®', 'Drone', 'Standard Issue', 'AN/PRC-150', 'Y-Strap', '5.11® Rush24', '5.11® All Hazards Prime Pack', '5.11® Rush72', 'Guerilla Backpack', 'Sapper Backpack',]
//arrays

var bodyTopBefore = bodyTop;
var bodyDownBefore = bodyDown;
var bodyProtectionBefore = bodyProtection;
var headProtectionBefore = headProtection;
var faceProtectionBefore = faceProtection;
var glassesBefore = glasses;
var headphonesBefore = headphones;
var handProtectionBefore = handProtection;
var bakpacksBefore = backpacks;
//arrays before

var primaryWeapons = [/**/'MK-17', 'R5-RGP', 'Kriss Vector .45 ACP', 'ACR', '9x19 VSN', 'MDR', '805 Bren A2', 'M4A1', 'SR-635', 'AK-47', '6P41','G2', 'L85A2', 'AK-12', '556xi', 'Stoner LMG A1', 'MK-48', 'UMP-45', 'PSG','SR-3M', 'Mk249', 'P416', 'MP7', 'R5-RGP CQC', 'R5-RGP CQB', 'P416 Ghost Recon', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 sxsxsxsxtxnshi', '805 Bren A2 CQC', '805 A2 Bren CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'AK-12 Smuggled', 'AK-47 Kataris26 (MC Tropic)', 'Stoner LMG A1 Ghost Recon', 'MK-48 NAVY Seal',];
var primaryWeaponsBefore = primaryWeapons;
var sniperWeapons = ['Dragunov (SVD)','G28','SR25','MSR','HTI','M40A5','SR-1','SRSA1','L115A3','MK14', 'G28 Tan sxsxsxsxtxnshi', 'G28 Bravo-Six', 'SR25 Bravo-Six', 'SR25 Sport', 'MK14 Sport', 'SR-1 Bravo-Six', 'MK-17 Marksman', 'Dragunov (SVD) Field Recon',];
var sniperWeaponsBefore = sniperWeapons;
var helpGuns = ['M9', 'P45T', 'M1911', 'P12', '5.7 USG',  'P227',];
var helpGunsBefore = helpGuns;
var rifleScopes = ['Polymer Iron Sight', 'Polymer BUIS', 'Russian Red Dot', 'EXPS3', 'PK-AS', 'Panoramic Sight', 'Micro T-1', 'CompM4', 'Digital Scope',];
var rifleScopesBefore = rifleScopes;
var rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'AFG', 'Std Grenade Launcher', 'Grenade Launcher М203',];
var rifleGripsBefore = rifleGrips;
var rifleLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot','Range Finder',];
var rifleLasersBefore = rifleLasers;
var rifleMagazines = ['Standard (20)', 'Extended (30)', 'Large (50)',];
var rifleMagazinesBefore = rifleMagazines;
var rifleBarrels = ['Standard barrel',];
var rifleBarrelsBefore = rifleBarrels;
var rifleMuzzles = ['Stock Muzzle', 'Supressor',];
var rifleMuzzlesBefore = rifleMuzzles;
var rifleButtstocks = ['Stock Buttstock',];
var rifleButtstocksBefore = rifleButtstocks;

var sniperScopes = ['TA31H', 'TARS101', 'T5Xi Tactical', 'Digital Scope', 'POSP', 'PKS-07', 'G28',];
var sniperGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'AFG',];
var sniperLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot','Range Finder',];
var sniperMagazines = ['Standard (10)','Extended (20)',];
var sniperMagazinesBefore = sniperMagazines;
var sniperBarrels = ['Standard barrel',];
var sniperBarrelsBefore = sniperBarrels;
var sniperMuzzles = ['Stock Muzzle', 'Supressor',];
var sniperMuzzlesBefore = sniperMuzzles;
var sniperButtstocks = ['Stock Buttstock',];
var sniperButtstocksBefore = sniperButtstocks;

var helpMagazines = [];
var helpMagazinesBefore = helpMagazines;
var helpLasers = ['ATIPAL Laser Sight', 'Laser 3Dot',];
var helpLasersBefore = helpLasers;
var helpBarrels = ['Standard Barrel'];
var helpBarrelsBefore = helpBarrels;
var helpMuzzles = ['Stock Muzzle', 'Supressor',];
var helpMuzzlesBefore = helpMuzzles;

var getRegion = function(max) {
    var result = Math.round(Math.random() * max);
    return regions[result]
};

var getTask = function(max) {
    var result = Math.round(Math.random() * max);
    return typeOfTask[result]
};
var task = getTask(typeOfTask.length - 1);

var getCoordinates = function(max) {
    var result = Math.round(Math.random() * max);
    return taskIn[result]
};

var getTimeOfDay = function(max) {
    var result = Math.round(Math.random() * max);
    return timeOfDay[result]
};
var gettedTime = getTimeOfDay(timeOfDay.length - 1);

var getTransport = function(max) {
    var result = Math.round(Math.random() * max);
    return transport[result]
};    

var getClothes = function(max) {
    var result = Math.round(Math.random() * max);
    if (task === 'Recon (city)') {
        return typeOfClothes[0]
    }
    return typeOfClothes[result]
};
var gettedClothing = getClothes(typeOfClothes.length - 1);

bodyTop = bodyTopBefore;
bodyDown = bodyDownBefore;
bodyProtection = bodyProtectionBefore;
headProtection = handProtectionBefore;
faceProtection = faceProtectionBefore;
glasses = glassesBefore;
headphones = headphonesBefore;
handProtection = handProtectionBefore;
backpacks = bakpacksBefore;

primaryWeapons = primaryWeaponsBefore;
sniperWeapons = sniperWeaponsBefore;
helpGuns = helpGunsBefore;

switch (gettedClothing) {
    case 'Civillian':
        bodyTop = ['Hoodie', 'T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Striped Hoodie',];
        bodyDown = ['Jeans A (No Knee Pads)','Cargo A',];
    break;

    case 'Special Forces':
        bodyTop = ['Hoodie', 'Fleece','Crye Combat Shirt',];
        bodyDown = ['5.11® Tactical B','5.11® Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11® Apex B','5.11® Apex C',];
    break;

    case 'PMC':
        bodyTop = ['Hoodie', 'T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Striped Hoodie','Fleece','Crye Combat Shirt',];
        bodyDown = ['Jeans A (No Knee Pads)','Cargo A','5.11® Tactical B','5.11® Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11® Apex B','5.11® Apex C',];
    break;

    case 'Hidden':
        bodyTop = ['Ghillie'];
        bodyDown = ['Crye Precision Combat Olive','Ghillie'];
    break;

    case 'Black Division A': 
        headProtection = ['Panoramic NVG BLK',];
        faceProtection = ['One-Hole Balaclava BLK',];
        glasses = ['None'];
        headphones = ['Headset B BLK',];
        bodyTop = ['Crye Combat Shirt MC BLK',];
        bodyDown = ['Crye Precision Combat MC BLK',];
        bodyProtection = ['Mayflower APC BLK',];
        handProtection = ['Nomex® Gloves BLK',];
        backpacks = ['5.11® Rush24 BLK'];

        primaryWeapons = ['R5-RGP Black Division', 'P416 Black Division', 'MK-17 Black Division', ' 805 Bren A2 Black Division', 'ACR Black Division', 'MDR Black Division', 'M4A1 Black Division', '805 Bren A2 CQC', 'ACR CQC', 'R5-RGP CQC',];
        sniperWeapons = ['SR-1 Black Division', 'G28 Black Division', 'MK-17 Marksman', 'SRSA1 Black Division',];
    break;

    case 'Black Division B': 
        headProtection = ['FAST-MT BLK',];
        faceProtection = ['One-Hole Balaclava BLK',];
        glasses = ['ESS Ballistic Googles'];
        headphones = ['Headset B BLK',];
        bodyTop = ['Fleece BLK',];
        bodyDown = ['Crye Precision Combat MC BLK',];
        bodyProtection = ['JPC BLK',];
        handProtection = ['Nomex® Gloves BLK',];
        backpacks = ['5.11® All Hazards BLK'];

        primaryWeapons = ['R5-RGP Black Division', 'P416 Black Division', 'MK-17 Black Division', ' 805 Bren A2 Black Division', 'ACR Black Division', 'MDR Black Division', 'M4A1 Black Division', '805 Bren A2 CQC', 'ACR CQC', 'R5-RGP CQC',];
        sniperWeapons = ['SR-1 Black Division', 'G28 Black Division', 'MK-17 Marksman', 'SRSA1 Black Division',];
    break;

    case 'Black Division C': 
        headProtection = ['Special NVG BLK',];
        faceProtection = ['One-Hole Balaclava BLK',];
        glasses = ['None'];
        headphones = ['Headset B BLK',];
        bodyTop = ['Fleece BLK',];
        bodyDown = ['Crye Precision Combat MC BLK',];
        bodyProtection = ['5.11® Tactec Plate Carrier BLK',];
        handProtection = ['Nomex® Gloves BLK',];
        backpacks = ['Y-Strap BLK'];

        primaryWeapons = ['R5-RGP Black Division', 'P416 Black Division', 'MK-17 Black Division', ' 805 Bren A2 Black Division', 'ACR Black Division', 'MDR Black Division', 'M4A1 Black Division', '805 Bren A2 CQC', 'ACR CQC', 'R5-RGP CQC',];
        sniperWeapons = ['SR-1 Black Division', 'G28 Black Division', 'MK-17 Marksman', 'SRSA1 Black Division',];
    break;

    //black division

    case 'Bravo-Six A': 
        headProtection = ['Polar Fleece Beanie Tan',];
        faceProtection = ['One-Hole Balaclava BLK',];
        glasses = ['None'];
        headphones = ['Earpiece Black',];
        bodyTop = ['Hoodie BLK',];
        bodyDown = ['Stalker Jeans',];
        bodyProtection = ['5.11® Tactec Plate Carrier A-TACS FG',];
        handProtection = ['Echelon Gloves',];
        backpacks = ['CamelBak® A-TACS FG'];

        primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
    break;

    case 'Bravo-Six B':
        headProtection = ['Panoramic NVG BLK'];
        faceProtection = ['None'];
        glasses = ['None'];
        headphones = ['Headset C BLK'];
        bodyTop = ['Hoodie BLK'];
        bodyDown = ['Stalker Jeans'];
        bodyProtection = ['5.11® Tactec Plate Carrier MC BLK'];
        handProtection = ['Nomex® Gloves Coyote'];
        backpacks = ['5.11® All Hazards BLK'];

        primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
    break;

    case 'Bravo-Six C':
        headProtection = ['Wingnut MC'];
        faceProtection = ['One-Hole Balaclava BLK'];
        glasses = ['None'];
        headphones = ['Headset C BLK'];
        bodyTop = ['Fleece BLK'];
        bodyDown = ['Crye Precision Combat MC'];
        bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
        handProtection = ['Nomex® Gloves Coyote'];
        backpacks = ['5.11® All Hazards BLK'];

        primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
    break;

    case 'Bravo-Six D':
        headProtection = ['Watch Cap BLK'];
        faceProtection = ['None'];
        glasses = ['None'];
        headphones = ['Headset C BLK'];
        bodyTop = ['Fleece BLK'];
        bodyDown = ['Crye Precision Combat MC'];
        bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
        handProtection = ['Nomex® Gloves Coyote'];
        backpacks = ['Guerilla Backpack BLK'];

        primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
    break;

    case 'Bravo-Six E':
        headProtection = ['Baseball Cap BLK'];
        faceProtection = ['Two-Holes Balaclava BLK'];
        glasses = ['None'];
        headphones = ['Headset A Coyote'];
        bodyTop = ['Striped Hoodie BLK'];
        bodyDown = ['Crye Precision Combat MC'];
        bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
        handProtection = ['Nomex® Gloves Coyote'];
        backpacks = ['Sapper Backpack'];

        primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
    break;

    //bravo-six

    case 'NAVY Seal A':
        headProtection = ['Baseball Cap Backwards BLK'];
        faceProtection = ['One-Holes Balaclava BLK'];
        glasses = ['None'];
        headphones = ['Earpiece Black'];
        bodyTop = ['Polo Shirt BLK'];
        bodyDown = ['Crye Precision Combat MC'];
        bodyProtection = ['JPC MC'];
        handProtection = ['Executioner'];
        backpacks = ['CamelBak® MC'];

        primaryWeapons = ['R5-RGP CQB', 'P416 CQB', 'MK-17 CQB', '805 Bren A2 CQB', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six', 'SR25 Sport', 'MK14 Sport',];
    break;

    case 'NAVY Seal B':
        headProtection = ['None'];
        faceProtection = ['DM Scarf BLK'];
        glasses = ['Aviator Sunglasses'];
        headphones = ['Headset A Coyote'];
        bodyTop = ['Stried Hoodie BLK'];
        bodyDown = ['Cargo C Tan'];
        bodyProtection = ['Mayflower APC MC'];
        handProtection = ['Oakley Pilot BLK'];
        backpacks = ['CamelBak® MC'];

        primaryWeapons = ['R5-RGP CQB', 'P416 CQB', 'MK-17 CQB', '805 Bren A2 CQB', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six', 'SR25 Sport', 'MK14 Sport',];
    break;

    case 'NAVY Seal C':
        headProtection = ['FAST-MT Coyote'];
        faceProtection = ['One-Holes Balaclava BLK']
        glasses = ['None'];
        headphones = ['None'];
        bodyTop = ['Crye Combat Shirt MC Coyote',];
        bodyDown = ['Crye Precision Combat MC'];
        bodyProtection = ['Mayflower APC MC'];
        handProtection = ['None'];
        backpacks = ['CamelBak® MC'];

        primaryWeapons = ['R5-RGP CQB', 'P416 CQB', 'MK-17 CQB', '805 Bren A2 CQB', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal',];
        sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six', 'SR25 Sport', 'MK14 Sport',];
    break;

    //navy seal

    case 'Blackwater A':
        headProtection = ['Baseball Cap Coyote'];
        faceProtection = ['DM Scarf']
        glasses = ['Oakley SI Straight Jacket'];
        headphones = ['Headset B BLK'];
        bodyTop = ['Business Casual Stripes 3',];
        bodyDown = ['Crye Precision Combat Coyote'];
        bodyProtection = ['Mayflower APC BLK'];
        handProtection = ['Executioner'];
        backpacks = ['AN/PRC-150 BLK'];

        primaryWeapons = ['AK-12 Smuggled', 'M4A1 NAVY Seal', 'ACR CQB', 'MK-17 CQC', 'MK-17 CQB',];
        sniperWeapons = ['SR25 Sport', 'MK14 Sport', ];
    break;

    case 'Blackwater B':
        headProtection = ['Recruit Hat 5.11® Sand Stone'];
        faceProtection = ['Two-Holes Balaclava BLK'];
        glasses = ['None'];
        headphones = ['None'];
        bodyTop = ['Short Sleeve Shirt Stripes 2',];
        bodyDown = ['Jeans B'];
        bodyProtection = ['5.11® VTAC LBE Tactical Vest BLK'];
        handProtection = ['Executioner'];
        backpacks = ['Y-Strap BLK'];

        primaryWeapons = ['AK-12 Smuggled', 'M4A1 NAVY Seal', 'ACR CQB', 'MK-17 CQC', 'MK-17 CQB',];
        sniperWeapons = ['SR25 Sport', 'MK14 Sport', ];
    break;

    case 'Blackwater C':
        headProtection = ['FAST-MT Coyote'];
        faceProtection = ['Two-Holes Balaclava BLK'];
        glasses = ['None'];
        headphones = ['Headset C BLK'];
        bodyTop = ['Long Sleeve Shirt Stripes 2',];
        bodyDown = ['Jeans B'];
        bodyProtection = ['5.11® Tactec Plate Carrier BLK'];
        handProtection = ['Executioner'];
        backpacks = ['5.11® Rush72 A-TACS FG'];

        primaryWeapons = ['AK-12 Smuggled', 'M4A1 NAVY Seal', 'ACR CQB', 'MK-17 CQC', 'MK-17 CQB',];
        sniperWeapons = ['SR25 Sport', 'MK14 Sport',];
    break;

    //blackwater

    case 'Ghost Recon A':
        headProtection = ['Nomad Cap'];
        faceProtection = ['None']
        glasses = ['Oakley SI Straight Jacket'];
        headphones = ['Headset C Olive'];
        bodyTop = ['T-Shirt Red',];
        bodyDown = ['Cargo A Coyote'];
        bodyProtection = ['5.11® VTAC LBE Tactical Vest MC Tropic'];
        handProtection = ['Oakley Pilot Tan'];
        backpacks = ['Drone A-TACS LE'];

        primaryWeapons = ['P416 Ghost Recon', 'Stoner LMG A1 Ghost Recon', 'ACR CQC', '805 Bren A2 CQC', 'M4A1 NAVY Seal'];
        sniperWeapons = ['SR25 Sport', 'MK14 Sport',];
    break;

    case 'Ghost Recon B':
        headProtection = ['None'];
        faceProtection = ['None']
        glasses = ['None'];
        headphones = ['Headset A Olive'];
        bodyTop = ['Long Sleeve Shirt Stripes 6',];
        bodyDown = ['5.11® Apex A BLK'];
        bodyProtection = ['Molle Harness BLK'];
        handProtection = ['None'];
        backpacks = ['Sapper Backpack BLK'];

        primaryWeapons = ['P416 Ghost Recon', 'Stoner LMG A1 Ghost Recon', 'ACR CQC', '805 Bren A2 CQC', 'M4A1 NAVY Seal'];
        sniperWeapons = ['SR25 Sport', 'MK14 Sport',];
    break;

    case 'Ghost Recon sxsxsxsxtxnshi':
        headProtection = ['Nomad Cap'];
        faceProtection = ['One-Hole Balaclava']
        glasses = ['None'];
        headphones = ['Headset A Coyote'];
        bodyTop = ['Striped Hoodie BLK',];
        bodyDown = ['Crye Precision Combat Coyote'];
        bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
        handProtection = ['Nomex® Gloves BLK'];
        backpacks = ['CamelBak® Coyote'];

        primaryWeapons = ['805 Bren A2 sxsxsxsxtxnshi',];
        sniperWeapons = ['G28 Tan sxsxsxsxtxnshi'];
    break;

    case 'Field Recon A':
        headProtection = ['Hat A-TACS AU'];
        faceProtection = ['One-Hole Balaclava BLK'];
        glasses = ['None'];
        headphones = ['None'];
        bodyTop = ['Fleece BLK',];
        bodyDown = ['Crye Precision Combat A-TACS AU'];
        bodyProtection = ['Molle Harness A-TACS AU'];
        handProtection = ['Nomex® Gloves BLK'];
        backpacks = ['CamelBak® A-TACS AU'];

        primaryWeapons = ['SR-3M FSB', '9x19 VSN FSB', '6P41 Field Recon',];
        sniperWeapons = ['Dragunov (SVD) Field Recon', 'Dragunov (SVD) FSB',];
    break;
};

var getBodyTop = function(max) {
    var result = Math.round(Math.random() * max);
    return bodyTop[result]
};

var getBodyDown = function(max) {
    var result = Math.round(Math.random() * max);
    return bodyDown[result]
};

var getCarrier = function(max) {
    var result = Math.round(Math.random() * max);
    return bodyProtection[result]
};

var getHelmet = function(max) {
    var result = Math.round(Math.random() * max);
    return headProtection[result]
};

var getMask = function(max) {
    var result = Math.round(Math.random() * max);
    return faceProtection[result]
};

var getGlasses = function(max) {
    var result = Math.round(Math.random() * max);
    return glasses[result]
};

var getHeadphones = function(max) {
    var result = Math.round(Math.random() * max);
    return headphones[result]
};

var getHandwear = function(max) {
    var result = Math.round(Math.random() * max);
    return handProtection[result]
};

var getBackpack= function(max) {
    var result = Math.round(Math.random() * max);
    return backpacks[result]
};

var getNightvision = function(max) {
    var result = Math.round(Math.random() * max);
    return nightvision[result]
};

locationParent.textContent = `Location: ${getRegion(regions.length - 1)}`;
taskParent.textContent = `Task: ${task}`;

armorParent.classList.remove('hidden');
headwearParent.classList.remove('hidden');
facemaskParent.classList.remove('hidden');
glassesParent.classList.remove('hidden');
headphonesParent.classList.remove('hidden');
handwearParent.classList.remove('hidden');
backpackParent.classList.remove('hidden');
nightVisionParent.classList.add('hidden');

if (gettedTime === 'Evening' || gettedTime === 'Night') {
    nightVisionParent.classList.remove('hidden');
    nightVisionParent.textContent = `Nightvision: ${getNightvision(nightvision.length - 1)}`;    
};/*if gettedTime === Evening || Night TRUE*/

if (taskParent.textContent === 'Task: Recon (city)') {
    armorParent.classList.add('hidden');
    headwearParent.classList.add('hidden');
    facemaskParent.classList.add('hidden');
    glassesParent.classList.add('hidden')
    headphonesParent.classList.add('hidden');
    handwearParent.classList.add('hidden');
    backpackParent.classList.add('hidden');
    nightVisionParent.classList.add('hidden');
};/*if task === Recon (City) TRUE*/

coordinatesParent.textContent = `Coordinates: ${getCoordinates(taskIn.length - 1)}`;
timeParent.textContent = `Time: ${gettedTime}`;
transportParent.textContent = `Allowed Transport: ${getTransport(transport.length - 1)}`;
clothingParent.textContent = `Type of clothes: ${gettedClothing}`;
bodyTopParent.textContent = `Body Top: ${getBodyTop(bodyTop.length - 1)}`;
bodyDownParent.textContent = `Body Down: ${getBodyDown(bodyDown.length - 1)}`;
armorParent.textContent = `Armor: ${getCarrier(bodyProtection.length - 1)}`;
headwearParent.textContent = `Headwear: ${getHelmet(headProtection.length - 1)}`;
facemaskParent.textContent = `Facemask: ${getMask(faceProtection.length - 1)}`;
glassesParent.textContent = `Glasses: ${getGlasses(glasses.length - 1)}`;
headphonesParent.textContent = `Headphones: ${getHeadphones(headphones.length - 1)}`;
handwearParent.textContent = `Handwear: ${getHandwear(handProtection.length - 1)}`;
backpackParent.textContent = `Backpack: ${getBackpack(backpacks.length - 1)}`;
//gear


let genBtn = document.querySelector('.generator__col1__btn');

genBtn.onclick = function createMission() {
    
    //body.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;
    taskBanner.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;

    var getHud = function(max) {
        var result = Math.round(Math.random() * max);
        return hudOnOff[result]
    };

    var getRegion = function(max) {
        var result = Math.round(Math.random() * max);
        return regions[result]
    };
    
    var getTask = function(max) {
        var result = Math.round(Math.random() * max);
        return typeOfTask[result]
    };
    var task = getTask(typeOfTask.length - 1);
    
    var getCoordinates = function(max) {
        var result = Math.round(Math.random() * max);
        return taskIn[result]
    };
    
    var getTimeOfDay = function(max) {
        var result = Math.round(Math.random() * max);
        return timeOfDay[result]
    };
    var gettedTime = getTimeOfDay(timeOfDay.length - 1);
    
    var getTransport = function(max) {
        var result = Math.round(Math.random() * max);
        return transport[result]
    };    
    
    var getClothes = function(max) {
        var result = Math.round(Math.random() * max);
        if (task === 'Recon (city)') {
            return typeOfClothes[0]
        }
        return typeOfClothes[result]
    };
    var gettedClothing = getClothes(typeOfClothes.length - 1);
    
    bodyTop = bodyTopBefore;
    bodyDown = bodyDownBefore;
    bodyProtection = bodyProtectionBefore;
    headProtection = handProtectionBefore;
    faceProtection = faceProtectionBefore;
    glasses = glassesBefore;
    headphones = headphonesBefore;
    handProtection = handProtectionBefore;
    backpacks = bakpacksBefore;
    
    primaryWeapons = primaryWeaponsBefore;
    sniperWeapons = sniperWeaponsBefore;
    helpGuns = helpGunsBefore;
    
    switch (gettedClothing) {
        case 'Civillian':
            bodyTop = ['Hoodie', 'T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Striped Hoodie',];
            bodyDown = ['Jeans A (No Knee Pads)','Cargo A',];
        break;
    
        case 'Special Forces':
            bodyTop = ['Hoodie', 'Fleece','Crye Combat Shirt',];
            bodyDown = ['5.11® Tactical B','5.11® Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11® Apex B','5.11® Apex C',];
        break;
    
        case 'PMC':
            bodyTop = ['Hoodie', 'T-Shirt','Tank Top','Business Casual','Polo Shirt','Short Sleeve Shirt','Long Sleeve Shirt','Jacket','Striped Hoodie','Fleece','Crye Combat Shirt',];
            bodyDown = ['Jeans A (No Knee Pads)','Cargo A','5.11® Tactical B','5.11® Tactical C','Cargo B','Cargo C','Crye Precision Combat', '5.11® Apex B','5.11® Apex C',];
        break;
    
        case 'Hidden':
            bodyTop = ['Ghillie'];
            bodyDown = ['Crye Precision Combat Olive','Ghillie'];
        break;
    
        case 'Black Division A': 
            headProtection = ['Panoramic NVG BLK',];
            faceProtection = ['One-Hole Balaclava BLK',];
            glasses = ['None'];
            headphones = ['Headset B BLK',];
            bodyTop = ['Crye Combat Shirt MC BLK',];
            bodyDown = ['Crye Precision Combat MC BLK',];
            bodyProtection = ['Mayflower APC BLK',];
            handProtection = ['Nomex® Gloves BLK',];
            backpacks = ['5.11® Rush24 BLK'];
    
            primaryWeapons = ['R5-RGP Black Division', 'P416 Black Division', 'MK-17 Black Division', ' 805 Bren A2 Black Division', 'ACR Black Division', 'MDR Black Division', 'M4A1 Black Division', '805 Bren A2 CQC', 'ACR CQC', 'R5-RGP CQC',];
            sniperWeapons = ['SR-1 Black Division', 'G28 Black Division', 'MK-17 Marksman', 'SRSA1 Black Division',];
        break;
    
        case 'Black Division B': 
            headProtection = ['FAST-MT BLK',];
            faceProtection = ['One-Hole Balaclava BLK',];
            glasses = ['ESS Ballistic Googles'];
            headphones = ['Headset B BLK',];
            bodyTop = ['Fleece BLK',];
            bodyDown = ['Crye Precision Combat MC BLK',];
            bodyProtection = ['JPC BLK',];
            handProtection = ['Nomex® Gloves BLK',];
            backpacks = ['5.11® All Hazards BLK'];
    
            primaryWeapons = ['R5-RGP Black Division', 'P416 Black Division', 'MK-17 Black Division', ' 805 Bren A2 Black Division', 'ACR Black Division', 'MDR Black Division', 'M4A1 Black Division', '805 Bren A2 CQC', 'ACR CQC', 'R5-RGP CQC',];
            sniperWeapons = ['SR-1 Black Division', 'G28 Black Division', 'MK-17 Marksman', 'SRSA1 Black Division',];
        break;
    
        case 'Black Division C': 
            headProtection = ['Special NVG BLK',];
            faceProtection = ['One-Hole Balaclava BLK',];
            glasses = ['None'];
            headphones = ['Headset B BLK',];
            bodyTop = ['Fleece BLK',];
            bodyDown = ['Crye Precision Combat MC BLK',];
            bodyProtection = ['5.11® Tactec Plate Carrier BLK',];
            handProtection = ['Nomex® Gloves BLK',];
            backpacks = ['Y-Strap BLK'];
    
            primaryWeapons = ['R5-RGP Black Division', 'P416 Black Division', 'MK-17 Black Division', ' 805 Bren A2 Black Division', 'ACR Black Division', 'MDR Black Division', 'M4A1 Black Division', '805 Bren A2 CQC', 'ACR CQC', 'R5-RGP CQC',];
            sniperWeapons = ['SR-1 Black Division', 'G28 Black Division', 'MK-17 Marksman', 'SRSA1 Black Division',];
        break;
    
        //black division
    
        case 'Bravo-Six A': 
            headProtection = ['Polar Fleece Beanie Tan',];
            faceProtection = ['One-Hole Balaclava BLK',];
            glasses = ['None'];
            headphones = ['Earpiece Black',];
            bodyTop = ['Hoodie BLK',];
            bodyDown = ['Stalker Jeans',];
            bodyProtection = ['5.11® Tactec Plate Carrier A-TACS FG',];
            handProtection = ['Echelon Gloves',];
            backpacks = ['CamelBak® A-TACS FG'];
    
            primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
        break;
    
        case 'Bravo-Six B':
            headProtection = ['Panoramic NVG BLK'];
            faceProtection = ['None'];
            glasses = ['None'];
            headphones = ['Headset C BLK'];
            bodyTop = ['Hoodie BLK'];
            bodyDown = ['Stalker Jeans'];
            bodyProtection = ['5.11® Tactec Plate Carrier MC BLK'];
            handProtection = ['Nomex® Gloves Coyote'];
            backpacks = ['5.11® All Hazards BLK'];
    
            primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
        break;
    
        case 'Bravo-Six C':
            headProtection = ['Wingnut MC'];
            faceProtection = ['One-Hole Balaclava BLK'];
            glasses = ['None'];
            headphones = ['Headset C BLK'];
            bodyTop = ['Fleece BLK'];
            bodyDown = ['Crye Precision Combat MC'];
            bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
            handProtection = ['Nomex® Gloves Coyote'];
            backpacks = ['5.11® All Hazards BLK'];
    
            primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
        break;
    
        case 'Bravo-Six D':
            headProtection = ['Watch Cap BLK'];
            faceProtection = ['None'];
            glasses = ['None'];
            headphones = ['Headset C BLK'];
            bodyTop = ['Fleece BLK'];
            bodyDown = ['Crye Precision Combat MC'];
            bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
            handProtection = ['Nomex® Gloves Coyote'];
            backpacks = ['Guerilla Backpack BLK'];
    
            primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
        break;
    
        case 'Bravo-Six E':
            headProtection = ['Baseball Cap BLK'];
            faceProtection = ['Two-Holes Balaclava BLK'];
            glasses = ['None'];
            headphones = ['Headset A Coyote'];
            bodyTop = ['Striped Hoodie BLK'];
            bodyDown = ['Crye Precision Combat MC'];
            bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
            handProtection = ['Nomex® Gloves Coyote'];
            backpacks = ['Sapper Backpack'];
    
            primaryWeapons = ['R5-RGP CQC', 'R5-RGP CQB', 'P416 CQB', 'MK-17 CQC', 'MK-17 CQB', '805 Bren A2 CQC', '805 Bren A2 CQB', 'ACR CQC', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal', 'MK-48 Bravo-Six',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six',];
        break;
    
        //bravo-six
    
        case 'NAVY Seal A':
            headProtection = ['Baseball Cap Backwards BLK'];
            faceProtection = ['One-Holes Balaclava BLK'];
            glasses = ['None'];
            headphones = ['Earpiece Black'];
            bodyTop = ['Polo Shirt BLK'];
            bodyDown = ['Crye Precision Combat MC'];
            bodyProtection = ['JPC MC'];
            handProtection = ['Executioner'];
            backpacks = ['CamelBak® MC'];
    
            primaryWeapons = ['R5-RGP CQB', 'P416 CQB', 'MK-17 CQB', '805 Bren A2 CQB', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six', 'SR25 Sport', 'MK14 Sport',];
        break;
    
        case 'NAVY Seal B':
            headProtection = ['None'];
            faceProtection = ['DM Scarf BLK'];
            glasses = ['Aviator Sunglasses'];
            headphones = ['Headset A Coyote'];
            bodyTop = ['Stried Hoodie BLK'];
            bodyDown = ['Cargo C Tan'];
            bodyProtection = ['Mayflower APC MC'];
            handProtection = ['Oakley Pilot BLK'];
            backpacks = ['CamelBak® MC'];
    
            primaryWeapons = ['R5-RGP CQB', 'P416 CQB', 'MK-17 CQB', '805 Bren A2 CQB', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six', 'SR25 Sport', 'MK14 Sport',];
        break;
    
        case 'NAVY Seal C':
            headProtection = ['FAST-MT Coyote'];
            faceProtection = ['One-Holes Balaclava BLK']
            glasses = ['None'];
            headphones = ['None'];
            bodyTop = ['Crye Combat Shirt MC Coyote',];
            bodyDown = ['Crye Precision Combat MC'];
            bodyProtection = ['Mayflower APC MC'];
            handProtection = ['None'];
            backpacks = ['CamelBak® MC'];
    
            primaryWeapons = ['R5-RGP CQB', 'P416 CQB', 'MK-17 CQB', '805 Bren A2 CQB', 'ACR CQB', 'MDR Bravo-Six', 'M4A1 NAVY Seal', 'MK-48 NAVY Seal',];
            sniperWeapons = ['SR-1 Bravo-Six', 'G28 Bravo-Six', 'MK-17 Marksman', 'MSR Bravo-Six', 'SR25 Sport', 'MK14 Sport',];
        break;
    
        //navy seal
    
        case 'Blackwater A':
            headProtection = ['Baseball Cap Coyote'];
            faceProtection = ['DM Scarf']
            glasses = ['Oakley SI Straight Jacket'];
            headphones = ['Headset B BLK'];
            bodyTop = ['Business Casual Stripes 3',];
            bodyDown = ['Crye Precision Combat Coyote'];
            bodyProtection = ['Mayflower APC BLK'];
            handProtection = ['Executioner'];
            backpacks = ['AN/PRC-150 BLK'];
    
            primaryWeapons = ['AK-12 Smuggled', 'M4A1 NAVY Seal', 'ACR CQB', 'MK-17 CQC', 'MK-17 CQB',];
            sniperWeapons = ['SR25 Sport', 'MK14 Sport', ];
        break;
    
        case 'Blackwater B':
            headProtection = ['Recruit Hat 5.11® Sand Stone'];
            faceProtection = ['Two-Holes Balaclava BLK'];
            glasses = ['None'];
            headphones = ['None'];
            bodyTop = ['Short Sleeve Shirt Stripes 2',];
            bodyDown = ['Jeans B'];
            bodyProtection = ['5.11® VTAC LBE Tactical Vest BLK'];
            handProtection = ['Executioner'];
            backpacks = ['Y-Strap BLK'];
    
            primaryWeapons = ['AK-12 Smuggled', 'M4A1 NAVY Seal', 'ACR CQB', 'MK-17 CQC', 'MK-17 CQB',];
            sniperWeapons = ['SR25 Sport', 'MK14 Sport', ];
        break;
    
        case 'Blackwater C':
            headProtection = ['FAST-MT Coyote'];
            faceProtection = ['Two-Holes Balaclava BLK'];
            glasses = ['None'];
            headphones = ['Headset C BLK'];
            bodyTop = ['Long Sleeve Shirt Stripes 2',];
            bodyDown = ['Jeans B'];
            bodyProtection = ['5.11® Tactec Plate Carrier BLK'];
            handProtection = ['Executioner'];
            backpacks = ['5.11® Rush72 A-TACS FG'];
    
            primaryWeapons = ['AK-12 Smuggled', 'M4A1 NAVY Seal', 'ACR CQB', 'MK-17 CQC', 'MK-17 CQB',];
            sniperWeapons = ['SR25 Sport', 'MK14 Sport',];
        break;
    
        //blackwater
    
        case 'Ghost Recon A':
            headProtection = ['Nomad Cap'];
            faceProtection = ['None']
            glasses = ['Oakley SI Straight Jacket'];
            headphones = ['Headset C Olive'];
            bodyTop = ['T-Shirt Red',];
            bodyDown = ['Cargo A Coyote'];
            bodyProtection = ['5.11® VTAC LBE Tactical Vest MC Tropic'];
            handProtection = ['Oakley Pilot Tan'];
            backpacks = ['Drone A-TACS LE'];
    
            primaryWeapons = ['P416 Ghost Recon', 'Stoner LMG A1 Ghost Recon', 'ACR CQC', '805 Bren A2 CQC', 'M4A1 NAVY Seal'];
            sniperWeapons = ['SR25 Sport', 'MK14 Sport',];
        break;
    
        case 'Ghost Recon B':
            headProtection = ['None'];
            faceProtection = ['None']
            glasses = ['None'];
            headphones = ['Headset A Olive'];
            bodyTop = ['Long Sleeve Shirt Stripes 6',];
            bodyDown = ['5.11® Apex A BLK'];
            bodyProtection = ['Molle Harness BLK'];
            handProtection = ['None'];
            backpacks = ['Sapper Backpack BLK'];
    
            primaryWeapons = ['P416 Ghost Recon', 'Stoner LMG A1 Ghost Recon', 'ACR CQC', '805 Bren A2 CQC', 'M4A1 NAVY Seal'];
            sniperWeapons = ['SR25 Sport', 'MK14 Sport',];
        break;

        case 'Ghost Recon sxsxsxsxtxnshi':
            headProtection = ['Nomad Cap'];
            faceProtection = ['One-Hole Balaclava']
            glasses = ['None'];
            headphones = ['Headset A Coyote'];
            bodyTop = ['Striped Hoodie BLK',];
            bodyDown = ['Crye Precision Combat Coyote'];
            bodyProtection = ['5.11® Tactec Plate Carrier Coyote'];
            handProtection = ['Nomex® Gloves BLK'];
            backpacks = ['CamelBak® Coyote'];

            primaryWeapons = ['805 Bren A2 sxsxsxsxtxnshi',];
            sniperWeapons = ['G28 Tan sxsxsxsxtxnshi'];
        break;
    
        case 'Field Recon A':
            headProtection = ['Hat A-TACS AU'];
            faceProtection = ['One-Hole Balaclava BLK'];
            glasses = ['None'];
            headphones = ['None'];
            bodyTop = ['Fleece BLK',];
            bodyDown = ['Crye Precision Combat A-TACS AU'];
            bodyProtection = ['Molle Harness A-TACS AU'];
            handProtection = ['Nomex® Gloves BLK'];
            backpacks = ['CamelBak® A-TACS AU'];
    
            primaryWeapons = ['SR-3M FSB', '9x19 VSN FSB', '6P41 Field Recon',];
            sniperWeapons = ['Dragunov (SVD) Field Recon', 'Dragunov (SVD) FSB',];
        break;
    };
    
    var getBodyTop = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyTop[result]
    };
    
    var getBodyDown = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyDown[result]
    };
    
    var getCarrier = function(max) {
        var result = Math.round(Math.random() * max);
        return bodyProtection[result]
    };
    
    var getHelmet = function(max) {
        var result = Math.round(Math.random() * max);
        return headProtection[result]
    };
    
    var getMask = function(max) {
        var result = Math.round(Math.random() * max);
        return faceProtection[result]
    };
    
    var getGlasses = function(max) {
        var result = Math.round(Math.random() * max);
        return glasses[result]
    };
    
    var getHeadphones = function(max) {
        var result = Math.round(Math.random() * max);
        return headphones[result]
    };
    
    var getHandwear = function(max) {
        var result = Math.round(Math.random() * max);
        return handProtection[result]
    };
    
    var getBackpack= function(max) {
        var result = Math.round(Math.random() * max);
        return backpacks[result]
    };
    
    var getNightvision = function(max) {
        var result = Math.round(Math.random() * max);
        return nightvision[result]
    };

    var getPrimaryWeapon = function(max) {
        var result = Math.round(Math.random() * max);
        return primaryWeapons[result]
    };
    var gettedPrimary = getPrimaryWeapon(primaryWeapons.length - 1);
    //generated assault rifle
    
    var getSniperRifle = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperWeapons[result]
    };
    var gettedSecond = getSniperRifle(sniperWeapons.length - 1);
    //generated sniper rifle

    var getHelpGun = function(max) {
        var result = Math.round(Math.random() * max);
        return helpGuns[result]
    };

    var gettedHelp = getHelpGun(helpGuns.length - 1);
    //generated pistol
    
    rifleScopes = rifleScopesBefore;
    if (gettedPrimary === 'MK-17' || gettedPrimary === 'ACR' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'M4A1' || gettedPrimary === 'AK-47' || gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'AK-12' || gettedPrimary === '556xi' || gettedPrimary === 'SR-3M' || gettedPrimary === 'P416' || gettedPrimary === 'R5-RGP') {
        rifleScopes = ['Russian Red Dot & G33','EXPS & G33', 'Micro T-1 & G33','TA31H',];
    };
    
    if (gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'Mk249' || gettedPrimary === 'MK-48' || gettedPrimary === '6P41') {
        rifleScopes = ['Polymer Iron Sight', 'Russian Red Dot', 'EXPS3', 'Panoramic Sight', 'Micro T-1',];
    };
    //scopes

    rifleGrips = rifleGripsBefore;
    if (gettedPrimary === 'AK-47') {
        rifleGrips = ['Rail Cover', 'GP25 GL'];
    };

    if (gettedPrimary === 'SR-3M') {
        rifleGrips = ['GP25 GL', 'Foregrip',];
    };
    
    if (gettedPrimary === 'Kriss Vector .45 ACP' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'UMP-45' || gettedPrimary === 'PSG' || gettedPrimary === 'SR-635' || gettedPrimary === '6P41' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249') {
        rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'AFG',];
    };

    if (gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3',];
    };
    
    if (gettedPrimary === 'MDR') {
        rifleGrips = ['Rail Cover', 'Shift Short Angled Grip', 'Vertical Forgrip V4', 'Vertical Forgrip V2', 'Vertical Forgrip', 'Vertical Forgrip V3', 'Std Grenade Launcher',];
    };
    //rifle grips

    secondGunGrip.classList.add('hidden');
    if (gettedSecond === 'SR25' || gettedSecond === 'G28' || gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'MK14') {
        secondGunGrip.classList.remove('hidden');
    };
    //sniper grips
    //grips 

    rifleLasers = rifleLasersBefore; 
    if (gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249' || gettedPrimary === '6P41' || gettedPrimary === 'SR-635' || gettedPrimary === 'MP7' || gettedPrimary === 'PSG' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'UMP-45') {
        rifleLasers = ['Rail Cover', 'ATIPAL Laser Sight', 'Laser 3Dot',];
    };
    //primary lasers

    secondGunLaser.classList.remove('hidden');
    if (gettedSecond === 'L115A3' || gettedSecond === 'MSR' || gettedSecond === 'HTI' || gettedSecond === 'SRSA1' || gettedSecond === 'SR-1' || gettedSecond === 'M40A5') {
        //sniperLasers = sniperLasersBefore;
        secondGunLaser.classList.add('hidden');
    };
    //sniper lasers
    //lasers

    rifleMagazines = rifleMagazinesBefore;
    if (gettedPrimary === 'MK-17' || gettedPrimary === 'SR-3M' || gettedPrimary === 'SR-635' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'PSG' || gettedPrimary === 'MP7') {
        rifleMagazines = ['Standard (20)', 'Extended (30)',];
    };

    if (gettedPrimary === 'UMP-45') {
        rifleMagazines = ['Standard (25)',];
    };

    if (gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleMagazines = ['Standard (15)','Extended (25)',];
    };

    if (gettedPrimary === 'Stoner LMG A1') {
        rifleMagazines = ['Standard (100)',];
    };

    if (gettedPrimary === 'MK-48') {
        rifleMagazines = ['Standard (100)', 'Extended (200)',];
    };

    if (gettedPrimary === 'Mk249') {
        rifleMagazines = ['Standard (150)',];
    };

    primaryGunGrip.classList.remove('hidden');
    if (gettedPrimary === '6P41') {
        primaryGunGrip.classList.add('hidden');
        //grip
        rifleMagazines = ['Standard (175)',];
    };
    //rifle magazines

    sniperMagazines = sniperMagazinesBefore;
    if (gettedSecond === 'MSR' || gettedSecond === 'HTI' || gettedSecond === 'SR-1' || gettedSecond === 'SRSA1') {
        sniperMagazines = ['Standard (5)', 'Extended (10)',];
    };
    //sniper magazines

    helpMagazines = helpMagazinesBefore;
    switch (gettedHelp) {
        case 'P45T':
            helpMagazines = ['Standard (15)', 'Extended (20)']
        break;
        
        case 'M9':
            helpMagazines = ['Standard (15)', 'Extended (25)']
        break;
        
        case 'M1911':
            helpMagazines = ['Standard (8)', 'Extended (15)']
        break;
        
        case 'P12':
            helpMagazines = ['Standard (12)', 'Extended (20)']
        break; 
    
        case 'P227':
            helpMagazines = ['Standard (10)', 'Extended (15)']
        break;

        case '5.7 USG':
            helpMagazines = ['Standard (20)', 'Extended (30)']
        break;
    };
    //rifle/sniper magazines

    rifleBarrels = rifleBarrelsBefore;

    if (gettedPrimary === 'SR-3M' || gettedPrimary === 'AK-12' || gettedPrimary === 'R5-RGP' || gettedPrimary === 'M4A1' || gettedPrimary === 'MDR' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === '6P41' || gettedPrimary === 'MK-48' || gettedPrimary === 'Mk249' || gettedPrimary === 'PSG' || gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleBarrels = ['Long Barrel',];
    };

    if (gettedPrimary === 'P416' || gettedPrimary === 'G2' || gettedPrimary === 'SR-635' || gettedPrimary === 'L85A2' ) {
        rifleBarrels = ['Short Barrel',];
    };

    if (gettedPrimary === '556xi' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'AK-47' || gettedPrimary === 'MK-17' || gettedPrimary === 'ACR') {
        rifleBarrels = ['Short Barrel','Long Barrel',];
    };
    //rifle barrels
    sniperBarrels = sniperBarrelsBefore;

    if (gettedSecond === 'G28' || gettedSecond === 'SR-1' || gettedSecond === 'HTI' || gettedSecond === 'SRSA1' || gettedSecond === 'L115A3' || gettedSecond === 'MK14') {
        sniperBarrels = ['Long Barrel',];
    };

    if (gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'SR25') {
        sniperBarrels = ['Short Barrel',];
    };

    if (gettedSecond === 'M40A5' || gettedSecond === 'MSR') {
        sniperBarrels = ['Short Barrel','Long Barrel',];
    };
    //sniper barrels

    //rifle/sniper barrels
    
    rifleMuzzles = rifleMuzzlesBefore;
    if (gettedPrimary === 'MK-17' || gettedPrimary === 'R5-RGP' || gettedPrimary === 'ACR' || gettedPrimary === 'MDR' || gettedPrimary === 'P416' || gettedPrimary === '805 Bren A2' || gettedPrimary === 'M4A1' || gettedPrimary === 'AK-47' || gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'AK-12' || gettedPrimary === '556xi' || gettedPrimary === 'Stoner LMG A1' || gettedPrimary === 'SR-3M') {
        rifleMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator', 'Compensator V2',];
    };

    if (gettedPrimary === 'MP7' || gettedPrimary === 'SR-635' || gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator',];
    };

    if (gettedPrimary === '6P41' || gettedPrimary === 'Mk249') {
        rifleMuzzles = ['Stock Muzzle', 'Compensator', 'Compensator V2',];
    };

    if (gettedPrimary === 'MK-48') {
        rifleMuzzles = ['Stock Muzzle', 'Compensator V2',];
    };
    //rifle muzzles
    
    sniperMuzzles = sniperMuzzlesBefore;
    if (gettedSecond === 'Dragunov (SVD)' || gettedSecond === 'G28' || gettedSecond === 'MK14') {
        sniperMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator', 'Compensator V2',];
    };

    if (gettedSecond === 'M40A5' || gettedSecond === 'SR25') {
        sniperMuzzles = ['Stock Muzzle', 'Supressor', 'Compensator V2',];
    };
    //sniper muzzles
    
    //muzzles

    rifleButtstocks = rifleButtstocksBefore;
    primaryGunButtstock.classList.remove('hidden');

    if (gettedPrimary === 'UMP-45' || gettedPrimary === 'MP7' || gettedPrimary === '9x19 VSN' || gettedPrimary === 'SR-635' || gettedPrimary === 'SR-3M' || gettedPrimary === 'AK-12' || gettedPrimary === 'Stoner LMG A1') {
        rifleButtstocks = ['Extended Buttstock', 'Folded Buttstock',];
    };

    if (gettedPrimary === '556xi' || gettedPrimary === '805 Bren A2') {
        rifleButtstocks = ['Stock Buttstock', 'Short Stock',];
    };

    if (gettedPrimary === 'AK-47' || gettedPrimary === 'ACR' || gettedPrimary === 'Kriss Vector .45 ACP') {
        rifleButtstocks = ['Stock Buttstock', 'Extended Buttstock','Folded Buttstock',];
    };

    if (gettedPrimary === 'MK-17') {
        rifleButtstocks = ['Extended Buttstock','Folded Buttstock','Compensated Buttstock',];
    };

    if (gettedPrimary === 'G2' || gettedPrimary === 'L85A2' || gettedPrimary === 'MDR' || gettedPrimary === 'MDR Black Division' || gettedPrimary === 'MDR Bravo-Six') {
        primaryGunButtstock.classList.add('hidden');
    };
    //primaryButtstocks

    sniperButtstocks = sniperButtstocksBefore;
    secondGunButtstock.classList.remove('hidden');
    if (gettedSecond === 'M14') {
        sniperButtstocks = ['Extended Buttstock','Folded Buttstock',];
    };

    if (gettedSecond === 'SR25' || gettedSecond === 'Dragunov (SVD)') {
        sniperButtstocks = ['Compensated Buttstock',];
    };

    if (gettedSecond === 'M40A5' || gettedSecond === 'SRSA1' || gettedSecond === 'HTI') {
        secondGunButtstock.classList.add('hidden');
    };
    //secondButtstocks

    
    //help magazines

    switch (gettedPrimary) {
        case 'R5-RGP Black Division':
            rifleScopes = ['Digital Scope Tan'];
            rifleGrips = ['AFG Tan'];
            rifleLasers = ['ATIPAL Laser Sight Tan'];
            rifleMagazines = ['Extended (30) Tan'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor Tan'];
            rifleButtstocks = ['Stock Buttstock Tan']; 
        break;

        case 'R5-RGP CQC':
            rifleScopes = ['RUS Red Dot & G33'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];
        break;

        case 'R5-RGP CQB':
            rifleScopes = ['Micro T-1'];
            rifleGrips = ['Rail Cover'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Stock Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;
        //r5-rgp

        case 'P416 Ghost Recon':
            rifleScopes = ['EXPS3 Tan & G33'];
            rifleGrips = ['AFG Tan'];
            rifleLasers = ['ATIPAL Laser Sight Tan'];
            rifleMagazines = ['Extended (30) Tan'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Supressor Tan'];
            rifleButtstocks = ['Stock Buttstock Tan']; 
        break;

        case 'P416 CQB':
            rifleScopes = ['Micro T-1'];
            rifleGrips = ['AFG'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Stock Buttstock'];
        break;
        
        case 'P416 Black Division':
            rifleScopes = ['Micro T-1 & G33'];
            rifleGrips = ['AFG'];
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Stockk Buttstock'];
        break;

        //p416

        case 'MK-17 Black Division':
            rifleScopes = ['Micro T-1 & G33'];
            rifleGrips = ['AFG'];
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];
        break;

        case 'MK-17 CQC':
            rifleScopes = ['EXPS3 & G33'];
            rifleGrips = ['AFG'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Standard (20)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];
        break;

        case 'MK-17 CQB':
            rifleScopes = ['CompM4'];
            rifleGrips = ['AFG'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Standard (20)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];  
        break;

        //mk-17

        case '805 Bren A2 sxsxsxsxtxnshi':
            rifleScopes = ['EXPS3'];
            rifleGrips = ['AFG'];
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Stock Buttstock'];
        break;
        
        case '805 Bren A2 Black Division':
            rifleScopes = ['EXPS3 & G33'];
            rifleGrips = ['AFG'];
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Stock Buttstock'];
        break;

        case '805 Bren A2 CQC':
            rifleScopes = ['Micro T-1 & G33'];
            rifleGrips = ['AFG'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;

        case '805 A2 Bren CQB':
            rifleScopes = ['EXPS3'];
            rifleGrips = ['AFG'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Stock Buttstock'];
        break;
        
        //805 bren a2

        case 'ACR Black Division':
            rifleScopes = ['Micro T-1'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;

        case 'ACR CQC':
            rifleScopes = ['Digital Scope'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];  
        break;

        case 'ACR CQB':
            rifleScopes = ['Micro T-1'];
            rifleGrips = ['AFG'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Extended Buttstock'];
        break;

        //acr

        case 'SR-3M FSB':
            rifleScopes = ['PK-AS'];
            rifleGrips = ['Foregrip'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];  
        break;

        //sr-3m

        case 'MDR Black Division':
            rifleScopes = ['EXPS3 & G33'];
            rifleGrips = ['Foregrip V4'];
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
        break;

        case 'MDR Bravo-Six':
            rifleScopes = ['EXPS3'];
            rifleGrips = ['Foregrip V4'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
        break;
        
        //mdr

        case 'M4A1 Black Division':
            rifleScopes = ['EXPS3 & G33'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['Laser 3Dot'];
            rifleMagazines = ['Large (50)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;


        case 'M4A1 NAVY Seal':
            rifleScopes = ['EXPS3'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;

        //m4a1

        case 'AK-12 Smuggled':
            rifleScopes = ['TA31H'];
            rifleGrips = ['GP25 GL'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Compensator'];
            rifleButtstocks = ['Extended Buttstock'];  
        break;

        //ak12
        
        case 'AK-47 Kataris26 (MC Tropic)':
            rifleScopes = ['Stock Iron Sight'];
            rifleGrips = ['GP25 GL'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Stock Muzzle'];
            rifleButtstocks = ['Stock Buttstock'];
        break;

        //ak47

        case '9x19 VSN FSB':
            rifleScopes = ['Russian Red Dot'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['Laser 3Dot'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];  
        break;

        //9x19 vsn

        case '556xi Hidden':
            rifleScopes = ['Polymer BUIS'];
            rifleGrips = ['Rail Cover'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (30)'];
            rifleBarrels = ['Short Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Short Stock'];  
        break;

        //556xi

        case 'Stoner LMG A1 Ghost Recon':
            rifleScopes = ['Micto T-1'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Standard (100)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Supressor'];
            rifleButtstocks = ['Extended Buttstock'];  
        break;

        //stoner lmg a1

        case 'MK-48 NAVY Seal':
            rifleScopes = ['EXPS3'];
            rifleGrips = ['Rail Cover'];
            rifleLasers = ['Rail Cover'];
            rifleMagazines = ['Extended (200)'];
            rifleBarrels = ['Long Barrel'];
            rifleMuzzles = ['Stock Muzzle'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;

        case 'MK-48 Bravo-Six':
            rifleScopes = ['EXPS3'];
            rifleGrips = ['Foregrip V2'];
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Extended (200)'];
            rifleBarrels = ['Long Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;

        //mk-48

        case '6P41 Field Recon':
            rifleScopes = ['EXPS3'];
            rifleGrips = ['AFG'];
            primaryGunGrip.classList.add('hidden');
            rifleLasers = ['ATIPAL Laser Sight'];
            rifleMagazines = ['Standard (175)'];
            rifleBarrels = ['Standard Barrel'];
            rifleMuzzles = ['Compensator V2'];
            rifleButtstocks = ['Stock Buttstock'];  
        break;

        //6p41
    };//primary kits
    switch (gettedSecond) {
        case 'G28 Tan sxsxsxsxtxnshi':
            sniperScopes = ['PKS-07 BLK'];
            sniperGrips = ['AFG BLK'];
            sniperLasers = ['ATIPAL Laser Sight BLK'];
            sniperMagazines = ['Extended (20) BLK'];
            sniperBarrels = ['Long Barrel BLK'];
            sniperMuzzles = ['Compensator V1 BLK'];
            sniperButtstocks = ['Stock Buttstock BLK'];  
        break;

        case 'G28 Black Division':
            sniperScopes = ['Digital Scope'];
            sniperGrips = ['AFG'];
            sniperLasers = ['ATIPAL Laser Sight'];
            sniperMagazines = ['Extended (20)'];
            sniperBarrels = ['Standard Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Stock Buttstock'];  
        break; 

        case 'G28 Bravo-Six':
            sniperScopes = ['TARS101'];
            sniperGrips = ['Rail cover'];
            sniperLasers = ['Rail cover'];
            sniperMagazines = ['Standard (10)'];
            sniperBarrels = ['Long Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Stock Buttstock'];  
        break; 

        //g28

        case 'SR25 Black Division':
            sniperScopes = ['Digital Scope'];
            sniperGrips = ['AFG'];
            sniperLasers = ['ATIPAL Laser Sight'];
            sniperMagazines = ['Extended (20)'];
            sniperBarrels = ['Short Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Compensated Buttstock'];  
        break;

        case 'SR25 Bravo-Six':
            sniperScopes = ['POSP'];
            sniperGrips = ['Rail Cover'];
            sniperLasers = ['Rail Cover'];
            sniperMagazines = ['Extended (10)'];
            sniperBarrels = ['Standard Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Compensated Buttstock'];  
        break;

        case 'SR25 Sport':
            sniperScopes = ['TA31H'];
            sniperGrips = ['Rail Cover'];
            sniperLasers = ['Rail Cover'];
            sniperMagazines = ['Extended (20)'];
            sniperBarrels = ['Short Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Compensated Buttstock'];  
        break;

        //sr25

        case 'MK14 Sport':
            sniperScopes = ['PKS-07'];
            sniperGrips = ['Rail Cover'];
            sniperLasers = ['Rail Cover'];
            sniperMagazines = ['Extended (20)'];
            sniperBarrels = ['Long Barrel'];
            sniperMuzzles = ['Compensator V2'];
            sniperButtstocks = ['Extended Buttstock'];  
        break;    

        //mk14
        
        case 'SR-1 Black Division':
            sniperScopes = ['Digital Scope'];
            secondGunGrip.classList.add('hidden');
            secondGunLaser.classList.add('hidden');
            sniperMagazines = ['Extended (10)'];
            sniperBarrels = ['Standard Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Stock Buttstock'];  
        break; 

        case 'SR-1 Bravo-Six':
            sniperScopes = ['T5Xi Tactical'];
            secondGunGrip.classList.add('hidden');
            secondGunLaser.classList.add('hidden');
            sniperMagazines = ['Extended (10)'];
            sniperBarrels = ['Standard Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Stock Buttstock'];  
        break; 

        //sr-1

        case 'SRSA1 Black Division':
            sniperScopes = ['Digital Scope'];
            sniperGrips = ['Foregrip V4'];
            secondGunLaser.classList.add('hidden');
            sniperMagazines = ['Extended (20)'];
            sniperBarrels = ['Long Barrel'];
            sniperMuzzles = ['Supressor'];
            secondGunButtstock.classList.add('hidden');
        break; 

        //srsa1

        case 'MK-17 Marksman': 
            sniperScopes = ['TA31H'];
            sniperGrips = ['Rail Cover'];
            sniperLasers = ['ATIPAL Laser Sight'];
            sniperMagazines = ['Standard (20)'];
            sniperBarrels = ['Long Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Compensated Buttstock'];
        break;

        //mk-17

        case 'Dragunov (SVD) Field Recon': 
            sniperScopes = ['POSP'];
            secondGunGrip.classList.add('hidden');
            sniperLasers = ['Rail Cover'];
            sniperMagazines = ['Standard (10)'];
            sniperBarrels = ['Stock Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Stock Buttstock'];
        break;

        case 'Dragunov (SVD) FSB': 
            sniperScopes = ['Digital scope'];
            secondGunGrip.classList.add('hidden');
            sniperLasers = ['ATIPAL Laser Sight'];
            sniperMagazines = ['Extended (20)'];
            sniperBarrels = ['Short Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Compensated Buttstock'];
        break;

        //dragunov (svd)

        case 'MSR Bravo-Six': 
            sniperScopes = ['T5Xi Tactical'];
            secondGunGrip.classList.add('hidden');
            secondGunLaser.classList.add('hidden');
            sniperMagazines = ['Standard (5)'];
            sniperBarrels = ['Long Barrel'];
            sniperMuzzles = ['Supressor'];
            sniperButtstocks = ['Stock Buttstock'];
        break;
        
        //msr
    };//second kits
    //gun kits

    var getRifleScope = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleScopes[result]
    };
    
    var getRifleGrip = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleGrips[result]
    };
    
    var getRifleLaser = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleLasers[result]
    };
    
    var getRifleMagazine = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleMagazines[result]
    };
    
    var getRifleBarrel = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleBarrels[result]
    };
    
    var getRifleMuzzle = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleMuzzles[result]
    };
    
    var getRifleButtstock = function(max) {
        var result = Math.round(Math.random() * max);
        return rifleButtstocks[result]
    };
    //generating primary rifle modules
    
    var getSniperScope = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperScopes[result]
    };

    var getSniperGrip = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperGrips[result]
    };

    var getSniperLaser = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperLasers[result]
    };
    
    var getSniperMagazine = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperMagazines[result]
    };

    var getSniperBarrel = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperBarrels[result]
    };

    var getSniperMuzzle = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperMuzzles[result]
    };
    
    var getSniperButtstock = function(max) {
        var result = Math.round(Math.random() * max);
        return sniperButtstocks[result]
    };
    //generating sniper rifle modules

    var getHelpMagazine = function(max) {
        var result = Math.round(Math.random() * max);
        return helpMagazines[result]
    };

    var getHelpLaser = function(max) {
        var result = Math.round(Math.random() * max);
        return helpLasers[result]
    };

    var getHelpBarrel = function(max) {
        var result = Math.round(Math.random() * max);
        return helpBarrels[result]
    };

    var getHelpMuzzle = function(max) {
        var result = Math.round(Math.random() * max);
        return helpMuzzles[result]
    };

    //generating help gun modules
    locationParent.textContent = `Location: ${getRegion(regions.length - 1)}`;
    taskParent.textContent = `Task: ${task}`;

    hudParent.classList.add('hidden');
    if (hud.classList.contains('active')) {
        hudParent.classList.remove('hidden');
        hudParent.textContent = `HUD: ${getHud(hudOnOff.length - 1)}`;    
    }/*if hud checkbox contains "active" TRUE*/

    armorParent.classList.remove('hidden');
    headwearParent.classList.remove('hidden');
    facemaskParent.classList.remove('hidden');
    glassesParent.classList.remove('hidden')
    headphonesParent.classList.remove('hidden');
    handwearParent.classList.remove('hidden');
    backpackParent.classList.remove('hidden');
    primaryGunParent.classList.remove('hidden');
    secondGunParent.classList.remove('hidden');

    nightVisionParent.classList.add('hidden');

    if (gettedTime === 'Evening' || gettedTime === 'Night') {
        nightVisionParent.classList.remove('hidden');
        nightVisionParent.textContent = `Nightvision: ${getNightvision(nightvision.length - 1)}`;    
    };/*if gettedTime === Evening || Night TRUE*/

    if (taskParent.textContent === 'Task: Recon (city)') {
        armorParent.classList.add('hidden');
        headwearParent.classList.add('hidden');
        facemaskParent.classList.add('hidden');
        glassesParent.classList.add('hidden')
        headphonesParent.classList.add('hidden');
        handwearParent.classList.add('hidden');
        backpackParent.classList.add('hidden');
        nightVisionParent.classList.add('hidden');
        primaryGunParent.classList.add('hidden');
        secondGunParent.classList.add('hidden');

        if (guns.classList.contains('active')) {
            helpGunParent.classList.remove('hidden');
            helpGunName.classList.remove('hidden');
            helpGunName.textContent = `Pistol: ${gettedHelp}`;    
            if (modules.classList.contains('active')) {
                for (let e of generatingModules) {
                    e.classList.remove('hidden');
                };

                helpGunMagazine.textContent = `Magazine: ${getHelpMagazine(helpMagazines.length - 1)}`;
                helpGunLaser.textContent = `Lasers: ${getHelpLaser(helpLasers.length - 1)}`;
                helpGunBarrel.textContent = `Barrel: ${getHelpBarrel(helpBarrels.length - 1)}`;
                helpGunMuzzle.textContent = `Muzzle: ${getHelpMuzzle(helpMuzzles.length - 1)}`;
            };
        };/*if guns checkbox contains class "active" TRUE*/
    };/*if task === Recon (City) TRUE*/

    coordinatesParent.textContent = `Coordinates: ${getCoordinates(taskIn.length - 1)}`;
    timeParent.textContent = `Time: ${gettedTime}`;
    transportParent.textContent = `Allowed Transport: ${getTransport(transport.length - 1)}`;
    clothingParent.textContent = `Type of clothes: ${gettedClothing}`;
    bodyTopParent.textContent = `Body Top: ${getBodyTop(bodyTop.length - 1)}`;
    bodyDownParent.textContent = `Body Down: ${getBodyDown(bodyDown.length - 1)}`;
    armorParent.textContent = `Armor: ${getCarrier(bodyProtection.length - 1)}`;
    headwearParent.textContent = `Headwear: ${getHelmet(headProtection.length - 1)}`;
    facemaskParent.textContent = `Facemask: ${getMask(faceProtection.length - 1)}`;
    glassesParent.textContent = `Glasses: ${getGlasses(glasses.length - 1)}`;
    headphonesParent.textContent = `Headphones: ${getHeadphones(headphones.length - 1)}`;
    handwearParent.textContent = `Handwear: ${getHandwear(handProtection.length - 1)}`;
    backpackParent.textContent = `Backpack: ${getBackpack(backpacks.length - 1)}`;
    //gear

    generatingGuns.classList.add('hidden');
    if (guns.classList.contains('active')) {
        generatingGuns.classList.remove('hidden');
        primaryGunName.textContent = `Primary Weapon: ${gettedPrimary}`;
        secondGunName.textContent = `Second Weapon: ${gettedSecond}`;
        helpGunName.textContent = `Pistol: ${gettedHelp}`; 

        if (taskParent.textContent === 'Task: Recon (city)') {
            helpGunParent.classList.remove('hidden');
            helpGunName.classList.remove('hidden');  
        };

        //guns 
        for (let e of generatingModules) {
            e.classList.add('hidden');
        }; 

        if (modules.classList.contains('active')) {
            for (let e of generatingModules) {
                e.classList.remove('hidden');
            };
            
            primaryGunScope.textContent = `Scope: ${getRifleScope(rifleScopes.length - 1)}`;
            primaryGunGrip.textContent = `Grip: ${getRifleGrip(rifleGrips.length - 1)}`;
            primaryGunLaser.textContent = `Laser: ${getRifleLaser(rifleLasers.length - 1)}`;
            primaryGunMagazine.textContent = `Magazine: ${getRifleMagazine(rifleMagazines.length - 1)}`;
            primaryGunBarrel.textContent = `Barrel: ${getRifleBarrel(rifleBarrels.length - 1)}`;
            primaryGunMuzzle.textContent = `Muzzle: ${getRifleMuzzle(rifleMuzzles.length - 1)}`;
            primaryGunButtstock.textContent = `Buttstock: ${getRifleButtstock(rifleButtstocks.length - 1)}`;
            //primaryGun

            secondGunScope.textContent = `Scope: ${getSniperScope(sniperScopes.length - 1)}`;
            secondGunGrip.textContent = `Grip: ${getSniperGrip(sniperGrips.length - 1)}`;
            secondGunMagazine.textContent = `Magazine: ${getSniperMagazine(sniperMagazines.length - 1)}`;
            secondGunLaser.textContent = `Laser: ${getSniperLaser(sniperLasers.length - 1)}`;
            secondGunBarrel.textContent = `Barrel: ${getSniperBarrel(sniperBarrels.length - 1)}`;
            secondGunMuzzle.textContent = `Muzzle: ${getSniperMuzzle(sniperMuzzles.length - 1)}`;
            secondGunButtstock.textContent = `Buttstock: ${getSniperButtstock(sniperButtstocks.length - 1)}`;  
            //secondGun  

               
            helpGunMagazine.textContent = `Magazine: ${getHelpMagazine(helpMagazines.length - 1)}`;
            helpGunLaser.textContent = `Lasers: ${getHelpLaser(helpLasers.length - 1)}`;
            helpGunBarrel.textContent = `Barrel: ${getHelpBarrel(helpBarrels.length - 1)}`;
            helpGunMuzzle.textContent = `Muzzle: ${getHelpMuzzle(helpMuzzles.length - 1)}`;
        };
    }
    if (gettedPrimary === 'MP7') {
        primaryGunGrip.classList.add('hidden');
    };
};
//Commit#6, final commit as i think. Enjoy :)