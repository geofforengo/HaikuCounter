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
    else if (this.line1.inclues(/\W/)) {
      return "Please use letters only"
    }
  }

  toStrings() {
    let line1 = this.line1.split(' ');
    console.log(line1);
    let line2 = this.line2.split(' ');
    let line3 = this.line3.split(' ');
  }
}
