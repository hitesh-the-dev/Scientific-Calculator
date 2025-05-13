

// JavaScript Improvements:
// Use event delegation instead of individual event listeners
// Implement a more structured approach with classes or modules
// Add proper error handling for all calculations
// Use data attributes to simplify button handling
// Fix the memory function implementation with visual feedback
// Remove duplicate code and use more reusable functions
// These changes would make the calculator more maintainable, responsive, and user-friendly.




//   HELP SECTION

let help = document.getElementsByClassName("help_child");
// Gets the help button element by class name
// Better approach: Use querySelector for more specific selection
// Example: let help = document.querySelector('.help_child');

let calculator = document.getElementsByClassName("container");
// Gets the calculator container element by class name
// Better approach: Use querySelector for more specific selection
// Example: let calculator = document.querySelector('.container');

let back = document.getElementById("back");
// Gets the back button element by ID
// This is already optimal as getElementById is the fastest selector method

help[0].addEventListener("click", () => {
  // Adds click event listener to the first element with class "help_child"
  // Better approach: Use querySelector to ensure we're targeting the right element

  let helpText = document.getElementById("helpText");
  // Gets the help text container element by ID

  helpText.style.display = "block";
  // Shows the help text by changing display to "block"
  // Better approach: Use classList.toggle for toggling visibility
  // Example: helpText.classList.toggle('visible');


  // NOTE:
//   ✅ Better Approach Using classList.toggle:
// Instead of directly changing the display, you can define a CSS class like this:

// .visible {
//   display: block;
// }
// And then use JavaScript:

// helpText.classList.toggle('visible');
  // This does the following:

// If helpText has the visible class, it removes it (hides the element).

// If helpText doesn't have the visible class, it adds it (shows the element).

  // This is cleaner and reusable.

  // NOTE: till now



  calculator[0].style.display = "none";
  // Hides the calculator by changing display to "none"
  // Better approach: Use classList.toggle for toggling visibility

  back.style.display = "block";
  // Shows the back button by changing display to "block"

  back.style.left = "50vw";
  // Positions the back button 50% from the left of viewport
  // Better approach: Use CSS classes instead of inline styles

//  NOTE:
  // Problem With Inline Styles in JavaScript:
  // It mixes logic (JS) with presentation (CSS).

  // It's harder to manage styles, especially in large projects.

  // It's less reusable — you can't apply it to multiple elements easily.

  // ✅ Better Approach: Use CSS Classes
  // Instead of setting the style via JavaScript like this:


  // back.style.left = "50vw";
  // You define a CSS class:


  // .center-left {
  //   left: 50vw;
  //   position: absolute; /* or relative/fixed as required */
  // }
  // Then in JavaScript, you apply the class:


  // back.classList.add("center-left");
  // Or if you're toggling:

  // back.classList.toggle("center-left");
  // NOTE: till now


  back.style.top = "90vh";
  // Positions the back button 90% from the top of viewport
  // Better approach: Use CSS classes instead of inline styles

  back.addEventListener("click", () => {
    // Adds click event listener to the back button
    // Issue: This creates a new event listener every time help is clicked
    // Better approach: Define the event handler outside and use removeEventListener

    helpText.style.display = "none";
    // Hides the help text

    calculator[0].style.display = "grid";
    // Shows the calculator with grid display

    back.style.display = "none";
    // Hides the back button
  });
});


// CUT SECTION
let cut = document.getElementById("cut");
// Gets the cut (close) button element by ID

cut.addEventListener("click", () => {
  // Adds click event listener to the cut button

  calculator[0].style.display = "none";
  // Hides the calculator

  back.style.display = "block";
  // Shows the back button

  back.style.top = "50vh";
  // Positions the back button 50% from the top of viewport

  back.style.left = "45vw";
  // Positions the back button 45% from the left of viewport

  back.addEventListener("click", () => {
    // Adds click event listener to the back button
    // Issue: This creates a new event listener every time cut is clicked
    // Better approach: Define the event handler outside and use removeEventListener

    calculator[0].style.display = "grid";
    // Shows the calculator with grid display

    back.style.display = "none";
    // Hides the back button
  });
});

// MINIMISE SECTION
let minimise = document.getElementById("minimise");
// Gets the minimize button element by ID

let count = 0;
// Counter to track toggle state
// Better approach: Use a boolean flag for better readability
// Example: let isMinimized = false;

