var obj = { a: 5 };
var multi = function (m) {
    return this.a * m;
}
console.log(multi.call(obj, 5));

