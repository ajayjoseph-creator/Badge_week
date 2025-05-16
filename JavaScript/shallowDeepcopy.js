//shallow copy
/* let obj={name:'ajay',details:{place:'malappuram'}}
let another={...obj};
another.details.place='vijay';
console.log(obj) */

//deepCopy
/* let obj={name:'ajay',details:{
    place:'malappuram'
}}
let another=JSON.parse(JSON.stringify(obj))
another.name='vijay'
console.log(obj) */