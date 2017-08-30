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
  else {
    error_message(obj);
  }
};

Bmi_calculator.prototype.imperial_bmi = function(obj) {
  var weight_pounds = obj.weight_pounds;
  var height_feets = obj.height_feets;
  var height_inches = obj.height_inches;
  if (weight_pounds > 0 && height_feets > 0) {
    var final_bmi = (weight_pounds * 703) / (((height_feets * 12) + height_inches) * ((height_feets * 12) + height_inches));
    obj.bmi_value = parseFloat(final_bmi.toFixed(2));
    set_bmi_message(obj);
  }
  else {
    error_message(obj);
  }
};

function set_bmi_message(obj) {
  if (obj.bmi_value < 18.5) {
    obj.bmi_message = "underweight";
  }
  if (obj.bmi_value > 18.5 && obj.bmi_value < 25) {
    obj.bmi_message = "normal (and I mean normal weight, not normal person. How would I know that?)";
  }
  if (obj.bmi_value > 25 && obj.bmi_value < 30) {
    obj.bmi_message = "overweight";
  }
  if (obj.bmi_value > 30) {
    obj.bmi_message = "obese";
  }
};

function error_message(obj) {
  obj.error_mess = "Do you want to be undefined, or what? Enter your real values please!";
};
