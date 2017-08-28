function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;

  Person.prototype.calculate_bmi = function () {
    calculator = new Bmi_calculator();
    calculator.metric_bmi(this);
  };
}
