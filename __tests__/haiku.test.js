import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  test('should determine if all inputs have values entered', () => {
    let haiku = new Haiku("words","","words");
    expect(haiku.checkFilled()).toEqual("Please enter words for every line");
  });
  test('Program checks that only letters and punctuation are inputted', () => {
    let notHaiku = new Haiku("words","words 1","words");
    expect(notHaiku.onlyWords()).toEqual("Please use word characters only");
  });
  test('Program splits strings into more strings', () => {
    let stringHaiku = new Haiku("words and","words and","words");
    stringHaiku.splitStrings();
    console.log(stringHaiku);
    expect(stringHaiku.line1).toEqual("words","and");
    expect(stringHaiku.line2).toEqual("words and");
    expect(stringHaiku.line3).toEqual("words");
  });
});
