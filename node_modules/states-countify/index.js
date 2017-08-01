// index.js 

// Module Dependencies.
var fs = require('fs');

var StatesCountify = {};
var allStates = ( 'AK.AL.AR.AZ.CA.CO.CT.DE.FL.GA.'
                + 'HI.IA.ID.IL.IN.KS.KY.LA.MA.MD.'
                + 'ME.MI.MN.MO.MS.MT.NC.ND.NE.NH.'
                + 'NJ.NM.NV.NY.OH.OK.OR.PA.RI.SC.'
                + 'SD.TN.TX.UT.VA.VT.WA.WI.WV.WY' ).split('.')

// Iterate through each state.
for (var i = 0, il = allStates.length; i < il; ++i) {

  // Setup helpers for the current state and its source path.
  var current = allStates[i];
  var source = 'source/' + current + '.geo.json'

  // Each state will get its JSON geometries.
  StatesCountify[current] = fs.readFileSync(source).toString();
}

module.exports = StatesCountify;
