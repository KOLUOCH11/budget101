function calculate() {
	let income = document.getElementById("income").value;
	let housing = document.getElementById("housing").value;
	let food = document.getElementById("food").value;
	let utilities = document.getElementById("utilities").value;
	let transportation = document.getElementById("transportation").value;
	let other = document.getElementById("other").value;

	let totalExpenses = parseInt(housing) + parseInt(food) + parseInt(utilities) + parseInt(transportation) + parseInt(other);
	let budget = income - totalExpenses;

	document.getElementById("budget").innerHTML = "$" + budget.toFixed(2);
}
