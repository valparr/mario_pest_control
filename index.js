var totalButton = document.getElementById("totalButton");




function getPrice() {
var goomPrice = document.getElementById("goom").value;
var bombPrice = document.getElementById("bomb").value;
var cheepPrice = document.getElementById("cheep").value;
var priceOutput = document.getElementById("out");


var result = parseInt(goomPrice * 5) + parseInt(bombPrice * 7) + parseInt(cheepPrice * 11);


priceOutput.innerHTML ="Your total comes to: " + result + " Coins";
}
getPrice();