$( document ).ready(function() {
    console.log( "ready!" );
});

var startGame = $("#startButton").on("click", function() {
    var computerNumber = Math.floor((Math.random() * 120) + 19);
    console.log("test");
})

var addValueToCrystal //function to be passed to each crystal
var sapphire
var emerald
var diamond
var ruby
