function getTriangleArea(a, h) {
    if (a <= 0 || h <= 0) {
        console.log("Nieprawidłowe dane");
    } else {
        return (a * h) / 2
    }
}
console.log(getTriangleArea(10, 6));
var triangleArea1 = getTriangleArea(10, 15);
var triangleArea2 = getTriangleArea(18, 22);
var triangleArea3 = getTriangleArea(24, 36);