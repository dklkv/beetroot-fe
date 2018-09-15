// console.log(document.cookie);
//
// var expiry = new Date();
// expiry.setDate(expiry.getDate() - 1);
// document.cookie="new=; expires=" + expiry.toUTCString();
//
//
// console.log(document.cookie);

localStorage.setItem("my first key", "value 2");
console.log(localStorage.length);
console.log(localStorage.getItem("perfectpixel-layers"));
console.log(localStorage.key(0));

localStorage.clear();
