var obj = { a: 5 };
var multi = function (m, n, o) {
    return this.a * m * n * o;
}
// var arr = [1, 2, 3]
var bound = multi.bind(obj);
console.log(bound(1, 2, 3));