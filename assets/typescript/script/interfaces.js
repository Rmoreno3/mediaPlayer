var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
})(Color || (Color = {}));
var rect = {
    ancho: 4,
    alto: 6
};
function area(r) {
    return r.alto * r.ancho;
}
var areaRect = area(rect);
console.log(areaRect);
rect.toString = function () {
    return this.color ? "Un rectangulo " + this.color : "Un rectangulo";
};
console.log(rect.toString());
