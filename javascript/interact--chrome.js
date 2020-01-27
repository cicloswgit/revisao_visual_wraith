var callback = arguments[arguments.length-1];
var a = document.querySelector('button#btn_save');
a && a.click();
setTimeout(callback, 2000);
