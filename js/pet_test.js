//run code once whole page has loaded
window.addEventListener("DOMContentLoaded", function () {
  //form variable
  const form = document.getElementById("test-form");

  //form submit event listener
  form.addEventListener("submit", function (e) {
    //prevent default form submission
    e.preventDefault();

    //access the values of the selected radio buttons for each question
    const question1 = document.querySelector("input[name='q1']:checked").value;
    const question2 = document.querySelector("input[name='q2']:checked").value;
    const question3 = document.querySelector("input[name='q3']:checked").value;
    const question4 = document.querySelector("input[name='q4']:checked").value;
    const question5 = document.querySelector("input[name='q5']:checked").value;

    //calculate score while parsing the string value to an integer
    let score =
      parseInt(question1) +
      parseInt(question2) +
      parseInt(question3) +
      parseInt(question4) +
      parseInt(question5);

    //access p element for test results
    const idealPetString = document.querySelector(".ideal-pet");
    //access p element for score
    let scoreString = document.querySelector(".score");

    //update score string with the score
    scoreString.innerHTML = "Congratulations! You have scored: " + score;

    //remove placeholder when submitting(temporary)
    idealPetString.innerHTML = "";

    //Determine ideal pet type based on score and update string
    if (score >= 0 && score <= 10) {
      idealPetString.innerHTML =
        "0-10 points: Consider low-maintenance pets like fish, reptiles, or small rodents.";
    } else if (score >= 11 && score <= 25) {
      idealPetString.innerHTML =
        "11-25 points: Cats or small to medium-sized dogs might be suitable.";
    } else if (score >= 26 && score <= 50) {
      idealPetString.innerHTML =
        "26-50 points: Larger dogs or more interactive pets like parrots or rabbits could be ideal.";
    }
  });
});
