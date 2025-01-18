// 1st pattern
let s = 5;
for (let o = 1; o <= s; o++) {
  for (let p = s; p >= 1; p--) {
    if (o >= p) {
      document.write("&nbsp&nbsp*&nbsp");
    }
  }
  document.write("</br>");
}
document.write("</br>");
//2nd patterm
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("&nbsp&nbsp&nbsp&nbsp");
  }
  for (let k = 5; k >= i; k--) {
    document.write("*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
  }
  document.write("</br>");
}
document.write("</br>");
// 3rd pattern
for (let i = 1; i <= 5; i++) {
  for (let k = 5; k > i; k--) {
    document.write("&nbsp&nbsp&nbsp&nbsp&nbsp");
  }
  for (let j = 1; j <= i; j++) {
    document.write("&nbsp&nbsp*&nbsp");
  }
  document.write("</br>");
}
document.write("</br>");

//4th pattern

for (let i = 1; i <= 5; i++) {
  for (let k = 5; k > i; k--) {
    document.write("&nbsp&nbsp&nbsp&nbsp");
  }
  for (let j = 1; j <= i; j++) {
    document.write("&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp");
  }
  document.write("</br>");
}
document.write("</br>");

// 5th pattern
let t = 5;
for (let m = 1; m <= t; m++) {
  for (let l = t; l >= 1; l--) {
    if (l >= m) {
      document.write("&nbsp&nbsp*&nbsp");
    } else {
      document.write("&nbsp&nbsp");
    }
  }
  document.write("</br>");
}

//6th pattern
for (let i = 1; i <= 5; i++) {
  for (let k = 5; k > i; k--) {
    document.write("&nbsp&nbsp&nbsp&nbsp");
  }
  for (let j = 1; j <= i; j++) {
    document.write("&nbsp&nbsp*&nbsp&nbsp&nbsp&nbsp");
  }
  document.write("</br>");
}
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("&nbsp&nbsp&nbsp&nbsp");
  }
  for (let k = 5; k >= i; k--) {
    document.write("*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
  }
  document.write("</br>");
}
document.write("</br>");

// 7th pattern
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
  }
  for (let k = 5; k >= i; k--) {
    document.write("&nbsp&nbsp&nbsp&nbsp*");
  }
  document.write("</br>");
}

// 8th pattern
for (let j = 5; j >= 0; j--) {
  document.write("&nbsp*&nbsp");
}
document.write("</br>");
for (let i = 0; i <= 5; i++) {
  for (let k = 0; k < 1; k++) {
    document.write("*");
  }

  for (let l = 0; l < 1; l++) {
    document.write(
      "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*"
    );
  }
  document.write("</br>");
}
for (let j = 5; j >= 0; j--) {
  document.write("&nbsp*&nbsp");
}
document.write("</br>");
document.write("</br>");

// 9th pattern
let g = 10;
for (let o = 1; o <= g; o++) {
  for (let p = g; p > 1; p--) {
    if (o >= p) {
      if (o <= 5) document.write("&nbsp&nbsp*&nbsp");
    }
    if (o <= p) {
      if (o > 5) document.write("&nbsp&nbsp*&nbsp");
    }
  }
  document.write("</br>");
}
document.write("</br>");
document.write("</br>");

// 10th pattern
let y = 10;
for (let o = 1; o <= y; o++) {
  for (let p = 1; p <= o; p++) {
    document.write("&nbsp*&nbsp");
  }
  document.write("</br>");
}
for (let o = 1; o <= y; o++) {
  for (let p = 10; p > o; p--) {
    document.write("&nbsp*&nbsp");
  }
  document.write("</br>");
}
document.write("</br>");
document.write("</br>");

// 11th pattern
for (let i = 0; i < 10; i++) {
  if (i < 5) {
    for (let j = 5; j > i; j--) {
      document.write("&nbsp&nbsp");
    }

    for (let j = 0; j <= i; j++) {
      document.write("*&nbsp&nbsp");
    }
  }

  if (i >= 5) {
    for (let j = 4; j <= i; j++) {
      document.write("&nbsp&nbsp");
    }
    for (let j = 9; j > i; j--) {
      document.write("*&nbsp&nbsp");
    }
  }
  document.write("</br>");
}
document.write("</br>");
document.write("</br>");
// 12th pattern

for (let i = 0; i < 5; i++) {
  // for (let j = 10; j > i; j--) 
    if (j <= 5) {
      document.write("*");
    }
    if (j > 5) {
      for (let n = 10; n > 5; n++) {
        
      }
    // }
  }
  document.write("</br>");
}
