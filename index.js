//Transformation functions

var grayScale = function(bitmapData) {
  var grayScaleArray = [];
  for (var i = 0; i < bitmapData.length; i += 3) {
    var g = bitmapData[i];
    var b = bitmapData[i + 1];
    var r = bitmapData[i + 2];
    var gray = (r + b + g) / 3;

    grayScaleArray.push(gray);
    grayScaleArray.push(gray);
    grayScaleArray.push(gray);

  };
  return grayScaleArray;
};

var sepia = function(bitmapData) {

	var sepiaArray = [];

	for(var i = 0; i < bitmapData.length; i += 3) {


		var cGreen = bitmapData[i];
		var cBlue = bitmapData[i + 1];
		var cRed = bitmapData[i + 2];

		var nGreen = (cRed * .349) + (cGreen * .686) + (cBlue * .168);
		var nRed   = (cRed * .393) + (cGreen * .769) + (cBlue * .189);
		var nBlue  = (cRed * .272) + (cGreen * .534) + (cBlue * .131); 


		var sepia  = (nRed + nBlue + nGreen) / 3;

		sepia = sepia > 255 ? 255 : sepia;

		sepiaArray.push(sepia);
		sepiaArray.push(sepia);
		sepiaArray.push(sepia);

	}
	return sepiaArray;
}

module.exports = {
	sepia: sepia,
	grayscale: grayScale
};
