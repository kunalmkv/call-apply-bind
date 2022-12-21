var obj = { a: 5 };
var multi = function (m) {
    return this.a * m;
}
console.log(multi.call(obj, 5));

let name = {
    firstName: 'kunal',
    lastName: 'Mishra',
}
let printname = function () {
    console.log(this.firstName + ' ' + this.lastName);
}
printname.call(name);
let name2 = {
    firstName: 'karan',
    lastName: 'sharma',


}

printname.call(name2);