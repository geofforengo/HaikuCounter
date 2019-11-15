import { Haiku } from './../src/haiku.js';
import { onlyWords } from './../src/onlyWords.js';

describe('Haiku', () => {

  test('should determine if all inputs have values entered', () => {
    let haiku = new Haiku("words","","words");
    expect(haiku.checkFilled()).toEqual("Please enter words for every line");
  });
  test('Program checks that only letters and punctuation are inputted', () => {
    let notHaiku = new Haiku("words","words 1","words");
    expect(notHaiku.onlyWords()).toEqual("Please use word characters only");
  });
  // test('Program checks that only letters and punctuation are inputted', () => {
  //   let haiku = new Haiku("words and","words and","words");
  //   expect(haiku.line1).toEqual("words" "and");
  //   expect(haiku.line2).toEqual("words and");
  //   expect(haiku.line3).toEqual("words");
  // });

});
