import { Haiku } from './../src/haiku.js';

describe('Haiku', () => {

  test('should determine if all inputs have values entered', () => {
    let haiku = new Haiku("words","1234","words");
    expect(haiku.line1).toEqual("words");
    expect(haiku.line2).toEqual("1234");
    expect(haiku.line3).toEqual("words");
  });
  test('Program checks that only letters and punctuation are inputted', () => {
    let haiku = new Haiku("words","1234","words");
    expect(haiku.line1).toEqual("words");
    expect(haiku.line2).toEqual("words");
    expect(haiku.line3).toEqual("words");
  });
});
