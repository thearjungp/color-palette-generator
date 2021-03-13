

function generatePalette()
{

  //base color values
  var hue = document.getElementById("h").value;
  var saturation = document.getElementById("s").value;
  var brightness = document.getElementById("l").value;
  const full = 100;

  //------------------------------------------------------------------------------------------------------

  // SHADES
  // Percent for shades

  // max = 15
  var saturationShade3Percent = +full + 15; // 100 + 15     //Saturation increases while shading so 100(full) is added
  var saturationShade2Percent = +full + 10;  // 100 + 10
  var saturationShade1Percent = +full + 5;   // 100 +5

  // max = 30
  var brightnessShade3Percent = +brightness - 30;  //change in percent is the number given ..here it is 30
  var brightnessShade2Percent = +brightness - 20;
  var brightnessShade1Percent = +brightness - 10;


  //TINTS
  //Percent for tints

  // min = 45
  var saturationTint1Percent = 83;  // should be lower than 100
  var saturationTint2Percent = 69;  
  var saturationTint3Percent = 57;  
  var saturationTint4Percent = 47;  

  // max = 45
  var brightnessTint1Percent = +brightness + 10;  //change in percent is the number given ..here it is 40
  var brightnessTint2Percent = +brightness + 20;
  var brightnessTint3Percent = +brightness + 30;
  var brightnessTint4Percent = +brightness + 40;


  //------------------------------------------------------------------------------------------------------

  
  //shades
  document.getElementById("color1").style.backgroundColor = "hsl("+ hue + "," + (saturation*(saturationShade3Percent/100)) + "%," + (brightnessShade3Percent) +"%)";
  document.getElementById("color2").style.backgroundColor = "hsl("+ hue + "," + (saturation*(saturationShade2Percent/100)) + "%," + (brightnessShade2Percent) +"%)";
  document.getElementById("color3").style.backgroundColor = "hsl("+ hue + "," + (saturation*(saturationShade1Percent/100)) + "%," + (brightnessShade1Percent) +"%)";

  //base color
  document.getElementById("color4").style.backgroundColor = "hsl("+ hue + "," + (saturation) + "%," + brightness +"%)";

  //tint
  document.getElementById("color5").style.backgroundColor = "hsl("+ hue + "," + (saturation*(saturationTint1Percent/100)) + "%," + (brightnessTint1Percent) +"%)";
  document.getElementById("color6").style.backgroundColor = "hsl("+ hue + "," + (saturation*(saturationTint2Percent/100))+ "%," + (brightnessTint2Percent) +"%)";
  document.getElementById("color7").style.backgroundColor = "hsl("+ hue + "," + (saturation*(saturationTint3Percent/100)) + "%," + (brightnessTint3Percent) +"%)";
  document.getElementById("color8").style.backgroundColor = "hsl("+ hue + "," + (saturation*(saturationTint4Percent/100)) + "%," + (brightnessTint4Percent) +"%)";

}