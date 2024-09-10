let Dh = {};

Dh.attackType = {};

Dh.attackTypeRanged = {
    none: "ATTACK_TYPE.NONE",
    standard: "ATTACK_TYPE.STANDARD",
    semi_auto: "ATTACK_TYPE.SEMI_AUTO",
    full_auto: "ATTACK_TYPE.FULL_AUTO",
    called_shot: "ATTACK_TYPE.CALLED_SHOT"
};

Dh.attackTypeMelee = {
    none: "ATTACK_TYPE.NONE",
    standard: "ATTACK_TYPE.STANDARD",
    charge: "ATTACK_TYPE.CHARGE",
    swift: "ATTACK_TYPE.SWIFT",
    lightning: "ATTACK_TYPE.LIGHTNING",
    allOut: "ATTACK_TYPE.ALLOUT",
    called_shot: "ATTACK_TYPE.CALLED_SHOT"
};

Dh.attackTypePsy = {
    none: "ATTACK_TYPE.NONE",
    bolt: "PSYCHIC_POWER.BOLT",
    barrage: "PSYCHIC_POWER.BARRAGE",
    storm: "PSYCHIC_POWER.STORM",
    blast: "PSYCHIC_POWER.BLAST"
};

Dh.ranges = {
    0: "RANGE.NONE",
    30: "RANGE.POINT_BLANK",
    10: "RANGE.SHORT",
    "-10": "RANGE.LONG",
    "-30": "RANGE.EXTREME"
};

Dh.damageTypes = {
    energy: "DAMAGE_TYPE.ENERGY",
    impact: "DAMAGE_TYPE.IMPACT",
    rending: "DAMAGE_TYPE.RENDING",
    explosive: "DAMAGE_TYPE.EXPLOSIVE"
};

Dh.aimModes = {
    0: "AIMING.NONE",
    10: "AIMING.HALF",
    20: "AIMING.FULL"
};

Dh.evasions = {
    dodge: "SKILL.DODGE",
    parry: "SKILL.PARRY",
    deny: "DIALOG.DENY_THE_WITCH"
};

Dh.craftmanship = {
    poor: "CRAFTSMANSHIP.POOR",
    common: "CRAFTSMANSHIP.COMMON",
    good: "CRAFTSMANSHIP.GOOD",
    best: "CRAFTSMANSHIP.BEST"
};

Dh.availability = {
    ubiquitous: "AVAILABILITY.UBIQUITOUS",
    abundant: "AVAILABILITY.ABUNDANT",
    plentiful: "AVAILABILITY.PLENTIFUL",
    common: "AVAILABILITY.COMMON",
    average: "AVAILABILITY.AVERAGE",
    scarce: "AVAILABILITY.SCARCE",
    rare: "AVAILABILITY.RARE",
    "very-rare": "AVAILABILITY.VERY_RARE",
    "extremely-rare": "AVAILABILITY.EXTREMELY_RARE",
    "near-unique": "AVAILABILITY.NEAR_UNIQUE",
    unique: "AVAILABILITY.UNIQUE"
};


Dh.armourTypes = {
    basic: "ARMOUR_TYPE.BASIC",
    flak: "ARMOUR_TYPE.FLAK",
    mesh: "ARMOUR_TYPE.MESH",
    carapace: "ARMOUR_TYPE.CARAPACE",
    power: "ARMOUR_TYPE.POWER"
};

Dh.weaponType = {
    las: "WEAPON.LAS",
    solidprojectile: "WEAPON.SOLIDPROJECTILE",
    bolt: "WEAPON.BOLT",
    melta: "WEAPON.MELTA",
    plasma: "WEAPON.PLASMA",
    flame: "WEAPON.FLAME",
    lowtech: "WEAPON.LOWTECH",
    launcher: "WEAPON.LAUNCHER",
    explosive: "WEAPON.EXPLOSIVE",
    exotic: "WEAPON.EXOTIC",
    chain: "WEAPON.CHAIN",
    power: "WEAPON.POWER",
    shock: "WEAPON.SHOCK",
    force: "WEAPON.FORCE"
};

