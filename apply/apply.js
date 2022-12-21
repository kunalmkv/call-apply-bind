var obj = { a: 5 };
var multi = function (m, n, o) {
    return this.a * m * n * o;
}
var arr = [2, 2, 3]
console.log(multi.apply(obj, arr));