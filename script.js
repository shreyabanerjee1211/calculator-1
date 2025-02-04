//to do the calculator operations
function myfunc()
{
let x=document.getElementById("first").value;//Getting the first input value
x=Number(x);//Converting the value from string to number
let y=document.getElementById("op").value;//storing the operator value
let z=document.getElementById("second").value;//Getting the second input value
z=Number(z);//Converting the value from string to number
let res=0;
//used switch case for performing arithmetic operations based on the value of y

switch(y){
case '+':res = x + z;
         break;
case '-':res = x - z;
         break;
case '*':res = x * z;
         break;
case '/':res = x / z;
         break;
}
document.getElementById("res-ans").innerHTML=res;// Displaying the result
}
setInterval(myfunc,1000);


// Function to change the background color and store it in localStorage
function mycolor(col) {
    // Change the background color to the selected color
    document.body.style.backgroundColor = col;
    
    // Store the selected color in localStorage
    localStorage.setItem('background-color', col);
}

// Function to apply the stored color from localStorage when the page loads
function applyStoredColor() {
    // Get the stored color from localStorage
    let storedColor = localStorage.getItem('background-color');
    
    // If a color is stored, apply it to the background
    if (storedColor) {
        document.body.style.backgroundColor = storedColor;
        console.log("Stored color: " + storedColor); // Log for debugging
    } else {
        // If no color is stored, set the default color
        document.body.style.backgroundColor = "white";
        localStorage.setItem('background-color', "white");
    }
}

// Call the applyStoredColor function when the page loads
applyStoredColor();


  function validateNumber(input) //for validating the input so that no datatype other than number is allowed
{
    input.value = input.value.replace(/[^0-9 .]/g, ''); // Removes anything that's not a number
  }

