function calculate(){
    let number1 = document.querySelector(".age1").value
    let number2 = document.querySelector(".age2").value
    let output = document.querySelector(".theDifference")

    let theDifference = number1 - number2;

    output.innerHTML = theDifference
}