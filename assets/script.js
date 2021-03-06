// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save to local storage
        localStorage.setItem(time, text);
    })
    
    function timeTracker() {
        //get how much time is left
        var timeNow = moment().hour();

 
$(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
     // checks the time and starts to change the color indicators depending on the current state(present,past,future)
     if (blockTime < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (blockTime === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

    }
})
}
timeTracker();
})


        
