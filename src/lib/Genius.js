export default class Genius {
  static percentage(input, perc) {
    return input / 100 * perc;
  }

  static rng(max = 999, min = 0, isInt = true) {
    let generatedNumber = (Math.random() * max) + min;
    return isInt ? parseInt(generatedNumber) : generatedNumber;
  }
}