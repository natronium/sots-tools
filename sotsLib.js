const npcs = {
    tutorial : {"npcs.tutorial": 1},
    elias : {"npcs.elias": 2},
    samuel : {"npcs.samuel": 3},
    masha : {"npcs.masha": 4},
    isabella : {"npcs.isabella": 5},
    alexis : {"npcs.alexis": 6},
    ramir : {"npcs.ramir": 7},
    miriam : {"npcs.miriam": 8},
    theo : {"npcs.theo": 9},
    airat : {"npcs.airat": 10},
    maya : {"npcs.maya": 11},
    oscar : {"npcs.oscar": 12},
    tosuto : {"npcs.tosuto": 13},
    haruto : {"npcs.haruto": 14},
    talia : {"npcs.talia": 15},
    tariq : {"npcs.tariq": 16},
    nadine : {"npcs.nadine": 17},
    dog : {"npcs.dog": 18},
    lars : {"npcs.lars": 19},
    bigbasilio : {"npcs.bigbasilio": 20},
    deion : {"npcs.deion": 21},
    klaus : {"npcs.klaus": 22},
    lilbasilio : {"npcs.lilbasilio": 23},
    marques : {"npcs.marques": 24},
    mimi : {"npcs.mimi": 25},
    ophelia : {"npcs.ophelia": 26},
    salem : {"npcs.salem": 27},
    gull : {"npcs.gull": 28},
    tomas : {"npcs.tomas": 29},
    xn220 : {"npcs.xn220": 30},
    aurora : {"npcs.aurora": 31},
    matilde : {"npcs.matilde": 32},
    diva : {"npcs.diva": 33},
    riddler : {"npcs.riddler": 34},
    seaman : {"npcs.seaman": 35},
    stranger : {"npcs.stranger": 36},
    eremite : {"npcs.eremite": 37},
    newcomer : {"npcs.newcomer": 38},
    elias_adult : {"npcs.elias_adult": 39},
    paramour : {"npcs.paramour": 40}
    }

const locations = {
    aldhurst : {"locations.aldhurst": 1},
    anka : {"locations.anka": 2},
    bukam_boro : {"locations.bukam_boro": 3},
    clifton : {"locations.clifton": 4},
    desert_oasis : {"locations.desert_oasis": 5},
    gray_cambet : {"locations.gray_cambet": 6},
    hara : {"locations.hara": 7},
    home : {"locations.home": 8},
    home_past : {"locations.home_past": 9},
    long_gate : {"locations.long_gate": 10},
    oasis_gardens : {"locations.oasis_gardens": 11},
    old_marae : {"locations.old_marae": 12},
    pachenco : {"locations.pachenco": 13},
    persarrey : {"locations.persarrey": 14},
    rimina : {"locations.rimina": 15},
    tosende_canals : {"locations.tosende_canals": 16},
    store : {"locations.store": 17},
    wave_dancer : {"locations.wave_dancer": 18}
}

function xorCodec(buffer){
    const key = 'wow this is a nice key';
    return buffer.map((e, i, arr) =>  e ^ key.charCodeAt(i % key.length));
}

function saveBlobLink(elementId, blob, filename, message){
const link = document.getElementById(elementId);
link.href = URL.createObjectURL(blob);
link.download = filename;
link.text = message;
return link; //in case we want to do something with it later, like click it
}