Dh.weaponClass = {
    melee: "WEAPON.MELEE",
    thrown: "WEAPON.THROWN",
    pistol: "WEAPON.PISTOL",
    basic: "WEAPON.BASIC",
    heavy: "WEAPON.HEAVY",
    launched: "WEAPON.LAUNCHED",
    placed: "WEAPON.PLACED",
    vehicle: "WEAPON.VEHICLE"
};

Dh.psykerClass = {
    bound: "PSYCHIC_POWER.BOUND",
    unbound: "PSYCHIC_POWER.UNBOUND",
    daemonic: "PSYCHIC_POWER.DAEMONIC"
};

Dh.advanceStagesCharacteristics = {
    0: "ADVANCE.NONE",
    5: "ADVANCE.SIMPLE",
    10: "ADVANCE.INTERMEDIATE",
    15: "ADVANCE.TRAINED",
    20: "ADVANCE.PROFICIENT",
    25: "ADVANCE.EXPERT"
};

Dh.advanceStagesSkills = {
    "-20": "ADVANCE.UNTRAINED",
    0: "ADVANCE.KNOWN",
    10: "ADVANCE.TRAINED",
    20: "ADVANCE.EXPERIENCED",
    30: "ADVANCE.VETERAN"
};

Dh.characteristicCosts = [
    [0, 0, 0],
    [100, 250, 500],
    [250, 500, 750],
    [500, 750, 1000],
    [750, 1000, 1500],
    [1250, 1500, 2500]];

Dh.talentCosts = [[200, 300, 600], [300, 450, 900], [400, 600, 1200]];

Dh.hitLocations = {
    head: "ARMOUR.HEAD",
    leftArm: "ARMOUR.LEFT_ARM",
    rightArm: "ARMOUR.RIGHT_ARM",
    body: "ARMOUR.BODY",
    leftLeg: "ARMOUR.LEFT_LEG",
    rightLeg: "ARMOUR.RIGHT_LEG"
};

CONFIG.statusEffects = [
    {
        id: "bleeding",
        label: "CONDITION.BLEEDING",
        icon: "systems/dark-heresy/asset/icons/bleeding.png"
    },
    {
        id: "blinded",
        label: "CONDITION.BLINDED",
        icon: "systems/dark-heresy/asset/icons/blinded.png"
    },
    {
        id: "deafened",
        label: "CONDITION.DEAFEND",
        icon: "systems/dark-heresy/asset/icons/deafened.png"
    },
    {
        id: "fear",
        label: "CONDITION.FEAR",
        icon: "systems/dark-heresy/asset/icons/fear.png"
    },
    {
        id: "fire",
        label: "CONDITION.FIRE",
        icon: "systems/dark-heresy/asset/icons/flame.png"
    },
    {
        id: "grappled",
        label: "CONDITION.GRAPPLED",
        icon: "systems/dark-heresy/asset/icons/grappled.png"
    },
    {
        id: "hidden",
        label: "CONDITION.HIDDEN",
        icon: "systems/dark-heresy/asset/icons/hidden.png"
    },
    {
        id: "pinned",
        label: "CONDITION.PINNED",
        icon: "systems/dark-heresy/asset/icons/pinning.png"
    },
    {
        id: "poisond",
        label: "CONDITION.POISONED",
        icon: "systems/dark-heresy/asset/icons/poisoned.png"
    },
    {
        id: "prone",
        label: "CONDITION.PRONE",
        icon: "systems/dark-heresy/asset/icons/prone.png"
    },
    {
        id: "stunned",
        label: "CONDITION.STUNNED",
        icon: "systems/dark-heresy/asset/icons/stunned.png"
    },
    {
        id: "unconscious",
        label: "CONDITION.UNCONSCIOUS",
        icon: "systems/dark-heresy/asset/icons/unconscious.png"
    },
    {
        id: "dead",
        label: "EFFECT.StatusDead", // Foundry Default Text Key
        icon: "systems/dark-heresy/asset/icons/dead.png"
    }
];

