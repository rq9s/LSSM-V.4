const modules = {
    appstore: {
        save: 'Uložit',
        reset: 'Resetovat',
        noMapkit:
            'Tento modul nefunguje s typem map "Mapkit" z důvodu omezení Mapkitu!',
        dev: 'Tento modul je v současné době ve vývoji. Aktivací může vést k neúplným funkcím.',
        closeWarning: {
            title: 'Neulozené změny',
            text: 'Ve sbírce aplikací jste provedli změny, které nejsou uloženy. Resetujte je nebo uložte a ukončete sbírku aplikací.',
            close: 'Zavřít zprávu',
        },
    },
    settings: {
        name: 'Nastavení',
        save: 'Uložit',
        discard: 'Zahodit změny',
        reset: 'Resetovat',
        export: 'Export',
        import: 'Import',
        donate: 'donate voluntarily',
        resetWarning: {
            title: 'Resetovat nastavení',
            text: 'Opravdu chcete resetovat nastavení do počátečních hodnot? Tento krok nelze vrátit!',
            close: 'Zavřít',
            total: 'Všechna nastavení',
            module: 'Pouze pro tento modul',
        },
        resetWarningSetting: {
            title: 'Resetovat nastavení',
            text: 'Opravdu chcete resetovat toto jedno nastavení <b>{setting}</b> modulu <b>{module}</b> na výchozí hodnotu?',
            close: 'zrušení',
            reset: 'Resetovat',
        },
        closeWarning: {
            title: 'Neuložené změny',
            text: 'V nastavení jste provedli změny, které nejsou uloženy. Resetujte je nebo uložte a zavřete nastavení.',
            close: 'Zavřít zprávu',
        },
        changeList: {
            true: 'Aktivovat',
            false: 'Deaktivovat',
        },
    },
} as Record<string, Record<string, unknown>>;

export default {
    modules,
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 4, 11, 13, 17],
            color: '#ff2d2d',
        },
        'Rescue Stations': {
            buildings: [3, 6, 12, 16],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [5, 7, 8, 15, 18],
            color: '#00ac00',
        },
        'Other': {
            buildings: [2, 9, 14],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire trucks': [0, 1, 13, 18],
                'WaterTanker': [7],
                'Special vehicles': [2, 3, 4, 6, 8, 9, 12],
                'Wildland vehicles': [30, 31, 32, 33, 34, 38, 39, 40, 41],
                'Airport Vehicles': [17],
                'Boats': [21, 22, 24],
                'Fire Aviation': [35, 36, 37],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5, 27],
                'HEMS': [11],
                'First Responder': [15],
                'Rescue Boat': [25],
                'Other EMS Vehicle': [20, 28, 29],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Patrol Car': [10],
                'SWAT': [16, 26],
                'Police Motorcycle': [23],
                'Police helicopter': [14],
                'K-9 Unit': [19],
                'FBI': [42, 43, 44, 45, 46],
                'Sheriff': [47],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    amount: 'Quantity',
    search: 'Search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Kredity',
    coins: 'Mincí',
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
        'Rybník',
        'Nemocnice',
        'Les',
        'Autobusová zastávka',
        'Tramvajová zastávka',
        'Železniční stanice (regionální doprava)',
        'Železniční stanice (regionální a dálková doprava)',
        'Nákladové nádraží',
        'Supermarket (malý)',
        'Supermarket (velký)',
        'Čerpací stanice',
        'Škola',
        'Muzeum',
        'Nákupní centrum',
        'Autoservis',
        'Dálniční sjezd',
        'Vánoční trh',
        'Skladiště',
        'Diskotéka',
        'Stadion',
        'Farma',
        'Kancelářská budova',
        'Plovárna',
        'Křížení železnic',
        'Divadlo',
        'Zábavní park',
        'Řeka',
        'Malé letiště (ranvej)',
        'Velké letiště (ranvej)',
        'Letištní terminál',
        'Banka',
        'Velkosklad',
        'Most',
        'Rychlé občerstvení',
        'Nákladní přístav',
        'Sběrný dvůr',
        'Výšková budova',
        'Přístaviště výletních lodí',
        'Malý přístav',
        'Železniční přejezd',
        'Tunel',
        'Chladírenský sklad',
        'Elektrárna',
        'Továrna',
        'Šrotiště',
        'Stanice metra',
        'Malá chemická skladovací nádrž',
        'Velká chemická skladovací nádrž',
        'Hotel',
        'Bar',
        'Skládka',
        'Kryté parkoviště',
        'Silo',
        'Křižovatka se semafory',
        'Křižovatka',
        'Srub',
        'Tržnice',
        'Truhlárna',
        'Muniční sklad',
        'Sklad pyrotechniky',
        'Autobusové nádraží',
        'Vlakové nádraží',
        'Sklad uhlí',
        'Náměstí',
        'Centrum města',
        'Motorest',
        'Panelový dům',
        'Prolézačky',
        'Plnírna plynu',
        'Pole',
        'Bioplynová stanice',
        'Elektrorozvodna',
        'Staveniště',
        'Hrad',
        'Kostel',
        'Dálnice',
        'Železnice',
        'Důl',
        'Hangár',
        'Pojezdové dráha',
        'Věznice',
        'Přehrada',
        'Knihovna',
        'Akvárium',
        'Sauna',
        'Hora',
        'Prádelna',
        'Potrubí',
        'Zábavní park',
    ],
    only_alliance_missions: [57, 74],
};
