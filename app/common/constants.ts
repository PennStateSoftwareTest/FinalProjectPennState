
export const AccountTypes : {[key : string] : string} = {
    VENUE_MANAGER: 'Venue Manager',
    BAND_MANAGER: 'Band Manager',
};

export enum Criteria {
  GENRE = <any>'genre'
}

export const Genre : {[key: string] : string} = {
  ROCK:'Rock',
  RAP:'Rap',
  POP:'Pop',
  COUNTRY:'Country',
  JAZZ:'Jazz',
  BLUES:'Blues',
  ACOUSTIC:'Acoustic',
  FOLK:'Folk',
  BLUEGRASS:'Bluegrass',
  HIP_HOP:'Hip Hop',
  PUNK:'Punk',
  ROCKABILLY:'Rockabilly',
  METAL:'Metal',
  ALTERNATIVE:'Alternative',
  POLKA:'Polka',
  DISCO:'Disco',
  CHRISTIAN:'Christian',
  REGGAE:'Reggae',
  AMERICANA:"Americana"
};


export const PAGES = [
  {"route":["Suggestions"], "name":"Suggested Bands"},
    {"route":["AccountSettings"], "name":"Venue Settings"},
  {"route":["FindBand"], "name":"Find Bands"},

  {"route":["DashboardBM"], "name":"Band Settings"},

    {"route":["DashboardADM"], "name":"Admin Tools"}
];
