var total = 0;

document.getElementById("a10").onclick = a10;
function a10() {
  total = total + 10;
  document.getElementById("out").innerHTML = total;
  document.getElementById("out").style.backgroundColor = "white";
}

document.getElementById("a20").onclick = a20;
function a20() {
  total = total + 20;
  document.getElementById("out").innerHTML = total;
  document.getElementById("out").style.backgroundColor = "white";
}

document.getElementById("a30").onclick = a30;
function a30() {
  total = total + 30;
  document.getElementById("out").innerHTML = total;
  document.getElementById("out").style.backgroundColor = "white";
}

document.getElementById("red").onclick = red;
function red() {
  document.getElementById("out").style.backgroundColor = "red";
}

document.getElementById("out").onclick = zeroOut;
function zeroOut() {
  total = 0;
  document.getElementById("out").style.backgroundColor = "white";
  document.getElementById("out").innerHTML = total;
}

document.getElementById("blue").onclick = blue;
function blue() { 
  document.getElementById("out").style.backgroundColor = "blue";
}

document.getElementById("n10").onclick = n10;
function n10() {
  total = total - 10;
  document.getElementById("out").innerHTML = total;
  document.getElementById("out").style.backgroundColor = "white";
}

document.getElementById("n20").onclick = n20;
function n20() {
  total = total - 20;
  document.getElementById("out").innerHTML = total;
  document.getElementById("out").style.backgroundColor = "white";
}

document.getElementById("n30").onclick = n30;
function n30() {
  total = total - 30;
  document.getElementById("out").innerHTML = total;
  document.getElementById("out").style.backgroundColor = "white";
}

