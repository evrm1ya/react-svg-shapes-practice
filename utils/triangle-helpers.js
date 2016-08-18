// only dealing with equilateral triangles
// round for pixels
export function calculateTriangleHeight(sideLength) {
  let halfOfBase = sideLength / 2;
  let height = Math.sqrt(Math.pow(sideLength, 2) - Math.pow(halfOfBase, 2));

  return Math.round(height);
}

// constant svg height and width of 200
// could be more versatile down the road
export function calculateCenteredSvgTrianglePoints(sideLength) {
  let triangleHeight = calculateTriangleHeight(sideLength);
  let topPointY = (100 - (triangleHeight / 2)).toString();
  let baseLeftPointX = (100 - (sideLength / 2)).toString();
  let baseLeftPointY = (100 + (triangleHeight / 2)).toString();
  let baseRightPointX = (100 + (sideLength / 2)).toString();
  let baseRightPointY = (100 + (triangleHeight / 2)).toString();

  return `100,${topPointY} ${baseLeftPointX},${baseLeftPointY} ${baseRightPointX},${baseRightPointY}`;
}
