import { Car } from '../interfaces/car';

export function generateId(): number {
  const id = Math.floor(Math.random() * 1000000);
  return id;
}
/* Brands */
enum CAR_BRANDS {
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
enum VW_SERIES {
 TROC = 'T-Roc',
 TOURAN = 'Touran',
 GOLF = 'Golf'
}

enum AUDI_SERIES {
  QREIHE = 'Q',
  AREIHE = 'A',
}

enum MERCEDES_SERIES {
  VITO = 'Vito',
  SL = 'SL',
}

enum BMW_SERIES {
MREIHE = 'M',
ZREIHE = 'Z'
}

enum FIAT_SERIES {
FUNFHUNTERTERREIHE = '500'  
}

enum OPEL_SERIES {
CROSSLAND  = 'Crossland' 
}

enum HYUNDAI_SERIES {
IREIHE  = 'I' 
  }

enum TESLA_SERIES {
MODEL  = 'Model' 
  }

enum POLESTAR_SERIES {
ZWEIEREIHE  = '2' 
  }

enum MG_SERIES {
EHS  = 'EHS' 
  }

enum LYNKCO_SERIES {
NULLEINSREIHE = '01' 
  }
/* Varianten */
enum VW_VARIANT {}

enum AUDI_VARIANT {
  FUENFERVARIANTE = '5',
  ACHTERVARIANTE = '8'
}

enum MERCEDES_VARIANT {
  HUNDERTSECHSENERVARIANTEL = '166L',
  DREIUNDSECHSZIGERVARIANTE = '63'
}

enum BMW_VARIANT {
  FUENFERVARIANTE = '5',
}

enum FIAT_VARIANT {}

enum OPEL_VARIANT {
  XVARIANT = 'X'
}

enum HYUNDAI_VARIANT {
DREISSIGVARIANTE = '30'
}

enum TESLA_VARIANT {
  YVARIANTE = "Y",
  DREIERVARIANTE = '3'
}

enum POLESTAR_VARIANT {
  STANDARTVARIANTE = 'Standard'
}

enum MG_VARIANT {}

enum LYNKCO_VARIANT {}
/* Modifikation */
enum VW_MOD {}

enum AUDI_MOD {}

enum MERCEDES_MOD {
  AMG = 'AMG',
}

enum BMW_MOD {}

enum FIAT_MOD {}

enum OPEL_MOD {}

enum HYUNDAI_MOD {}

enum TESLA_MOD {}

enum POLESTAR_MOD {}

enum MG_MOD {}

enum LYNKCO_MOD {}
/* Model */
enum CAR_MODELL {
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

enum CAR_CONSTRUCTIONYEAR {
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

enum CAR_SITS {
  ZWEISITZER = '2 Sitzer',
  VIERSITZER = '4 Sitzer',
  FUENFSITZER = '5 Sitzer',
  SIEBENSITZER = '7 Sitzer'
}

enum CAR_FUEL {
  BENZIN = 'Benzin',
  DIESEL = 'Diesel',
  HYBRID = 'Hybrid',
  ELEKTRO = 'Elektro',
}

enum CAR_TRANSMISSION {
  MAUNELL = 'Manuell',
  AUTOMATIK = 'Automatik',
}


const carArray = [
  { brand: CAR_BRANDS.BMW, model: VW_CLASS.DREIER_REIHE },
  { brand: CAR_BRANDS.AUDI, model: VW_CLASS.DREIER_REIHE },
];

/* export const mockCarArray: Array<Car> = [
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    mockCarBrandsCollection[0],
    mockCarClassCollection[0],
    2023,
    'Benzin',
    7.1,
    'Manuell',
    320,
    700,
    4,
    'Bremen',
    'https://bit.ly/3mcT32M'
  ),
  new Car(
    generateId(),
    'DE123',
    'BMW M5',
    mockCarClassCollection[0],
    2019,
    'Diesel',
    7.7,
    'Automatik',
    360,
    700,
    4,
    'Bremen',
    'https://bit.ly/41qjK2O'
  ),
  new Car(
    generateId(),
    'DE123',
    'BMW M5',
    mockCarClassCollection[0],
    2019,
    'Diesel',
    7.7,
    'Automatik',
    360,
    700,
    4,
    'Bremen',
    'https://bit.ly/41qjK2O'
  ),
  new Car(
    generateId(),
    'DE123',
    'BMW M5',
    mockCarClassCollection[0],
    2019,
    'Diesel',
    7.7,
    'Automatik',
    360,
    700,
    4,
    'Bremen',
    'https://bit.ly/41qjK2O'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW T-Roc',
    mockCarClassCollection[1],
    2018,
    'Benzin',
    5.9,
    'Automatik',
    110,
    700,
    4,
    'Bremen',
    'https://bit.ly/3KEPKuO'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW T-Roc',
    mockCarClassCollection[1],
    2018,
    'Benzin',
    5.9,
    'Automatik',
    110,
    700,
    4,
    'Bremen',
    'https://bit.ly/3KEPKuO'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW T-Roc',
    mockCarClassCollection[1],
    2018,
    'Benzin',
    5.9,
    'Automatik',
    110,
    700,
    4,
    'Bremen',
    'https://bit.ly/3KEPKuO'
  ),
  new Car(
    generateId(),
    'DE123',
    'VW Touran',
    mockCarClassCollection[1],
    2015,
    'Benzin',
    6.7,
    'Manuell',
    150,
    700,
    4,
    'Bremen',
    'https://bit.ly/3ZLs4sN'
  ),
]; */


const carObjectsArray: Array<Car> = [];