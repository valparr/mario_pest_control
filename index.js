var totalButton = document.getElementById("totalButton");



function getPrice() {
var goomPrice = document.getElementById("goom").value;
var bombPrice = document.getElementById("bomb").value;
var cheepPrice = document.getElementById("cheep").value;

var result = parseInt(goomPrice * 5) + parseInt(bombPrice * 7) + parseInt(cheepPrice * 11);

alert(`Your total price for pest removal comes to... \n${result} coins.\nThank you for using Mario Pest Control!`);
}
