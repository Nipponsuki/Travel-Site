function Person(name, fColor){
  this.name = name;
  this.fColor = fColor;
  this.greet = () => {
    alert(`Hillo my name is ${this.name} and my fav color is ${this.fColor}`);
  }
}
