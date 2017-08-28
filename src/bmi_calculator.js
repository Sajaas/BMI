function Bmi_calculator() {
}

Bmi_calculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var final_bmi = weight / (height / 100 * height / 100);
    obj.bmi_value = parseFloat(final_bmi.toFixed(2));
    set_bmi_message(obj);
  }

  function set_bmi_message(obj) {
    if (obj.bmi_value < 18.5) {
      obj.bmi_message = "Underweight";
    }
    if (obj.bmi_value > 18.5 && obj.bmi_value < 25) {
      obj.bmi_message = "Normal";
    }
    if (obj.bmi_value > 25 && obj.bmi_value < 30) {
      obj.bmi_message = "Overweight";
    }
    if (obj.bmi_value > 30) {
      obj.bmi_message = "Obese";
    }
  }
};
