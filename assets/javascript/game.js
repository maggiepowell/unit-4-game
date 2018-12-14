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

$("#startButton").on("click", startGame())

function startGame() {
    points = 0;
    $(".points").text("Points Collected: " + points);
    computerNumber = Math.floor((Math.random() * 120) + 19);
    $(".computerNumber").text(computerNumber + " is your number to match!");
    sapphire = Math.floor((Math.random() * 12) + 1);
    emerald = Math.floor((Math.random() * 12) + 1);
    diamond = Math.floor((Math.random() * 12) + 1);
    ruby = Math.floor((Math.random() * 12) + 1);
}

$("#sapphire").on("click", function() {
    points = points + sapphire;
    $(".points").text("Points Collected: " + points);
    checkWins();
    console.log("points: " + points);
})

$("#emerald").on("click", function() {
    points = points + emerald;
    $(".points").text("Points Collected: " + points);
    checkWins();
    console.log("points: " + points);
})

$("#diamond").on("click", function() {
    points = points + diamond;
    $(".points").text("Points Collected: " + points);
    checkWins();
    console.log("points: " + points);
})

$("#ruby").on("click", function() {
    points = points + ruby;
    $(".points").text("Points Collected: " + points);
    checkWins();
    console.log("points: " + points);
})

function checkWins() {
if (points === computerNumber) {
    alert("You Won!");
    wins++;
    $('.wins').text ("Wins: " + wins);
    startGame();
}
else if (points > computerNumber) {
    alert("You Lost!");
    loses++;
    $('.loses').text ("Loses: " + loses);
    startGame();
}}