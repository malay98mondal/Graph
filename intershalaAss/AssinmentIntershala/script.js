function plotGraph() {
	// Get input and max values
	var inputValue = document.getElementById("input-value").value;
	var maxValue = document.getElementById("max-value").value;
	
	// Check if input value is valid
	if (isNaN(inputValue) || isNaN(maxValue)) {
		alert("Please enter valid numbers.");
		return;
	}
	
	// Convert input and max values to percentages
	var inputPercentage = (inputValue / maxValue) * 100;
	var maxPercentage = 100;
	
	// Check if input value is greater than max value
	if (inputPercentage > maxPercentage) {
		// Send Ajax request to handle error alert
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "handle_error.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				alert(xhr.responseText);
			}
		};
		xhr.send("message=Input value is greater than max value.");
		return;
	}
	
	// Update graph bars
	document.querySelector(".graph-bar-max").style.height = maxPercentage + "%";
	document.querySelector(".graph-bar-input").style.height = inputPercentage + "%";
}
