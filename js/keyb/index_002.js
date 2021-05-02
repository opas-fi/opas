let Keyboard = window.SimpleKeyboard.default;
let KeyboardLayouts = window.SimpleKeyboardLayouts.default;


let layout = new KeyboardLayouts().get("arabic");

let myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: layout
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  console.log("Button pressed", button);
}
