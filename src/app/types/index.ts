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

type BrandObject = { brandId: CAR_BRANDS, series: Array<SeriesType>, mods: Array<string>  }
export type SeriesType = { seriesId: CAR_SERIES, variants: Array<string> };

export type CarsData = Array<BrandObject>

/* Modifikation */
export type CAR_MODS = POLESTAR_MOD | MG_MOD | LYNKCO_MOD | VW_MOD | AUDI_MOD | MERCEDES_MOD | TESLA_MOD | HYUNDAI_MOD | MERCEDES_MOD | BMW_MOD | FIAT_MOD | OPEL_MOD
export type VW_MOD = []
export type AUDI_MOD = []
export type MERCEDES_MOD = ['AMG']
export type BMW_MOD =['M Competition','M']
export type FIAT_MOD =[]
export type OPEL_MOD =[]
export type HYUNDAI_MOD =[]
export type TESLA_MOD =[]
export type POLESTAR_MOD =[]
export type MG_MOD =[]
export type LYNKCO_MOD =[]

export const VW_MOD_ARRAY: VW_MOD | [] = []
export const AUDI_MOD_ARRAY: AUDI_MOD | [] = []
export const MERCEDES_MOD_ARRAY: MERCEDES_MOD | [] = []
export const BMW_MOD_ARRAY: BMW_MOD | [] =['M Competition', 'M']
export const FIAT_MOD_ARRAY: VW_MOD | [] = []
export const OPEL_MOD_ARRAY: VW_MOD | [] = []
export const HYUNDAI_MOD_ARRAY: VW_MOD | [] = []
export const TESLA_MOD_ARRAY: VW_MOD | [] = []
export const POLESTAR_MOD_ARRAY: VW_MOD | [] = []
export const MG_MOD_ARRAY: VW_MOD | [] = []
export const LYNKCO_MOD_ARRAY: VW_MOD | [] = []

/* Varianten */

export type CAR_VARIANTS = [VW_VARIANT | FIAT_VARIANT | MG_VARIANT | LYNKCO_VARIANT | AUDI_VARIANT | MERCEDES_VARIANT | BMW_VARIANT | OPEL_VARIANT | TESLA_VARIANT | HYUNDAI_VARIANT | POLESTAR_VARIANT]
export type VW_VARIANT = 'GTE'
export type AUDI_VARIANT = '';
export type MERCEDES_VARIANT = '166L' | '63';
export type BMW_VARIANT = '420'
export type FIAT_VARIANT = '';
export type OPEL_VARIANT = 'X'
export type HYUNDAI_VARIANT = '30'
export type TESLA_VARIANT = 'Y' | '3'
export type POLESTAR_VARIANT = 'Standard'
export type MG_VARIANT = '';
export type LYNKCO_VARIANT = '';

export const VW_VARIANTS_ARRAY: Array<string> = ['GTE'];
export const AUDI_VARIANTS_ARRAY: Array<string> = ['Q5', 'A8']
export const MERCEDES_VARIANTS_ARRAY: Array<string>  = [ '116L', '63']
export const BMW_VARIANTS_ARRAY = [ {id: 'Z4', variants: []}, {id: '4er', variants: []}, {id: '5er', variants: []} ]
export const FIAT_VARIANTS_ARRAY = [ {id: '500', variants: []}]
export const OPEL_VARIANTS_ARRAY = [ {id: 'Crossland', varinats: 'X' }]
export const HYUNDAI_VARIANTS_ARRAY = [{id: 'I', variants: ['30']}]
export const TESLA_VARIANTS_ARRAY = [{id: 'Model', variants: ['Y', '3'] }]
export const POLESTAR_VARIANTS_ARRAY = [{id: '2', variants: ['Standard'] }]
export const MG_VARIANTS_ARRAY = [{id: 'EHS', variants:[]}]
export const LYNKCO_VARIANTS_ARRAY = [{id: '01', variants: []}]
export const CAR_VARIANTS_ARRAY = [VW_VARIANTS_ARRAY, AUDI_VARIANTS_ARRAY, MERCEDES_VARIANTS_ARRAY, BMW_VARIANTS_ARRAY, FIAT_VARIANTS_ARRAY, OPEL_VARIANTS_ARRAY, HYUNDAI_VARIANTS_ARRAY, TESLA_VARIANTS_ARRAY, POLESTAR_VARIANTS_ARRAY, MG_VARIANTS_ARRAY, LYNKCO_VARIANTS_ARRAY]

/* Serien */

export type CAR_SERIES = VW_SERIES_ENUM | AUDI_SERIES_ENUM | MERCEDES_SERIES_ENUM
// export type VW_SERIES = 'T-Roc' | 'Touran' | 'Golf' | 'Tiguan'
// export type AUDI_SERIES = 'Q5' | 'A8'
export type MERCEDES_SERIES  = 'V'| 'SL'
export type BMW_SERIES = 'Z4' | '4er' | '5er'
// export type FIAT_SERIES = '500' | ''
// export type OPEL_SERIES = 'Crossland' | ''
// export type HYUNDAI_SERIES = 'I' | ''
// export type TESLA_SERIES = 'Model' | ''
// export type POLESTAR_SERIES = '2' | ''
// export type MG_SERIES = 'EHS' | ''
// export type LYNKCO_SERIES = '01' | ''
export enum VW_SERIES_ENUM {
    TROC = 'T-Roc',
    TOURAN = 'Touran',
    GOLF = 'Golf',
    TIGUAN = 'Tiguan'
}

export enum AUDI_SERIES_ENUM {
    Q5 = 'Q5',
    A8 = 'A8'
}

export enum MERCEDES_SERIES_ENUM {
    V = 'Vito',
    SL = 'SL'
}

export const VW_SERIES_ARRAY: Array<SeriesType> = [{seriesId: VW_SERIES_ENUM.TROC, variants: VW_VARIANTS_ARRAY}, {seriesId: VW_SERIES_ENUM.GOLF, variants: VW_VARIANTS_ARRAY}, {seriesId: VW_SERIES_ENUM.TIGUAN, variants: VW_VARIANTS_ARRAY}, {seriesId: VW_SERIES_ENUM.TOURAN, variants: VW_VARIANTS_ARRAY}]
export const AUDI_SERIES_ARRAY: Array<SeriesType> = [{ seriesId: AUDI_SERIES_ENUM.Q5, variants: AUDI_VARIANTS_ARRAY }, { seriesId: AUDI_SERIES_ENUM.A8, variants: AUDI_VARIANTS_ARRAY }]
export const MERCEDES_SERIES_ARRAY: Array<SeriesType> = [{seriesId: MERCEDES_SERIES_ENUM.V, variants: MERCEDES_VARIANTS_ARRAY }, { seriesId: MERCEDES_SERIES_ENUM.SL, variants: MERCEDES_VARIANTS_ARRAY }]
export const BMW_SERIES_ARRAY: Array<SeriesType> = ['Z4,','4er', '5er']
export const FIAT_SERIES_ARRAY: Array<SeriesType> = ['500']
export const OPEL_SERIESARRAY: Array<SeriesType> = ['Crossland']
export const HYUNDAI_SERIES_ARRAY: Array<SeriesType> = ['I']
export const TESLA_SERIES_ARRAY: Array<SeriesType> = ['Model']
export const POLESTAR_SERIES_ARRAY: Array<SeriesType> = ['2']
export const MG_SERIES_ARRAY: Array<SeriesType> = ['EHS']
export const LYNKCO_SERIES_ARRAY: Array<SeriesType> = ['01']


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
    ELEKTRO = 'Elektrowagen'
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