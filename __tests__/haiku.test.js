import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  test('should determine if all inputs have values entered', () => {
    let haiku = new Haiku("words","","words");
    expect(haiku.checkFilled()).toEqual("Please enter words for every line");
  });
  // test('Program checks that only letters and punctuation are inputted', () => {
  //   let notHaiku = new Haiku("1-2;","words","words");
  //   let line1 = notHaiku.line1
  //   expect(line1.checkFilled()).toEqual("Please use letters only");
  //   // expect(haiku.line2).toEqual("words");
  //   // expect(haiku.line3).toEqual("words");
  // });
  // test('Program checks that only letters and punctuation are inputted', () => {
  //   let haiku = new Haiku("words and","words and","words");
  //   expect(haiku.line1).toEqual("words" "and");
  //   expect(haiku.line2).toEqual("words and");
  //   expect(haiku.line3).toEqual("words");
  // });

});
