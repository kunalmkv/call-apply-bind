var obj = { a: 5 };
var multi = function (m) {
    return this.a * m;
}
console.log(multi.call(obj, 5));

let name = {
    firstName: 'kunal',
    lastName: 'Mishra',
    printname: function () {
        console.log(this.firstName + ' ' + this.lastName);
    }
}
name.printname();
let name2 = {
    firstName: 'karan',
    lastName: 'sharma',


}

name.printname.call(name2);