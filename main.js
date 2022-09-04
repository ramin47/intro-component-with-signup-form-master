let FirstName = []
let LastName = []
let EmailAddress = []
let Password = []

let getFirstName = document.getElementById("input-firstname")
let getLastName = document.getElementById("input-lastname")
let getEmailAddress = document.getElementById("input-email")
let getPassword = document.getElementById("input-password")
let getButton = document.getElementById("btn-submit")
let getMessage = document.getElementById("show-message")
let getMessageTwo = document.getElementById("show-message-two")
let getMessageThree = document.getElementById("show-message-three")


getButton.addEventListener("click", function() {
    FirstName.push(getFirstName.value)
    getFirstName.value = " "
    localStorage.setItem("First-Name", FirstName)


    LastName.push(getLastName.value)
    getLastName.value = " "
    localStorage.setItem("Last-Name", LastName)

    EmailAddress.push(getEmailAddress.value)
    getEmailAddress.value = " "
    localStorage.setItem("Email-address", EmailAddress)

    Password.push(getPassword.value)
    getPassword.value = " "
    localStorage.setItem("Password", Password)

})





function showError() {
    showErrorTwo()
    showErrorThree()
    if (getEmailAddress.validity.valueMissing) {
      
      getMessage.textContent = "You need to enter an e-mail address.";
    } else if (getEmailAddress.validity.typeMismatch) {
      
      getMessage.textContent = "Entered value needs to be an e-mail address.";
    } else {
        console.log("Nothing!")
    }

}

function showErrorTwo() {
    if (getFirstName.value === " ") {

        getMessageTwo.textContent = "Please enter your name";
    } else {
        getMessageTwo.textContent = "";
    }

}

function showErrorThree() {
    if (getLastName.value === " ") {

        getMessageThree.textContent = "Please enter your Last Name";
    } else {
        getMessageThree.textContent = "";
    }

}

