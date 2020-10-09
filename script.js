
$(document).ready(function () {
  

  var m = moment();
  var currentTime = m.format("HH");
  var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  //this function creates the time blocks.
  function createBlock() {
    for (var i = 0; i < timeArr.length; i++) {
      var d1 = $("<div>");
      d1.attr("class", "row time block");

      var d2 = $("<div>");
      d2.attr("class", "col-sm-1 hour");
      d2.text(timeArr[i]);
      //this conditional update the military time to am pm.
      if (timeArr[i] > 12) {
        d2.text(timeArr[i] - 12 + "PM");
      }
      if (timeArr[i] < 12) {
        d2.text(timeArr[i] + "AM");
      }
      if (timeArr[i] === 12) {
        d2.text(timeArr[i] + "PM");
      }
      // this variable is for the text field.
      var textArea = $("<textArea>");
      textArea.attr("id", timeArr[i]);

      // these conditionals determine if the time block falls in the past, present, or future and applies the proper attribute
      //when is it present?
      if (timeArr[i] == currentTime) {
        textArea.attr("class", "col-sm-10 description present " + timeArr[i]);
      }
      //when is it past?
      if (timeArr[i] < currentTime) {
        textArea.attr("class", "col-sm-10 description past " + timeArr[i]);
      }
      // when is it future?
      if (timeArr[i] > currentTime) {
        textArea.attr("class", "col-sm-10 description future " + timeArr[i]);
      }

      var btn = $("<button>");
      btn.attr("class", "saveBtn btn col-sm-1");
      btn.attr("id", timeArr[i]);
      btn.text("Save");
      // this appends the elements for the time block to the div with class container.
      d1.append(d2);
      d1.append(textArea);
      d1.append(btn);

      $(".container").append(d1);
    }

    // this function triggers the save function.
    $(".saveBtn").click(function () {
      console.log($(this).attr("id"));
      // these variables grab the user input and save it to localStorage.
      var nine = $("#9").val();
      if (nine) {
        localStorage.setItem("9", nine);
      }

      var ten = $("#10").val();
      if (ten) {
        localStorage.setItem("10", ten);
      }

      var eleven = $("#11").val();
      if (eleven) {
        localStorage.setItem("11", eleven);
      }

      var twelve = $("#12").val();
      if (twelve) {
        localStorage.setItem("12", twelve);
      }

      var thirteen = $("#13").val();
      if (thirteen) {
        localStorage.setItem("13", thirteen);
      }

      var fourteen = $("#14").val();
      if (fourteen) {
        localStorage.setItem("14", fourteen);
      }

      var fifteen = $("#15").val();
      if (fifteen) {
        localStorage.setItem("15", fifteen);
      }

      var sixteen = $("#16").val();
      if (sixteen) {
        localStorage.setItem("16", sixteen);
      }

      var seventeen = $("#17").val();
      if (seventeen) {
        localStorage.setItem("17", seventeen);
      }
    });

    // these variable s store the retrieved user input from local Storage
    // it is then displayed on the screen.
    var rNine = localStorage.getItem("9");
    $("#9").text(rNine);

    var rTen = localStorage.getItem("10");
    $("#10").text(rTen);

    var rEleven = localStorage.getItem("11");
    $("#11").text(rEleven);

    var rTwelve = localStorage.getItem("12");
    $("#12").text(rTwelve);

    var rThirteen = localStorage.getItem("13");
    $("#13").text(rThirteen);

    var rFourteen = localStorage.getItem("14");
    $("#14").text(rFourteen);

    var rFifteen = localStorage.getItem("15");
    $("#15").text(rFifteen);

    var rSixteen = localStorage.getItem("16");
    $("#16").text(rSixteen);

    var rSeventeen = localStorage.getItem("17");
    $("#17").text(rSeventeen);
  }

  // this sets the current Time.
  $("#currentDay").text(m.format("ddd MMM Mo YYYY"));
  // this calls the function to create the time blocks.
  createBlock();
});
