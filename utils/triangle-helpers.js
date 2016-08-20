// only dealing with equilateral triangles
// round for pixels
export function calculateTriangleHeight(sideLength) {
  let halfOfBase = sideLength / 2;
  let height = Math.sqrt(Math.pow(sideLength, 2) - Math.pow(halfOfBase, 2));

  return Math.round(height);
}

function equationToString(equation) {
  return equation.toString();
}

// constant svg height and width of 200
// could be more versatile down the road
export function calculateCenteredSvgTrianglePoints(sideLength, halfOfSvgWidth) {
  let triangleHeight = calculateTriangleHeight(sideLength);
  let halfOfTriangleHeight = triangleHeight / 2;
  let halfOfSideLength = sideLength / 2;
  let topPointY = equationToString(halfOfSvgWidth - halfOfTriangleHeight);
  let leftBasePointX = equationToString(halfOfSvgWidth - halfOfSideLength); 
  let leftBasePointY = equationToString(halfOfSvgWidth + halfOfTriangleHeight);
  let rightBasePointX = equationToString(halfOfSvgWidth + halfOfSideLength);
  let rightBasePointY = equationToString(halfOfSvgWidth + halfOfTriangleHeight);


  // topPoint: (x, y) | leftBasePoint: (x, y) | rightBasePoint(x, y)
  return `100,${topPointY} ${leftBasePointX},${leftBasePointY} ${rightBasePointX},${rightBasePointY}`;
}
