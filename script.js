function calculateBMI() {
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var isHealthy = document.getElementById("healthy").checked;

    if (age > 0 && weight > 0 && height > 0) {
            var bmi = weight / ((height / 100) ** 2);
            var category = getBMICategory(gender, age, bmi, isHealthy);
            displayResult(bmi, category);
          } else {
            alert("Please enter valid values for age, weight, and height.");
          }
        }

        function getBMICategory(gender, age, bmi, isHealthy) {
              if (gender === "male") {
                if (age >= 18 && age <= 24) {
                  return isHealthy ? "Healthy Weight" : "Not Healthy";
                } else if (age >= 25 && age <= 29) {
                  return "Overweight";
                } else if (age >= 30) {
                  return "Obese";
                } else {
                  return "Underweight";
                }
              } else {
                if (age >= 18 && age <= 24) {
                  return isHealthy ? "Healthy Weight" : "Not Healthy";
                } else if (age >= 25 && age <= 29) {
                  return "Overweight";
                } else if (age >= 30) {
                  return "Obese";
                } else {
                  return "Underweight";
                }
              }
            }
        
            function displayResult(bmi, category) {
              var resultDiv = document.getElementById("result");
              resultDiv.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + category;
            }
  