minimise.addEventListener("click", (e) => {
  // Adds click event listener to the minimize button
  // Note: 'e' parameter is unused and can be removed

  if ((count & 1) == 0) {
    // Checks if count is even using bitwise AND
    // Better approach: Use modulo operator for clarity
    // Example: if (count % 2 === 0)

    calculator[0].style.width = "40vw";
    // Reduces calculator width to 40% of viewport width
    // Better approach: Use CSS classes instead of inline styles

    minimise.innerHTML = '<i class="far fa-square"></i>';
    // Changes icon to square
    // Better approach: Use classList.toggle to switch icons

    count++;
    // Increments counter
  } else {
    calculator[0].style.width = "60vw";
    // Restores calculator width to 60% of viewport width

    minimise.innerHTML = '<i class="fas fa-copy"></i>';
    // Changes icon back to copy

    count++;
    // Increments counter
  }
});

if (document.body.style.width <= "1000px") {
  // Checks if body width is less than or equal to 1000px
  // Issue: This will almost always be false as document.body.style.width is empty by default
  // Better approach: Use window.innerWidth or media queries in CSS

  back.style.right = "60vw";
  // Positions the back button 60% from the right of viewport
}

//    Functionality

// making button as keyboard button(1, 2, 3, 4, 5, 6, 7, 8, 9);

let storeNum = 0;
// Variable to store memory value for calculator
// Better approach: Use localStorage for persistence across sessions

let flag = 0;
// Flag variable (unused in the code)
// Better approach: Remove unused variables

let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let fourth = document.getElementById("fourth");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");
// Gets all number button elements by ID
// Better approach: Use querySelectorAll and loop through them
// Example: let numberButtons = document.querySelectorAll('.number-button');

let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");
let decimal = document.getElementById("decimal");
let rem = document.getElementById("rem");
let sqrt = document.getElementById("sqrt");
let lastCharDelete = document.getElementById("lastCharDelete");
let openParenthesis = document.getElementById("openParenthesis");
let closeParenthesis = document.getElementById("closeParenthesis");
let clearComplete = document.getElementById("clearComplete");
let pi = document.getElementById("pi");
let sin = document.getElementById("sin");
let cos = document.getElementById("cos");
let tan = document.getElementById("tan");
let EulerNumber = document.getElementById("EulerNumber");
let fact = document.getElementById("fact");
let sinh = document.getElementById("sinh");
let cosh = document.getElementById("cosh");
let tanh = document.getElementById("tanh");
let sinhInverse = document.getElementById("sinh-1");
let coshInverse = document.getElementById("cosh-1");
let tanhInverse = document.getElementById("tanh-1");
let sinInverse = document.getElementById("sin-1");
let cosInverse = document.getElementById("cos-1");
let tanInverse = document.getElementById("tan-1");
let abs = document.getElementById("abs");
let square = document.getElementById("square");
let cube = document.getElementById("cube");
let power = document.getElementById("power");
// Gets all operation button elements by ID
// Better approach: Group related buttons and use querySelectorAll
// Example: let operationButtons = document.querySelectorAll('.operation-button');

let ans = document.getElementById("ans");
// Gets the equals button element by ID

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
// Gets the input display elements by ID

let tenPower = document.getElementById("tenPower");
let eulerPower = document.getElementById("eulerPower");
let reverse = document.getElementById("reverse");
let cbroot = document.getElementById("cbroot");
let VariablePower = document.getElementById("VariablePower");
let log = document.getElementById("log");
let log2 = document.getElementById("log2");
let ln = document.getElementById("ln");
let logy = document.getElementById("logy");
let Exp = document.getElementById("Exp");
let mod = document.getElementById("mod");
let MS = document.getElementById("MS");
let MC = document.getElementById("MC");
let MR = document.getElementById("MR");
let Mpos = document.getElementById("M+");
let Mneg = document.getElementById("M-");
// Gets more operation and memory button elements by ID

