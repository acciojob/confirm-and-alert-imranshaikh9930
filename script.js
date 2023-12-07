//your JS code here. If required.
function showConfirmationDialog() {
  // Display the confirmation dialog
  const userClickedOk = confirm("Do you want to proceed?");

  // Check the user's choice
  if (userClickedOk) {
    alert("You clicked OK. Proceeding...");
  } else {
    alert("You clicked Cancel. Exiting...");
  }
}


showConfirmationDialog();