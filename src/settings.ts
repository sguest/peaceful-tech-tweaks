import { settingKeys } from './setting-keys';

data.extend([
    {
        type: 'bool-setting',
        name: settingKeys.modifyPowerArmor,
        order: '1',
        setting_type: 'startup',
        default_value: true,
    },
    {
        type: 'bool-setting',
        name: settingKeys.modifyFusionReactor,
        order: '2',
        setting_type: 'startup',
        default_value: true,
    },
    {
        type: 'bool-setting',
        name: settingKeys.modifySpidertron,
        order: '3',
        setting_type: 'startup',
        default_value: true,
    },
]);

if(mods['bobwarfare']) {
    data.extend([
        {
            type: 'bool-setting',
            name: settingKeys.modifyRadar,
            order: '1',
            setting_type: 'startup',
            default_value: true,
        },    
    ]); 
}