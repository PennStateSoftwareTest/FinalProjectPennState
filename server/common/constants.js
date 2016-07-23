

const ACCOUNT_TYPES = {
    VENUE: 'Venue Manager',
    BAND: 'Band Manager'
};
Object.freeze(ACCOUNT_TYPES);



const GENRE = {
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
Object.freeze(GENRE);


module.exports = {
    ACCOUNT_TYPE: ACCOUNT_TYPES,
    GENRE: GENRE
};
