// Generate four digit random number:
document.getElementById('generate-pin-btn').addEventListener('click', function () {
  const fourDigitPin = Math.floor(1000 + Math.random() * 9000);
  document.getElementById('pin-display').value = fourDigitPin;

  // set user input display empty when generateBtn is clicked
  document.getElementById('input-display').value = ''; 
});

// Get output from the user input display:
function getUserDisplay() {
  return document.getElementById('input-display').value;
}

// Update user input display:
function printUserDisplay(num) {
  document.getElementById('input-display').value = num;

}

// show clicked number
function userInput() {
  let output = getUserDisplay();
  if (output != NaN) {
    //if output is a number
    output = output + this.id;
    // if number is maximum 4 digit
    if (output.length < 5) {
      printUserDisplay(output);
    }
  }
}

// capture clicked number
let numberBtn = document.getElementsByClassName('number');
for (let i = 0; i < numberBtn.length; i++) {
  numberBtn[i].addEventListener('click', userInput);
}

// All Clear (C) and Backspace(<) handler
let deleteBtn = document.getElementsByClassName('delete-btn');
for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function () {
    if (this.id == 'clear-all') {
      printUserDisplay('');
      // Remove alert every time clear button is being clicked:
      alertNotification('clearNotification');
    }
    if (this.id == 'backspace') {
      let output = getUserDisplay().toString();
      if (output) {
        //if output has a value
        output = output.substr(0, output.length - 1);
        printUserDisplay(output);
        // Remove alert every time backspace is being clicked:
        alertNotification('clearNotification');
      }
    }
  });
}

// Submit button onclick action, notification alert when submit button is clicked, and action left
function handleSubmit() {
  const pinGenerated = document.getElementById('pin-display').value;
  const userEntered = getUserDisplay();

  if (pinGenerated == '' && userEntered == '') { // both display empty
    alertNotification('empty-pin');
  } else if (pinGenerated == '') { // pin display empty
    alertNotification('empty-pin');
  } else if (userEntered == '') { // user input display empty
    alertNotification('emptyInputDisplay');
  } else if (pinGenerated == userEntered) {
    //Success Alert
    alertNotification('success');
  } else {
    // Failed Alert
    alertNotification('failed');
    // call count left function:
    leftRemainder();

  }

}

// Count left remainder with disable submit and generate pin button:
function leftRemainder() {
  let countLeft = parseInt(document.getElementById("count-left").innerText);
  countLeft = countLeft - 1;
  document.getElementById("count-left").innerText = countLeft;
  if (countLeft == 0) {
    document.getElementById("submit-btn").disabled = true;
    document.getElementById("generate-pin-btn").disabled = true;
    alertNotification('helpText');

  }
}

// Success, Failed, empty pin, empty user input display, clear notification,
// and help text when time out notification alert Actions:
function allAlert(Id, value) {
  document.getElementById(Id).style.display = value;
}
// All  notification type:
function alertNotification(alertType) {
  switch (alertType) {
    case 'success':
      allAlert('empty-pin', 'none');
      allAlert('matched', 'block');
      allAlert('unmatched', 'none');
      allAlert('empty-input-display', 'none');
      allAlert('help-text', 'none');
      break;

    case 'failed':
      allAlert('empty-pin', 'none');
      allAlert('matched', 'none');
      allAlert('unmatched', 'block');
      allAlert('empty-input-display', 'none');
      allAlert('help-text', 'none');

      break;
    case 'empty-pin':
      allAlert('empty-pin', 'block');
      allAlert('matched', 'none');
      allAlert('unmatched', 'none');
      allAlert('empty-input-display', 'none');
      allAlert('help-text', 'none');
      break;

    case 'emptyInputDisplay':
      allAlert('empty-pin', 'none');
      allAlert('matched', 'none');
      allAlert('unmatched', 'none');
      allAlert('empty-input-display', 'block');
      allAlert('help-text', 'none');

      break;

    case 'clearNotification':
      allAlert('empty-pin', 'none');
      allAlert('matched', 'none');
      allAlert('unmatched', 'none');
      allAlert('empty-input-display', 'none');
      allAlert('help-text', 'none');
      break;

    case 'helpText':
      allAlert('empty-pin', 'none');
      allAlert('matched', 'none');
      allAlert('unmatched', 'none');
      allAlert('empty-input-display', 'none');
      allAlert('help-text', 'block');
      break;
  }
}


// Disable keyboard entry:
document.onkeydown = function (e) {
  return false;
};


// main page display none
document.getElementById('notifyDisplay', alertNotification('clearNotification'));






// function allAlert(successId, successValue, failedId, failedValue) {
//   document.getElementById(successId).style.display = successValue;
//   document.getElementById(failedId).style.display = failedValue;
// }

// function successAlert() {
//   document.getElementById('matched').style.display = 'block';
//   document.getElementById('unmatched').style.display = 'none';
// }

// function failedAlert() {
//   document.getElementById('matched').style.display = 'none';
//   document.getElementById('unmatched').style.display = 'block';
// }

// function removeAlert() {
//   document.getElementById('matched').style.display = 'none';
//   document.getElementById('unmatched').style.display = 'none';
// }