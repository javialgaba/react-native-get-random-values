const { NativeModules } = require("react-native");

let getRandomBase64;

try {
  getRandomBase64 = NativeModules.ExpoRandom.getRandomBase64String;
} catch (e) {
  getRandomBase64 = NativeModules.RNGetRandomValues.getRandomBase64;
}

module.exports = getRandomBase64;
