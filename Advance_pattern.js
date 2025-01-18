let s = 10;
for (let o = 1; o <= s; o++) {
  for (let p = s; p >= 1; p--) {
    if (o >= p) {
      if(o<=5)
      document.write("&nbsp&nbsp*&nbsp");
    }
    if(o<=p){
      if(o>5)
      document.write("&nbsp&nbsp*&nbsp");
    }
  }
  document.write("</br>");
}

let y = 10;
for (let o = 1; o <= y; o++) {
  for (let p = y; p >= 1; p--) {
    if (o >= p) {
      if(o<=5)
      document.write("&nbsp&nbsp*&nbsp");
    }
    if(o<=p){
      if(o>5)
      document.write("&nbsp&nbsp*&nbsp");
    }
  }
  document.write("</br>");
}