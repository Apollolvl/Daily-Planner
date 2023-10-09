let textarea = $('textarea')
let currentDay = $('#currentDay')

$(document).ready(function() {
  $(".container-lg px-5").wrapAll("<div class='wrapper'></div>");
});


$(function () {
  $('button').on('click', function() {
    let inputValue = $(textarea).val()
    console.log('button was clicked')
    $(inputValue).ready(function() {
      if (localStorage.getItem('input')) {
        const data = localStorage.getItem("textarea");
        console.log(data); 
        $('textarea').text(inputValue)
      } else {
        localStorage.setItem('input', JSON.stringify(inputValue));
      }
    });
  });

  const currentDate = dayjs().format('MMM DD, YYYY');
  const currentTime = dayjs().format('hh:mm:ss A');
  $('#currentDay').text(currentTime, currentDate)

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
