const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev: 'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
    },
    settings: {
        name: 'Settings',
        save: 'Save',
        discard: 'Discard changes',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        donate: 'donate voluntarily',
        appendableList: {
            unique: {
                title: 'double value',
                text: 'There must be no duplicate values in the **{title}** column. The value **{value}** already exists!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset the settings',
            text: 'Do you really want to reset settings to their default values? This cannot be undone!',
            close: 'Cancel',
            total: 'All settings',
            module: 'Only from this module',
        },
        resetWarningSetting: {
            title: 'Reset settings',
            text: 'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text: 'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            abort: 'Cancel',
            saveAndExit: 'Save and Exit',
            exit: 'Exit without saving',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
        locationSelect: {
            location: 'Select position',
            zoom: 'Select position and zoom',
            sync: 'use current position',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 1, 18, 23],
            color: '#ff2d2d',
        },
        'Rescue Stations': {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        'SES & Water Rescue': {
            buildings: [15, 24],
            color: '#0000ff',
        },
        'Other': {
            buildings: [7, 14, 21, 22, 25],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Fire Vehicles': {
            vehicles: {
                'Fire Trucks': [0, 1, 12, 13, 19, 30, 59],
                'Airport': [43, 44, 45],
                'Bush-Fire Units': [28, 29, 31, 32, 33],
                'CAFS': [55, 56, 57, 58, 60],
                'Special Vehicles': [2, 3, 4, 6, 7, 10, 11],
            },
            color: '#ff2d2d',
        },
        'Ambulance Vehicles': {
            vehicles: {
                'Ambulances': [5],
                'Intensive Care Vehicles': [9, 24, 25],
                'Other Ambulance Vehicles': [23, 26, 27],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Cars': [8, 17],
                'TOG': [15, 18],
                'Police Helicopter': [14],
                'K-9 Unit': [16],
                'Mounted': [22],
                'RIOT Units': [34, 35, 36],
                'Senior Sergeant': [37],
            },
            color: '#00ac00',
        },
        'SES & Water Rescue': {
            vehicles: {
                SES: [20, 21, 40, 41, 42],
                FAR: [46, 47, 48],
                DR: [49, 50, 51, 52],
                SAR: [53, 54],
                VMR: [38, 39],
            },
            color: '#02a18c',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    coins: 'Coins',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    noOptions: 'Sorry, no matching options.',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    pois: [
        'Park',
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Gas station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Discotheque',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Station',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Intersection with lights',
        'Carpentry Workshop',
        'Restaurant',
        'City Centre',
        'Hill',
        'Pier',
        'Playground',
        'Dirt Race Track',
        'Sheltered housing facility',
        'Field',
        'Heathland',
        'Moorland',
        'Cabin',
        'Campsite',
        'Cliff',
        'Sawmill',
        'Mine',
        'Beach',
        'Aged Care Home',
        'Dam',
        'Silo',
        'Aquarium',
        'Prison',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [],
    ranks: {
        missionchief: {
            0: 'Probie',
            200: 'Firefighter',
            10_000: 'Senior Firefighter',
            100_000: 'Fire Apparatus Operator',
            1_000_000: 'Lieutenant',
            5_000_000: 'Captain',
            20_000_000: 'Staff Captain',
            50_000_000: 'Battalion Chief',
            1_000_000_000: 'Division Chief',
            2_000_000_000: 'Deputy Chief',
            5_000_000_000: 'Fire Chief',
        },
        policechief: {
            0: 'Probationary Constable',
            200: 'Constable',
            10_000: 'Senior Constable',
            100_000: 'Leading Senior Constable',
            1_000_000: 'Sergeant',
            5_000_000: 'Senior Sergeant',
            20_000_000: 'Inspector',
            50_000_000: 'Superintendent',
            1_000_000_000: 'Assistant Commissioner',
            2_000_000_000: 'Deputy Commissioner',
            5_000_000_000: 'Commissioner',
        },
    },
};
