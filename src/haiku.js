export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1,
    this.line2 = line2,
    this.line3 = line3
  }

  checkFilled() {
    if ((this.line1 === "") || (this.line2 === "") || (this.line3 === "")) {
      return "Please enter words for every line";
    }
  }
  onlyWords() {
    if ((/[^a-z]/i.test(this.line1)) || (/[^a-z]/i.test(this.line2)) || (/[^a-z]/i.test(this.line3))){
      return "Please use word characters only";
    }
  }
}
