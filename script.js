// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// Need to display current date and time in the Headers,
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// Need to create conditionals to determin if a time block is in the past present or future and apply the style accordingly.
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// need to get input from user and save into locale Storage.
// upon reload need to retrieve user input from storage and display on the screen.

$(document).ready(function () {
  console.log("this is loading");
  console.log(moment());

  // dom variables

  // js varibles
  var m = moment();
  var currentTime = m.format("HH");
  console.log(currentTime);
  var timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // function definitions
  //create are our time blocks
  function createBlock() {
    //
    /*
      <div class="row time block">
        <div class="col-sm-1 hour">9am</div>
        <textarea class="col-sm-10 description"></textarea>
        <button class="saveBtn btn col-sm-1" id="9">Save</button>
      </div>
      //1. create what you want via html
      //2. create the vars
      //3. style it
      //4. parent and child and append to each other
      //5. append to html
      */
    //.container
    for (var i = 0; i < timeArr.length; i++) {
      var d1 = $("<div>");
      d1.attr("class", "row time block");

      var d2 = $("<div>");
      d2.attr("class", "col-sm-1 hour");
      d2.text(timeArr[i]);
      //   cond to update the milt -> normal time
      if (timeArr[i] > 12) {
        d2.text(timeArr[i] - 12 + "PM");
      }
      if (timeArr[i] < 12) {
        d2.text(timeArr[i] + "AM");
      }
      if (timeArr[i] === 12) {
        d2.text(timeArr[i] + "PM");
      }

      var textArea = $("<textArea>");
      textArea.attr("id", timeArr[i]);

      //when is it present (timeArr[i] and currentTime)
      if (timeArr[i] == currentTime) {
        textArea.attr("class", "col-sm-10 description present " + timeArr[i]);
      }
      //when is it past?
      if (timeArr[i] < currentTime) {
        textArea.attr("class", "col-sm-10 description past " + timeArr[i]);
      }

      if (timeArr[i] > currentTime) {
        textArea.attr("class", "col-sm-10 description future " + timeArr[i]);
      }

      var btn = $("<button>");
      btn.attr("class", "saveBtn btn col-sm-1");
      btn.attr("id", timeArr[i]);
      btn.text("Save");

      d1.append(d2);
      d1.append(textArea);
      d1.append(btn);

      $(".container").append(d1);
    }

    //onclick trigger on .saveBtn
    $(".saveBtn").click(function () {
      console.log($(this).attr("id"));

      var nine = $("#9").val();
      //set local storage
      if (nine) {
      localStorage.setItem("9", nine);
      }

      var ten = $("#10").val();
      //set local storage
      if (ten) {
      localStorage.setItem("10", ten);
      } 

      var eleven = $("#11").val();
      //set local storage
      if (eleven) {
        localStorage.setItem("11", eleven);
      }

      var twelve = $("#12").val();
      //set local storage
      if (twelve) {
      localStorage.setItem("12", twelve);
      }

      var thirteen = $("#13").val();
      //set local storage
      if (thirteen) {
      localStorage.setItem("13", thirteen);
      }

      var fourteen = $("#14").val();
      //set local storage
      if (fourteen) {
      localStorage.setItem("14", fourteen);
      }

      var fifteen = $("#15").val();
      //set local storage
      if (fifteen) {
      localStorage.setItem("15", fifteen);
      }

      var sixteen = $("#16").val();
      //set local storage
      if (sixteen) {
      localStorage.setItem("16", sixteen);
      }

      var seventeen = $("#17").val();
      //set local storage
      if (seventeen) {
      localStorage.setItem("17", seventeen);
      }

    });

    //all the jquery to get data from localstorage
    // $(".11").getItem("11")
    var rNine = localStorage.getItem("9");
    console.log(rNine);
    $("#9").text(rNine);

    var rTen = localStorage.getItem("10");
    console.log(rTen);
    $("#10").text(rTen);

    var rEleven = localStorage.getItem("11");
    console.log(rEleven);
    $("#11").text(rEleven);

    var rTwelve = localStorage.getItem("12");
    console.log(rTwelve);
    $("#12").text(rTwelve);

    var rThirteen = localStorage.getItem("13");
    console.log(rThirteen);
    $("#13").text(rThirteen);

    var rFourteen = localStorage.getItem("14");
    console.log(rFourteen);
    $("#14").text(rFourteen);

    var rFifteen = localStorage.getItem("15");
    console.log(rFifteen);
    $("#15").text(rFifteen);

    var rSixteen = localStorage.getItem("16");
    console.log(rSixteen);
    $("#16").text(rSixteen);

    var rSeventeen = localStorage.getItem("17");
    console.log(rSeventeen);
    $("#17").text(rSeventeen);

    

  }
  $("#currentDay").text(m.format("ddd MMM Mo YYYY"));
  createBlock();
});
