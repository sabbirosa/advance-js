//Falsy : 0, "", undefined, null, NaN, false.
//Truthy : '0', ' ', [], {}.

let name = NaN;
console.log(name);
if (name) {
    console.log('Condition is True');
}

else {
    console.log('Condition is False');
}