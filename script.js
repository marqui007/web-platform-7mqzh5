function calc2grau(){
  a = document.getElementById("edtA");
  a = parseFloat(a.value);
  b = document.getElementById("edtB");
  b = parseFloat(b.value);
  c = document.getElementById("edtC");
  c = parseFloat(c.value);
  delta = b**2 - 4 * a * c;
  x1 = (-b + Math.sqrt(delta) )/ (2*a);
  x2 = (-b - Math.sqrt(delta) )/ (2*a);
  document.getElementById("x1").value = x1;
  document.getElementById("x2").value = x2;
  }
  