function changeColor(){
  var a = document.getElementById("red").value;
  var b = document.getElementById("green").value;
  var c = document.getElementById("blue").value;
  document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';
  document.getElementById("colorfultext").innerHTML = 'rgb(' + a + ',' + b + ',' + c + ')';
}
document.getElementById("colorbutton").onclick = changeColor;

