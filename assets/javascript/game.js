$( document ).ready(function() {
    console.log( "ready!" );
});

var computerNumber = 0
var sapphire = 0
var emerald = 0
var diamond = 0
var ruby = 0
var points = 0
var wins = 0
var loses = 0

var startGame = $("#startButton").on("click", function() {
    computerNumber = Math.floor((Math.random() * 120) + 19);
    $(".computerNumber").text(computerNumber + " is your number to match!");

    sapphire = Math.floor((Math.random() * 12) + 1);
    console.log("sapphire: " + sapphire);


    emerald = Math.floor((Math.random() * 12) + 1);
    console.log("emerald: " + emerald);


    diamond = Math.floor((Math.random() * 12) + 1);
    console.log("diamond: " + diamond);


    ruby = Math.floor((Math.random() * 12) + 1);
    console.log("ruby: " + ruby);

})

$("#sapphire").on("click", function() {
    points = points + sapphire;
    $(".points").text(points);
})

$("#emerald").on("click", function() {
    points = points + emerald;
    $(".points").text(points);
})

$("#diamond").on("click", function() {
    points = points + diamond;
    $(".points").text(points); 
})

$("#ruby").on("click", function() {
    points = points + ruby;
    $(".points").text(points);
})
