
export const AccountTypes : {[key : string] : string} = {
    VENUE_MANAGER: 'Venue Manager',
    BAND_MANAGER: 'Band Manager',
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
}


export const PAGES = [
  {"route":["Dashboard"], "name":"Dashboard Home"},
  {"route":["FindBand"], "name":"Find Bands"},
  {"route":["DashboardVM"], "name":"Venue Manager Tools"},
  {"route":["DashboardADM"], "name":"Admin Tools"},
  {"route":["DashboardBM"], "name":"Band Manager Tools"},
  {"route":["AccountSettings"], "name":"Account Settings"}
];
