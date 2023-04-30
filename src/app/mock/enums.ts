/* Brands */
export enum CAR_BRANDS {
    VW = 'VW',
    AUDI = 'Audi',
    MERCEDES = 'Mercedes Benz',
    BMW = 'Bmw',
    FIAT = 'Fiat',
    OPEL = 'Opel',
    HYUNDAI = 'Hyundai',
    TESLA = 'Tesla',
    POLESTAR = 'Polestar',
    MG = 'MG',
    LYNKCO = 'Lynk & Co'
}

/* Serien */

export type CAR_SERIES = VW_SERIES | AUDI_SERIES | OPEL_SERIES | MERCEDES_SERIES | BMW_SERIES | FIAT_SERIES | HYUNDAI_SERIES | TESLA_SERIES | POLESTAR_SERIES |MG_SERIES | LYNKCO_SERIES
export type VW_SERIES = 'T-Roc' | 'Touran' | 'Golf'
export type AUDI_SERIES = 'Q' | 'A'
export type MERCEDES_SERIES  = 'C' | 'Vito'| 'SL' | 'S'
export type BMW_SERIES = 'M' | 'Z'
export type FIAT_SERIES = '500'
export type OPEL_SERIES = 'Crossland'
export type HYUNDAI_SERIES = 'I'
export type TESLA_SERIES = 'Model'
export type POLESTAR_SERIES = '2'
export type MG_SERIES = 'EHS'
export type LYNKCO_SERIES = '01'


/* Varianten */

export type CAR_VARIANTS = VW_VARIANT | FIAT_VARIANT | MG_VARIANT | LYNKCO_VARIANT | AUDI_VARIANT | MERCEDES_VARIANT | BMW_VARIANT | OPEL_VARIANT | TESLA_VARIANT | HYUNDAI_VARIANT | POLESTAR_VARIANT
export enum VW_VARIANT {}
export type AUDI_VARIANT = '5' | '8'
export type MERCEDES_VARIANT = '166L' | '63';
export type BMW_VARIANT = '5'
export enum FIAT_VARIANT {}
export type OPEL_VARIANT = 'X'
export type HYUNDAI_VARIANT = '30'
export type TESLA_VARIANT = 'Y' | '3'
export type POLESTAR_VARIANT = 'Standard'
export enum MG_VARIANT {}
export enum LYNKCO_VARIANT {}

/* Modifikation */
export type CAR_MODS = POLESTAR_MOD | MG_MOD | LYNKCO_MOD | VW_MOD | AUDI_MOD | MERCEDES_MOD | TESLA_MOD | HYUNDAI_MOD | MERCEDES_MOD | BMW_MOD | FIAT_MOD | OPEL_MOD
export type VW_MOD = '';
export type AUDI_MOD ='';
export type MERCEDES_MOD = 'AMG'
export type BMW_MOD =''
export type FIAT_MOD =''
export type OPEL_MOD =''
export type HYUNDAI_MOD =''
export type TESLA_MOD =''
export type POLESTAR_MOD =''
export type MG_MOD =''
export type LYNKCO_MOD =''
/* Model */
export enum CAR_MODEL {
    LIMOUSINE = 'Limousine',
    SUV = 'Suv',
    COUPE ='Coupé',
    CABRIO = 'Cabriolet',
    VAN = 'Van',
    KOMPAKT = 'Kompaktwagen',
    KOMBI = 'Kombi',
    PICKUP = 'Pick-Up',
    ELEKTO = 'Elektowagen'
}

export enum CAR_CONSTRUCTIONYEAR {
    ZWEITAUSEND = '2000',
    ZWEITAUSENDEINS = '2001',
    ZWEITAUSENDZWEI = '2002',
    ZWEITAUSENDDREI = '2003',
    ZWEITAUSENDVIER = '2004',
    ZWEITAUSENDFUENF = '2005',
    ZWEITAUSENDSECHS = '2006',
    ZWEITAUSENDSIEBEN = '2007',
    ZWEITAUSENDACHT = '2008',
    ZWEITAUSENDNEUN = '2009',
    ZWEITAUSENDZEHN = '2010',
    ZWEITAUSENDELF = '2011',
    ZWEITAUSENDZWÖLF = '2012',
    ZWEITAUSENDDREIZEHN = '2013',
    ZWEITAUSENDVIERZEHN = '2014',
    ZWEITAUSENDFUENFZEHN = '2015',
    ZWEITAUSENDSECHSZEHN = '2016',
    ZWEITAUSENDSIEBZEHN = '2017',
    ZWEITAUSENDACHTZEHN = '2018',
    ZWEITAUSENDNEUNZEHN = '2019',
    ZWEITAUSENDZWANZIG = '2020',
    ZWEITAUSENDEINUNDZWANZIG = '2021',
    ZWEITAUSENDZWEIUNDZWANZIG = '2022',
    ZWEITAUSENDDREIUNDZWANZIG = '2023'
}

export enum CAR_SITS {
    ZWEISITZER = '2 Sitzer',
    VIERSITZER = '4 Sitzer',
    FUENFSITZER = '5 Sitzer',
    SIEBENSITZER = '7 Sitzer'
}

export enum CAR_FUEL {
    BENZIN = 'Benzin',
    DIESEL = 'Diesel',
    HYBRID = 'Hybrid',
    ELEKTRO = 'Elektro',
}

export enum CAR_TRANSMISSION {
    MAUNELL = 'Manuell',
    AUTOMATIK = 'Automatik',
}