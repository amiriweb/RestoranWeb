class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favColor = favColor;
  }

  greet() {
    console.log("Hello, my name is" + this.name + "And my favorit color is" + this.favColor);
  }
}

export default Person;
