/// <reference path="../node_modules/factorio-types/index.d.ts" />

function removePrerequisite(techName: string, prerequisite: string) {
    let technology = data.raw.technology[techName];
    if(technology) {
        for(const [index, name] of pairs(technology.prerequisites)) {
            if(name === prerequisite) {
                table.remove(technology.prerequisites, index as number);
            }
        }
    }
}

type sciencePackIngredient = [string, number];

function removeMilitaryScience(techName: string) {
    let technology = data.raw.technology[techName];

    if(technology) {
        for(const [index, ingredient] of pairs(technology.unit.ingredients)) {
            if((ingredient as sciencePackIngredient)[0] === 'military-science-pack')  {
                table.remove(technology.unit.ingredients, index as number)
            }
        }
    }
}

removeMilitaryScience('power-armor-mk2');
removePrerequisite('power-armor-mk2', 'military-4');

removeMilitaryScience('fusion-reactor-equipment');
removePrerequisite('fusion-reactor-equipment', 'military-science-pack');

removeMilitaryScience('spidertron');
removePrerequisite('spidertron', 'military-4');

if(mods['bobequipment']) {
    removeMilitaryScience('fusion-reactor-equipment-3');
    removeMilitaryScience('fusion-reactor-equipment-4');
}

if(mods['bobwarfare']) {
    removeMilitaryScience('bob-power-armor-3');
    removeMilitaryScience('bob-power-armor-4');
    removeMilitaryScience('bob-power-armor-5');

    removePrerequisite('radars-3', 'military-3');
    removePrerequisite('radars-5', 'military-4');

    removeMilitaryScience('walking-vehicle');
    removePrerequisite('walking-vehicle', 'military-3');
    removeMilitaryScience('tankotron');
    removePrerequisite('tankotron', 'tank');
    removeMilitaryScience('logistic-spidertron');
    removeMilitaryScience('heavy-spidertron');
}