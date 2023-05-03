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
		$.ajax({
			type: "POST",
			url: "handle_error.php",
			data: { message: "Input value is greater than max value." },
			success: function(response) {
				alert(response);
			},
			error: function(xhr, status, error) {
				alert("An error occurred while sending the request.");
			}
		});
		return;
	}
	
	// Update graph bars
	document.querySelector(".graph-bar-max").style.height = maxPercentage + "%";
	document.querySelector(".graph-bar-input").style.height = inputPercentage + "%";
}
