//This is the animate function, with the score variable calculated
//in the pet_test.js file passed in as a parameter
function animate(score) {
  //access images
  const rodentImg = $(".rodent");
  const catImg = $(".cat");
  const dogImg = $(".dog");

  //Using JQuery, hide all images
  rodentImg.hide();
  catImg.hide();
  dogImg.hide();

  //Depending on score, show image of rodent, cat or dog using jquery effects/animations
  if (score >= 0 && score <= 10) {
    rodentImg.slideDown(2000);
  } else if (score >= 11 && score <= 25) {
    catImg.fadeIn(2000);
  } else if (score >= 26 && score <= 50) {
    dogImg.css({ opacity: 0 }).show().animate({ opacity: 1 }, 2000);
  }

  //After 10 seconds, hide the results section
  setTimeout(() => {
    $("#results-section").hide();
  }, 10000);
}
