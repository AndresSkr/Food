export interface Food {
    codebar:     number;
    name:        string;
    nameStyle:   string;
    price:       number;
    description: null;
    image:       string;
    available:   boolean;
    deal:        boolean;
    steps:       Step[];
}

export interface Step {
    id:              number;
    name:            Name;
    description:     string;
    image:           string;
    selectableItems: number;
    available:       boolean;
    items:           Item[];
}

export interface Item {
    id:          number;
    name:        string;
    nameStyle:   string;
    description: null | string;
    image:       string;
    available:   boolean;
}

export enum Name {
    SeleccionaCómoTeGusta = "Selecciona ¿cómo te gusta?",
    SeleccionaElAcompañamiento = "Selecciona el acompañamiento",
    SeleccionaElTérminoDeCocciónDeLaCarne = "Selecciona el término de cocción de la carne",
    SeleccionaLaEnsalada = "Selecciona la ensalada",
}