document.body.addEventListener("keydown", (event) => {
  // Adds keydown event listener to the body
  // Better approach: Add to document or a specific container for better performance

  if (
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "0" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == `"` ||
    event.key == `a` ||
    event.key == `b` ||
    event.key == `c` ||
    event.key == `d` ||
    event.key == `e` ||
    event.key == `f` ||
    event.key == `g` ||
    event.key == `h` ||
    event.key == `i` ||
    event.key == `j` ||
    event.key == `k` ||
    event.key == `l` ||
    event.key == `m` ||
    event.key == `n` ||
    event.key == `o` ||
    event.key == `p` ||
    event.key == `q` ||
    event.key == `r` ||
    event.key == `s` ||
    event.key == `t` ||
    event.key == `u` ||
    event.key == `v` ||
    event.key == `w` ||
    event.key == `x` ||
    event.key == `y` ||
    event.key == `z` ||
    event.key == `*` ||
    event.key == `/` ||
    event.key == `>` ||
    event.key == `(` ||
    event.key == `)` ||
    event.key == `!` ||
    event.key == `.` ||
    event.key == `'` ||
    event.key == `%` ||
    event.key == `,` ||
    event.key == `^`
  )
    // Checks if key pressed is a valid input character
    // Better approach: Use a regex or array.includes() for cleaner code
    // Example: if (/[0-9+\-*/.()!%,^]/.test(event.key))

    input1.value += event.key;
    // Adds the key to the input display

  if (event.key == "Enter") {
    // Checks if Enter key is pressed

    let expression = input1.value.replace(/π/g, "pi");
    // Replaces π symbol with "pi" for math evaluation

    expression = input1.value.replace(/%/g, "*0.01");
    // Replaces % with "*0.01" for percentage calculation
    // Issue: This overwrites the previous expression variable
    // Better approach: Chain the replacements
    // Example: let expression = input1.value.replace(/π/g, "pi").replace(/%/g, "*0.01");

    try {
      let result = math.evaluate(expression);
      // Evaluates the mathematical expression using math.js library

      input2.value = result;
      // Displays the result
    } catch (error) {
      input2.value = "Not a correct mathematical expression";
      // Displays error message if expression is invalid
    }
  }

  if (event.key == "Backspace") {
    // Checks if Backspace key is pressed

    let strr = input1.value;
    // Gets current input value

    strr = strr.slice(0, -1);
    // Removes the last character
    // Better approach: Do this in one line
    // Example: input1.value = input1.value.slice(0, -1);

    input1.value = strr;
    // Updates the input display

    input2.value = math.evaluate(input1.value);
    // Evaluates and displays the result
    // Issue: This will throw an error if input1.value is empty or invalid
    // Better approach: Use try-catch here too

    if (input1.value == "") input2.value = "";
    // Clears the result display if input is empty
  }
});

// The following event listeners all follow the same pattern:
// They add the corresponding value to the input display when clicked
// Better approach: Use a single function and data attributes
// Example:
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     input1.value += button.dataset.value;
//   });
// });

one.addEventListener("click", () => {
  input1.value += "1";
});

two.addEventListener("click", () => {
  input1.value += "2";
});

three.addEventListener("click", () => {
  input1.value += "3";
});

fourth.addEventListener("click", () => {
  input1.value += "4";
});

five.addEventListener("click", (event) => {
  // Note: 'event' parameter is unused and can be removed
  input1.value += "5";
});

six.addEventListener("click", () => {
  input1.value += "6";
});

seven.addEventListener("click", () => {
  input1.value += "7";
});

eight.addEventListener("click", () => {
  input1.value += "8";
});

nine.addEventListener("click", () => {
  input1.value += "9";
});

zero.addEventListener("click", () => {
  input1.value += "0";
});

add.addEventListener("click", () => {
  input1.value += "+";
});

sub.addEventListener("click", () => {
  input1.value += "-";
});

mul.addEventListener("click", () => {
  input1.value += "*";
});

div.addEventListener("click", () => {
  input1.value += "/";
});

decimal.addEventListener("click", () => {
  input1.value += ".";
});

rem.addEventListener("click", () => {
  input1.value += "%";
});

sin.addEventListener("click", () => {
  input1.value += "sin(";
});

sinh.addEventListener("click", () => {
  input1.value += "sinh(";
});

sinInverse.addEventListener("click", () => {
  input1.value += "asin(";
});

sinhInverse.addEventListener("click", () => {
  input1.value += "asinh(";
});

cos.addEventListener("click", () => {
  input1.value += "cos(";
});

cosh.addEventListener("click", () => {
  input1.value += "cosh(";
});

cosInverse.addEventListener("click", () => {
  input1.value += "acos(";
});

coshInverse.addEventListener("click", () => {
  input1.value += "acosh(";
});

