import { Injectable } from '@angular/core';

export class Production {
  year: number;

  country: string;

  oil: number;
}

const productionData: Production[] = [{
  year: 1970,
  country: 'Saudi Arabia',
  oil: 192.2,
}, {
  year: 1970,
  country: 'USA',
  oil: 533.5,
}, {
  year: 1970,
  country: 'Iran',
  oil: 192.6,
}, {
  year: 1970,
  country: 'Mexico',
  oil: 24.2,
}, {
  year: 1980,
  country: 'Saudi Arabia',
  oil: 509.8,
}, {
  year: 1980,
  country: 'USA',
  oil: 480.2,
}, {
  year: 1980,
  country: 'Iran',
  oil: 74.3,
}, {
  year: 1980,
  country: 'Mexico',
  oil: 107.2,
}, {
  year: 1990,
  country: 'Saudi Arabia',
  oil: 342.6,
}, {
  year: 1990,
  country: 'USA',
  oil: 416.6,
}, {
  year: 1990,
  country: 'Iran',
  oil: 162.8,
}, {
  year: 1990,
  country: 'Mexico',
  oil: 146.3,
}, {
  year: 1990,
  country: 'Russia',
  oil: 515.9,
}, {
  year: 2000,
  country: 'Saudi Arabia',
  oil: 456.3,
}, {
  year: 2000,
  country: 'USA',
  oil: 352.6,
}, {
  year: 2000,
  country: 'Iran',
  oil: 191.3,
}, {
  year: 2000,
  country: 'Mexico',
  oil: 171.2,
}, {
  year: 2000,
  country: 'Russia',
  oil: 323.3,
}, {
  year: 2008,
  country: 'Saudi Arabia',
  oil: 515.3,
}, {
  year: 2008,
  country: 'USA',
  oil: 304.9,
}, {
  year: 2008,
  country: 'Iran',
  oil: 209.9,
}, {
  year: 2008,
  country: 'Mexico',
  oil: 157.7,
}, {
  year: 2008,
  country: 'Russia',
  oil: 488.5,
}, {
  year: 2009,
  country: 'Saudi Arabia',
  oil: 459.5,
}, {
  year: 2009,
  country: 'USA',
  oil: 325.3,
}, {
  year: 2009,
  country: 'Iran',
  oil: 202.4,
}, {
  year: 2009,
  country: 'Mexico',
  oil: 147.5,
}, {
  year: 2009,
  country: 'Russia',
  oil: 494.2,
},
];

@Injectable()
export class Service {
  getProductionData(): Production[] {
    return productionData;
  }
}
