import { HerramientasConcreto, MachineAcabado } from "../types/products";

export const maquinaAcabado: MachineAcabado[] = [
    {
        id: 0,
        name: "Allanadora Doble  36\"",
        ref:"BT900-HPFH24",
        desc: "Cuenta con un Motor Honda 24.0hp,  8 Llanas de acabado de 6\"X14\", direccion mecanica, asiento ajustable, 2 luces, sistema de aspersión, Ancho de operacion 1.90mt",
        img: "/Acabados/BT900HHW2-300x225.jpeg",
        usage: 'Perfecta para mezclar concreto, mortero y otros materiales de construcción en obras residenciales.',
        specs: [
            { label: 'Motor', value: 'Honda 24.0hp' },
            { label: 'LLanas', value: 'De Acabado 6"x14"' },
            { label: 'Peso', value: '45 kg' },
            { label: 'Operación', value: '1.90m' }
        ]
    },
    {
        id: 1,
        name: "Allanadora Doble  46\"",
        ref: "BT120-2/5/PFV35",
        desc: "Cuenta con  Motor Vanguard 35.0hp,  10 Llanas de acabado de 6\"X18\", direccion mecanica, Ancho de operacion 2.50mt, Dimensiones ;  Largo 2.54 mt x ancho 1.27 mt x alto 1.360mt",
        img: "/Acabados/BT1200HH-300x225.jpeg",
        usage: 'Perfecta para mezclar concreto, mortero y otros materiales de construcción en obras residenciales.',
        specs: [
            { label: 'Motor', value: 'Vanguard 35.0hp' },
            { label: 'LLanas', value: 'de Acabado 6"x18"' },
            { label: 'Peso', value: '45 kg' },
            { label: 'Operación', value: '2.50m' }
        ]
    },
    {
        id: 2,
        name: "Allanadora Sencilla de 36\"",
        ref: "BT90H160",
        desc: "Cuenta con un Motor Honda de 5.5hp, 4 llanas de acabado de 6\"x14\", diametro de operación 90cm, ",
        img: "/Acabados/AllandoraSencilla.jpeg",
        usage: 'Perfecta para mezclar concreto, mortero y otros materiales de construcción en obras residenciales.',
        specs: [
            { label: 'Motor', value: 'Honda 5.5hp' },
            { label: 'LLanas', value: 'de Acabado 6"x14"' },
            { label: 'Peso', value: '45 kg' },
            { label: 'Operacion', value: '90cm' }
        ]
    },
    {
        id: 3,
        name: "Allanadora sencilla  46\"",
        ref: "BT120H390",
        desc: "Cuenta con un Motor Honda  13.0hp, 4 llanas de acabado de  6\"x18\", diametro de operación 120cm, peso 113kg.",
        img: "/Acabados/AllandoraSencilla.jpeg",
        usage: 'Perfecta para mezclar concreto, mortero y otros materiales de construcción en obras residenciales.',
        specs: [
            { label: 'Motor', value: 'Honda 13.0hp' },
            { label: 'LLanas', value: 'de Acabado 6"x18"' },
            { label: 'Peso', value: '113 kg' },
            { label: 'Operacion', value: '120cm' }
        ]
    },
    {
        id: 4,
        name: "ORILLADORA  24\"(60cm)",
        ref: "BT60H160",
        desc: "Cuenta con un motor Honda 5.5hp, 4 llanas de acabado de 4-3/4\" x 9\", peso 53kg,  Incluye disco de flotado 24\"",
        img: "/Acabados/BT60H-painted-300x225.jpeg",
        usage: 'Perfecta para mezclar concreto, mortero y otros materiales de construcción en obras residenciales.',
        specs: [
            { label: 'Motor', value: 'Honda 5.5hp' },
            { label: 'LLanas', value: 'de Acabado 4-3/4"x9"' },
            { label: 'Peso', value: '53 kg' },
            { label: 'Operacion', value: '90cm' }
        ]
    },
    {
        id: 5,
        name: "Orilladora 30\"(75cm)",
        ref: "BT75HE160",
        desc: "Cuenta con un Motor Kubota Diesel mod. D1105, Alternador MECC, LT3N- 130 / 4, 110V, 50HZ, 4 x 300W lamparas LED, ",
        img: "/Acabados/BT60H-painted-300x225.jpeg",
        usage: 'Perfecta para mezclar concreto, mortero y otros materiales de construcción en obras residenciales.',
        specs: [
            { label: 'Motor', value: 'Kubota Diesel D1105' },
            { label: 'Potencia', value: '0.5 HP' },
            { label: 'Peso', value: ' - ' },
            { label: 'Velocidad', value: ' - ' }
        ]
    },
];

export const herramientasConcreto: HerramientasConcreto[] = [
    {
        id:0,
        name: "Flotadora Ligera",
        ref: "BT350095",
        desc: "Flotadora Ligera  36\"90 X 20cm(SOLO FLOTADORA) ",
        img: "/herramientas/Big-blue-complete-2048x2048.jpeg"
    },
    {
        id:1,
        name: "Flotadora de Canal",
        ref: "BT101034C",
        desc: "2.450m X 15cm Completa con cabezal, 3 extensiones de aluminio clip de 1.80m cada uno",
        img: "/herramientas/Bullfloat-2048x2048.jpeg"
    },
    {
        id:2,
        name: "Corrector Check Rod",
        ref: "BT101035C",
        desc: "3.0m , 2\" de alto x 4\" de ancho. Completo, incluye cabezal de balero para herramienta profesional, 3 extensiones de aluminio de 1.83m cada uno y tensores(outriggers) ",
        img: "/herramientas/Check-Rod-2048x2048.jpeg"
    },
    {
        id:3,
        name: "Corrector Bumpcutter completo",
        ref: "BT101026C",
        desc: "3.0m, 4\" de alto x 2\" de ancho. Completo, incluye cabezal de balero para herramienta profesional, 3 extensiones de aluminio de 1.83m cada uno, y tensores(outriggers)",
        img: "/herramientas/BTSPRAY06L10La-2048x2048.jpeg"
    },
    {
        id:4,
        name: "Llana tipo fresno",
        ref: "BT790074",
        desc: "Fresno 1.20m X 12cm (solo llana)",
        img: "/herramientas/Bullfloat-2048x2048.jpeg"
    },
    {
        id:5,
        name: "Flota Manual de Magnesio",
        ref: "CT131",
        desc: "Flota Manual de Magnesio 20\" x 3-1/4\" Mango Plastico",
        img: "/herramientas/master-square-end-trowel-bleu-300x293.jpeg"
    }
];