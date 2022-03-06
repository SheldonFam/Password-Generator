let data = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ".",
  "?",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "@",
  "#",
  "$",
  "%",
  "&",
  "*",
];

function generatePassword() {
  generatePassword1();
  generatePassword2();
  generatePassword3();
  generatePassword4();
}

function generatePassword1() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * data.length);
    password += data[random];
  }
  document.getElementById("pass1").value = password;
}

function generatePassword2() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * data.length);
    password += data[random];
  }

  document.getElementById("pass2").value = password;
}

function generatePassword3() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * data.length);
    password += data[random];
  }

  document.getElementById("pass3").value = password;
}

function generatePassword4() {
  let password = "";
  for (let i = 0; i < 10; i++) {
    let random = Math.floor(Math.random() * data.length);
    password += data[random];
  }

  document.getElementById("pass4").value = password;
}