Dh.skills = {
        "acrobatics": {
            "label": "SKILL.ACROBATICS",
            "characteristics": [
                "Ag",
                "S"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Agility",
                "General"
            ],
            "starter": false,
            "cost": 0
        },
        "athletics": {
            "label": "SKILL.ATHLETICS",
            "characteristics": [
                "S",
                "T"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Strength",
                "General"
            ],
            "starter": false,
            "cost": 0
        },
        "awareness": {
            "label": "SKILL.AWARENESS",
            "characteristics": [
                "Per",
                "Fel",
                "Int"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Perception",
                "Fieldcraft"
            ],
            "starter": false,
            "cost": 0
        },
        "charm": {
            "label": "SKILL.CHARM",
            "characteristics": [
                "Fel",
                "Inf"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Fellowship",
                "Social"
            ],
            "starter": false,
            "cost": 0
        },
        "command": {
            "label": "SKILL.COMMAND",
            "characteristics": [
                "Fel",
                "Int",
                "S",
                "WP"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Fellowship",
                "Leadership"
            ],
            "starter": false,
            "cost": 0
        },
        "commerce": {
            "label": "SKILL.COMMERCE",
            "characteristics": [
                "Int",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Intelligence",
                "Knowledge"
            ],
            "starter": false,
            "cost": 0
        },
        "commonLore": {
            "label": "SKILL.COMMON_LORE",
            "characteristics": [
                "Int",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": true,
            "aptitudes": [
                "Intelligence",
                "Knowledge"
            ],
            "specialities": {
                "adeptaSororitas": {
                    "label": "Adepta Sororitas",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "adeptusArbites": {
                    "label": "Adeptus Arbites",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "adeptusAstartes": {
                    "label": "Adeptus Astartes",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "adeptusAstraTelepathica": {
                    "label": "Adeptus Astra Telepathica",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "adeptusMechanicus": {
                    "label": "Adeptus Mechanicus",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "administratum": {
                    "label": "Administratum",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "askellonSector": {
                    "label": "Askellon Sector",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "chartistCaptains": {
                    "label": "Chartist Captains",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "collegiaTitanicu": {
                    "label": "Collegia Titanicu",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "ecclesiarchy": {
                    "label": "Ecclesiarchy",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "imperialCreed": {
                    "label": "Imperial Creed",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "imperialGuard": {
                    "label": "Imperial Guard",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "imperialNavy": {
                    "label": "Imperial Navy",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "imperium": {
                    "label": "Imperium",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "navigators": {
                    "label": "Navigators",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "planetaryDefenceForces": {
                    "label": "Planetary Defence Forces",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "rogueTraders": {
                    "label": "Rogue Traders",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "scholaProgenium": {
                    "label": "Schola Progenium",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "tech": {
                    "label": "Tech",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "underworld": {
                    "label": "Underworld",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "war": {
                    "label": "War",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                }
            }
        },
        "deceive": {
            "label": "SKILL.DECEIVE",
            "characteristics": [
                "Fel",
                "Int"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Fellowship",
                "Social"
            ],
            "starter": false,
            "cost": 0
        },
        "dodge": {
            "label": "SKILL.DODGE",
            "characteristics": [
                "Ag"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Agility",
                "Defence"
            ],
            "starter": false,
            "cost": 0
        },
        "forbiddenLore": {
            "label": "SKILL.FORBIDDEN_LORE",
            "characteristics": [
                "Int",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": true,
            "aptitudes": [
                "Intelligence",
                "Knowledge"
            ],
            "specialities": {
                "archaeotech": {
                    "label": "Archaeotech",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "chaosSpaceMarines": {
                    "label": "Chaos Space Marines",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "criminalCartelsAndSmugglers": {
                    "label": "Criminal Cartels and Smugglers",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "daemonology": {
                    "label": "Daemonology",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "heresy": {
                    "label": "Heresy",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "theHorusHeresyAndTheLongWar": {
                    "label": "The Horus Heresy and the Long War",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "inquisition": {
                    "label": "Inquisition",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "mutants": {
                    "label": "Mutants",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "officioAssassinorum": {
                    "label": "Officio Assassinorum",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "pirates": {
                    "label": "Pirates",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "psykers": {
                    "label": "Psykers",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "theWarp": {
                    "label": "The Warp",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "xenos": {
                    "label": "Xenos",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                }
            }
        },
        "inquiry": {
            "label": "SKILL.INQUIRY",
            "characteristics": [
                "Fel",
                "Int",
                "Per"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Fellowship",
                "Social"
            ],
            "starter": false,
            "cost": 0
        },
        "interrogation": {
            "label": "SKILL.INTERROGATION",
            "characteristics": [
                "WP",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Willpower",
                "Social"
            ],
            "starter": false,
            "cost": 0
        },
        "intimidate": {
            "label": "SKILL.INTIMIDATE",
            "characteristics": [
                "S",
                "WP"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Strength",
                "Social"
            ],
            "starter": false,
            "cost": 0
        },
        "linguistics": {
            "label": "SKILL.LINGUISTICS",
            "characteristics": [
                "Int",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": true,
            "aptitudes": [
                "Intelligence",
                "General"
            ],
            "specialities": {
                "chapterRunes": {
                    "label": "Chapter Runes",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "chaosMarks": {
                    "label": "Chaos Marks",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "eldar": {
                    "label": "Eldar",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "highGothic": {
                    "label": "High Gothic",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "imperialCodes": {
                    "label": "Imperial Codes",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "lowGothic": {
                    "label": "Low Gothic",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "mercenary": {
                    "label": "Mercenary",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "necrontyr": {
                    "label": "Necrontyr",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "ork": {
                    "label": "Ork",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "technaLingua": {
                    "label": "Techna-Lingua",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "tau": {
                    "label": "Tau",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "underworld": {
                    "label": "Underworld",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "xenosMarkings": {
                    "label": "Xenos Markings",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                }
            }
        },
        "logic": {
            "label": "SKILL.LOGIC",
            "characteristics": [
                "Int",
                "Ag"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Intelligence",
                "Knowledge"
            ],
            "starter": false,
            "cost": 0
        },
        "medicae": {
            "label": "SKILL.MEDICAE",
            "characteristics": [
                "Int",
                "Ag",
                "Per"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Intelligence",
                "Fieldcraft"
            ],
            "starter": false,
            "cost": 0
        },
        "navigate": {
            "label": "SKILL.NAVIGATE",
            "characteristics": [
                "Int",
                "Per"
            ],
            "advance": -20,
            "isSpecialist": true,
            "aptitudes": [
                "Intelligence",
                "Fieldcraft"
            ],
            "specialities": {
                "surface": {
                    "label": "Surface",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "stellar": {
                    "label": "Stellar",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "warp": {
                    "label": "Warp",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                }
            }
        },
        "operate": {
            "label": "SKILL.OPERATE",
            "characteristics": [
                "Ag",
                "Int"
            ],
            "advance": -20,
            "isSpecialist": true,
            "aptitudes": [
                "Agility",
                "Fieldcraft"
            ],
            "specialities": {
                "surface": {
                    "label": "Surface",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "aeronautica": {
                    "label": "Aeronautica",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "voidship": {
                    "label": "Voidship",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                }
            }
        },
        "parry": {
            "label": "SKILL.PARRY",
            "characteristics": [
                "WS"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Weapon Skill",
                "Defence"
            ],
            "starter": false,
            "cost": 0
        },
        "psyniscience": {
            "label": "SKILL.PSYNISCIENCE",
            "characteristics": [
                "Per",
                "WP"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Perception",
                "Psyker"
            ],
            "starter": false,
            "cost": 0
        },
        "scholasticLore": {
            "label": "SKILL.SCHOLASTIC_LORE",
            "characteristics": [
                "Int",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": true,
            "aptitudes": [
                "Intelligence",
                "Knowledge"
            ],
            "specialities": {
                "astromancy": {
                    "label": "Astromancy",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "beasts": {
                    "label": "Beasts",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "bureaucracy": {
                    "label": "Bureaucracy",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "chymistry": {
                    "label": "Chymistry",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "cryptology": {
                    "label": "Cryptology",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "heraldry": {
                    "label": "Heraldry",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "imperialWarrants": {
                    "label": "Imperial Warrants",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "judgement": {
                    "label": "Judgement",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "legend": {
                    "label": "Legend",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "numerology": {
                    "label": "Numerology",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "occult": {
                    "label": "Occult",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "philosophy": {
                    "label": "Philosophy",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "tacticaImperialis": {
                    "label": "Tactica Imperialis",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                }
            }
        },
        "scrutiny": {
            "label": "SKILL.SCRUTINY",
            "characteristics": [
                "Per",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Perception",
                "General"
            ],
            "starter": false,
            "cost": 0
        },
        "security": {
            "label": "SKILL.SECURITY",
            "characteristics": [
                "Int",
                "Ag"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Intelligence",
                "Tech"
            ],
            "starter": false,
            "cost": 0
        },
        "sleightOfHand": {
            "label": "SKILL.SLEIGHT_OF_HAND",
            "characteristics": [
                "Ag",
                "Int"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Agility",
                "Knowledge"
            ],
            "starter": false,
            "cost": 0
        },
        "stealth": {
            "label": "SKILL.STEALTH",
            "characteristics": [
                "Ag",
                "Per"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Agility",
                "Fieldcraft"
            ],
            "starter": false,
            "cost": 0
        },
        "survival": {
            "label": "SKILL.SURVIVAL",
            "characteristics": [
                "Per",
                "Ag",
                "Int"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Perception",
                "Fieldcraft"
            ],
            "starter": false,
            "cost": 0
        },
        "techUse": {
            "label": "SKILL.TECH_USE",
            "characteristics": [
                "Int",
                "Ag"
            ],
            "advance": -20,
            "isSpecialist": false,
            "specialities": {},
            "aptitudes": [
                "Intelligence",
                "Tech"
            ],
            "starter": false,
            "cost": 0
        },
        "trade": {
            "label": "SKILL.TRADE",
            "characteristics": [
                "Int",
                "Ag",
                "Fel"
            ],
            "advance": -20,
            "isSpecialist": true,
            "aptitudes": [
                "Intelligence",
                "General"
            ],
            "specialities": {
                "agri": {
                    "label": "Agri",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "archaeologist": {
                    "label": "Archaeologist",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "armourer": {
                    "label": "Armourer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "astrographer": {
                    "label": "Astrographer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "chymist": {
                    "label": "Chymist",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "cryptographer": {
                    "label": "Cryptographer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "cook": {
                    "label": "Cook",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "explorator": {
                    "label": "Explorator",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "linguist": {
                    "label": "Linguist",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "loremancer": {
                    "label": "Loremancer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "morticator": {
                    "label": "Morticator",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "performancer": {
                    "label": "Performancer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "prospector": {
                    "label": "Prospector",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "scrimshawer": {
                    "label": "Scrimshawer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "sculptor": {
                    "label": "Sculptor",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "shipwright": {
                    "label": "Shipwright",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "soothsayer": {
                    "label": "Soothsayer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "technomat": {
                    "label": "Technomat",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                },
                "voidfarer": {
                    "label": "Voidfarer",
                    "advance": -20,
                    "starter": false,
                    "cost": 0
                }
            }
        }
};



export default Dh;
