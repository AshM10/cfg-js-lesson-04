function printOutput(myFirstform) {
  var TestVar = myFirstform.inputBox.value;
  document.getElementById("return").innerText = `You type: ${TestVar}`;
}

// function printOutput(newsletterSignup) {
//     var userFullName = newsletterSignup.fullName.value;
//     var userEmail = newsletterSignup.email.value;
//     document.getElementById('returnFullName').innerText =`Full Name: ${userFullName}`;
//     document.getElementById('returnEmail').innerText =`Email: ${userEmail}`;
//     alert(`Thank you for signing up, ${userFullName}!`);
// }