tan.addEventListener("click", () => {
  input1.value += "tan(";
});

tanh.addEventListener("click", () => {
  input1.value += "tanh(";
});

tanInverse.addEventListener("click", () => {
  input1.value += "atan(";
});

tanhInverse.addEventListener("click", () => {
  input1.value += "atanh(";
});

EulerNumber.addEventListener("click", () => {
  input1.value += "e";
});

fact.addEventListener("click", () => {
  input1.value += "!";
});

sqrt.addEventListener("click", () => {
  input1.value += "sqrt(";
});

abs.addEventListener("click", () => {
  input1.value += "abs(";
});

square.addEventListener("click", () => {
  input1.value += "^2";
});

cube.addEventListener("click", () => {
  input1.value += "^3";
});

power.addEventListener("click", () => {
  input1.value += "^";
});

tenPower.addEventListener("click", () => {
  input1.value += "10^";
});

eulerPower.addEventListener("click", () => {
  input1.value += "e^";
});

clearComplete.addEventListener("click", () => {
  // Clears both input displays
  input1.value = "";
  input2.value = "";
});

pi.addEventListener("click", () => {
  input1.value += `π`;
});

openParenthesis.addEventListener("click", () => {
  input1.value += "(";
});

closeParenthesis.addEventListener("click", () => {
  input1.value += ")";
});

reverse.addEventListener("click", () => {
  // Adds reciprocal function (1/x)
  if (input1.value != "") input1.value += "*1/";
  else input1.value += "1/";
  // Better approach: Check if there's already a value and handle accordingly
});

cbroot.addEventListener("click", () => {
  input1.value += "cbrt(";
});

VariablePower.addEventListener("click", () => {
  input1.value += "^(1/";
});

log.addEventListener("click", () => {
  input1.value += "log10(";
});

ln.addEventListener("click", () => {
  input1.value += "log(";
});

log2.addEventListener("click", () => {
  input1.value += "log2(";
});

logy.addEventListener("click", () => {
  input1.value += "log";
});

Exp.addEventListener("click", () => {
  if (input1.value != "")
    input1.value += "*10^";
  else
    input1.value += "10^";
});

mod.addEventListener("click", () => {
  input1.value += "mod";
});

// Memory functions
MS.addEventListener("click", () => {
  // Stores the current value in memory
  storeNum = Number(input1.value);
  // Better approach: Add visual feedback that value was stored
  // Example: Add a small "M" indicator in the UI
});

Mpos.addEventListener("click", () => {
  // Adds the current value to memory
  storeNum += Number(input1.value);
  // Better approach: Add visual feedback that value was added
});

Mneg.addEventListener("click", () => {
  // Subtracts the current value from memory
  storeNum -= Number(input1.value);
  // Better approach: Add visual feedback that value was subtracted
});

MR.addEventListener("click", () => {
  // Recalls the memory value
  input1.value = storeNum;
  // Better approach: Check if storeNum exists before setting
  // Example: if (storeNum !== 0) input1.value = storeNum;
})

MC.addEventListener("click", () => {
  // Clears the memory
  storeNum=0;
  // Better approach: Add visual feedback that memory was cleared
})

ans.addEventListener("click", () => {
  // Evaluates the expression when equals button is clicked
  let expression = input1.value.replace(/π/g, "pi");
  expression = expression.replace(/mod/g, "%");
  // Replaces π symbol with "pi" for math evaluation
  // Comment: The commented line below suggests there was an attempt to handle logarithms
  // .replace(/log\(/g, "log(10,");

  try {
    let result = math.evaluate(expression);
    // Evaluates the mathematical expression using math.js library

    input2.value = result;
    // Displays the result
  } catch (error) {
    input2.value = "Not a correct mathematical expression";
    // Displays error message if expression is invalid
  }
});

lastCharDelete.addEventListener("click", () => {
  // Deletes the last character when backspace button is clicked
  let str = input1.value;
  // Gets current input value

  str = str.slice(0, -1);
  // Removes the last character
  // Better approach: Do this in one line

  input1.value = str;
  // Updates the input display

  input2.value = math.evaluate(input1.value);
  // Evaluates and displays the result
  // Issue: This will throw an error if input1.value is empty or invalid
  // Better approach: Use try-catch here too

  if (input1.value == "") input2.value = "";
  // Clears the result display if input is empty
});