import { Injectable } from '@angular/core';

export class Data {
  year: number;

  country: string;

  oil: number;
}

const data: Data[] = [
  { year: 1970, country: 'Saudi Arabia', oil: 186.7 },
  { year: 1980, country: 'Saudi Arabia', oil: 480.4 },
  { year: 1990, country: 'Saudi Arabia', oil: 319.6 },
  { year: 2000, country: 'Saudi Arabia', oil: 465 },
  { year: 2008, country: 'Saudi Arabia', oil: 549.7 },
  { year: 2009, country: 'Saudi Arabia', oil: 428.4 },

  { year: 1970, country: 'USA', oil: 557.8 },
  { year: 1980, country: 'USA', oil: 423.2 },
  { year: 1990, country: 'USA', oil: 340.1 },
  { year: 2000, country: 'USA', oil: 282.9 },
  { year: 2008, country: 'USA', oil: 280 },
  { year: 2009, country: 'USA', oil: 298.9 },

  { year: 1970, country: 'Mexico', oil: 24.7 },
  { year: 1980, country: 'Mexico', oil: 109.2 },
  { year: 1990, country: 'Mexico', oil: 145.3 },
  { year: 2000, country: 'Mexico', oil: 148.3 },
  { year: 2008, country: 'Mexico', oil: 132.1 },
  { year: 2009, country: 'Mexico', oil: 121.6 },
];

@Injectable()
export class Service {
  getData(): Data[] {
    return data;
  }
}
