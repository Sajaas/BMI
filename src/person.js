function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_pounds = attr.weight_pounds;
  this.height_feets = attr.height_feets;
  this.height_inches = attr.height_inches;

  Person.prototype.calculate_bmi = function () {
    calculator = new Bmi_calculator();
    calculator.metric_bmi(this);
    // calculator_2 = new Bmi_calculator();
    // calculator_2.imperial_bmi(this);
  };

  Person.prototype.calculate_bmi_imperial = function () {
    calculator_2 = new Bmi_calculator();
    calculator_2.imperial_bmi(this);
  };
}
