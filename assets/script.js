// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

    })
    
 


        
