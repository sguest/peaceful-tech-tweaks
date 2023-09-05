/// <reference path="../node_modules/factorio-types/index.d.ts" />

export {};

data.raw.technology['power-armor-mk2'].unit.ingredients = [
    ['automation-science-pack', 1],
    ['logistic-science-pack', 1],
    ['chemical-science-pack', 1],
    ['utility-science-pack', 1],
];

data.raw.technology['power-armor-mk2'].prerequisites = [
    'power-armor',
    'effectivity-module-2',
    'speed-module-2',
];

data.raw.technology['fusion-reactor-equipment'].unit.ingredients = [
    ['automation-science-pack', 1],
    ['logistic-science-pack', 1],
    ['chemical-science-pack', 1],
    ['utility-science-pack', 1],
];

data.raw.technology['fusion-reactor-equipment'].prerequisites = [
    'utility-science-pack',
    'power-armor',
];

if(data.raw.technology['bob-power-armor-3']) {
    data.raw.technology['bob-power-armor-3'].unit.ingredients = [
        ['automation-science-pack', 1],
        ['logistic-science-pack', 1],
        ['chemical-science-pack', 1],
        ['utility-science-pack', 1],
    ];

    data.raw.technology['bob-power-armor-4'].unit.ingredients = [
        ['automation-science-pack', 1],
        ['logistic-science-pack', 1],
        ['chemical-science-pack', 1],
        ['utility-science-pack', 1],
    ];

    data.raw.technology['bob-power-armor-5'].unit.ingredients = [
        ['automation-science-pack', 1],
        ['logistic-science-pack', 1],
        ['chemical-science-pack', 1],
        ['utility-science-pack', 1],
    ];
}

// This is also bob's warfare and could probably share the power armor check, but this feels cleaner
if(data.raw.technology['radars-3']) {
    data.raw.technology['radars-3'].prerequisites = [
        'radars-2',
        'advanced-electronics',
    ];

    data.raw.technology['radars-5'].prerequisites = [
        'radars-4',
    ];
}

if(data.raw.technology['fusion-reactor-equipment-3']) {
    data.raw.technology['fusion-reactor-equipment-3'].unit.ingredients = [
        ['automation-science-pack', 1],
        ['logistic-science-pack', 1],
        ['chemical-science-pack', 1],
        ['production-science-pack', 1],
        ['utility-science-pack', 1],
    ];

    data.raw.technology['fusion-reactor-equipment-4'].unit.ingredients = [
        ['automation-science-pack', 1],
        ['logistic-science-pack', 1],
        ['chemical-science-pack', 1],
        ['production-science-pack', 1],
        ['utility-science-pack', 1],
    ];
}