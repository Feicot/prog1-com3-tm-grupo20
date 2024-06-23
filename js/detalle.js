window.addEventListener("load", function() {
let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);

console.log(queryStringObj.get("categoria"));
console.log(queryStringObj.get("id"));

})