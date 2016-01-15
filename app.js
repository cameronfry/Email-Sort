// Sort email function to run on page load
function sortEmail() {

// Select string in email-data text box
emailString = document.getElementById("email-data").value

// Split emails into email array by new line
emailArray = emailString.split("\n");

// Create new empty array for stripped emails
  // For each string in array, search for @ symbol
    // Select string up to @ in each email in array to strip
      // Push stripped emails to strippedEmailArray

strippedEmailArray = [];

for (i = 0; i < emailArray.length; i++){

  var atChar = emailArray[i].search("@")

  var strippedEmails = emailArray[i].substr(0, atChar );

  strippedEmailArray.push(strippedEmails);
}

// Use sort method to sort array by capitalized emails alphabetically
// and then by lowercase emails alphabetically

strippedEmailArray.sort()

// Loop through strippedEmailArray to search for duplicates and store in duplicate variables
  // Check to see if first duplicate is indeed equal to the following
    // If duplicates, find index of first value and store in idOfDuplicate
      // Remove the duplicate using splice and id of duplicate
        // Set i to zero to reset loop and continue checking for duplicates
        // until there are no more duplicates

for (var i = 0; i < strippedEmailArray.length; i++){

  var firstDuplicate = strippedEmailArray[i]
  var followingDuplicate = strippedEmailArray[i+1];
  if( firstDuplicate === followingDuplicate ){
    var idOfDuplicate = strippedEmailArray.indexOf(firstDuplicate)
    strippedEmailArray.splice(idOfDuplicate,1)
  i = 0
  }

}

//Select text area two
  // Join array into string with line breaks

var sortedDataArea = document.getElementById("sorted-data");

sortedDataArea.innerHTML = strippedEmailArray.join("\n");

}

document.getElementById("sort").onclick = sortEmail;

// On page load run sort email function

//window.onload = sortEmail;
