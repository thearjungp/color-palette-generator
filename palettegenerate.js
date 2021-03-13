

function generatePalette()
{
  var h = document.getElementById("h").value;
  var s = document.getElementById("s").value;
  var l = document.getElementById("l").value;

  // document.getElementById("msg").innerHTML = (+l+10);

  
  //shades
  document.getElementById("color1").style.backgroundColor = "hsl("+ h + "," + (+s) + "%," + (l-30) +"%)";
  document.getElementById("color2").style.backgroundColor = "hsl("+ h + "," + (+s) + "%," + (l-20) +"%)";
  document.getElementById("color3").style.backgroundColor = "hsl("+ h + "," + (+s) + "%," + (l-10) +"%)";

  // base color
  document.getElementById("color4").style.backgroundColor = "hsl("+ h + "," + s + "%," + l +"%)";

  //tint
  document.getElementById("color5").style.backgroundColor = "hsl("+ h + "," + (+s) + "%," + (+l+10) +"%)";
  document.getElementById("color6").style.backgroundColor = "hsl("+ h + "," + (+s) + "%," + (+l+20) +"%)";
  document.getElementById("color7").style.backgroundColor = "hsl("+ h + "," + (+s) + "%," + (+l+30) +"%)";
  document.getElementById("color8").style.backgroundColor = "hsl("+ h + "," + (+s) + "%," + (+l+40) +"%)";

}