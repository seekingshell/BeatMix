// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsIndex, newPresetArray=null) => {
  switch(requestType.toUpperCase()) {
    case 'GET':
      if(presetsIndex < 0 || presetsIndex >= presets.length) {
        // array index not found
        return [404];
      }

      // OK
      return [200, presets[presetsIndex]];
    case 'PUT':
      if(presetsIndex < 0 || presetsIndex >= presets.length) {
        // array index not found
        return [404];
      }

      presets[presetsIndex]=newPresetArray;
      // OK
      return [200, presets[presetsIndex]];
    default:
    // Bad Request
      return [400];
  }
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
