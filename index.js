// function submitForm() {
//     var e = $("#fname").val()
//     var z = $("#lname").val()
//     var t = $("#message").val()
//     console.log("e",e,"z",z,"t",t)
//     if(e!=="" && z!=="" && t!==""){ 
//         var listItem = "<li>" + e + " " + t + " " + z + "</li>"
//         $("#myList").append(listItem)
//         $("#fname").val("")
//         $("#lname").val("")
//         $("#message").val("")
//     }
// }


var form = document.getElementById("form")
var firstNameInput = document.getElementById("fname")
var lastNameInput = document.getElementById("lname")
var output = document.getElementById("output")

form.addEventListener("submit", function(event) {
  event.preventDefault()
  var fNameValue = firstNameInput.value
  var lNameValue = lastNameInput.value
  output.textContent =" Hello"+" "+fNameValue+" "+lNameValue+" "+"! Your form has been submitted."
  firstNameInput.value = ""
  lastNameInput.value = ""
})


    var bookButton = document.getElementById("book")
    var firstNameInput = document.getElementById("fname")
    var lastNameInput = document.getElementById("lname")
    var output = document.getElementById("output")

    var counter = 0

    bookButton.addEventListener("click", function(event) {
    event.preventDefault()
    
    var firstName = firstNameInput.value
    var lastName = lastNameInput.value
    console.log(firstName,lastName)
    alert("Booking confirmed for"+" "+firstName+" "+lastName)
    
    counter++
    output.textContent = "Number of bookings"+" "+counter
    })

    var bookButton1 = document.getElementById("book1")
    var firstNameInput1 = document.getElementById("fname1")
    var lastNameInput1 = document.getElementById("lname1")
    var output1 = document.getElementById("output1")
    
    var counter1 = 0
    
    bookButton1.addEventListener("click", function(event) {
      event.preventDefault()
      
      var firstName = firstNameInput1.value
      var lastName = lastNameInput1.value
      
      alert("Booking confirmed for" + " " + firstName + " " + lastName)
      
      counter1++
      output.textContent = "Number of bookings" + " " + counter
    })
    
    