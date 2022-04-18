// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    })
    
    function timeTracker() {
        //get how much time is left
        var timeNow = moment().hour();

 // loop over time blocks
/* $(".time-block").each(function () {
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


        
