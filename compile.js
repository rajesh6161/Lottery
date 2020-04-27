const path = require('path');
const fs = require('fs');
const solc = require('solc');
const samplePath = path.resolve(__dirname, "contracts", "sample.sol");
const source = fs.readFileSync(samplePath, "utf8");

var input = {
  language: 'Solidity',
  sources: {
    'Sample.sol':{
      content: source
    }
  },
  settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}


var output = JSON.parse(solc.compile(JSON.stringify(input)));

var x = output.contracts['Sample.sol']['Sample'];
module.exports = x;
