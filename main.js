//  ex 1
let text = document.querySelector(".text");
let selectEd = document.querySelector("#selectEd");
let myForm = document.querySelector("#myForm");
let myInp = document.querySelector("#myInp");
let btn = document.querySelector(".btn");
let sel = document.querySelector(".sel");
let textInp = document.querySelector(".textInp");
let vol = document.querySelector(".vol");

myForm.addEventListener("submit", (e) => {
   e.preventDefault();
   text.innerHTML = e.target.elements.textArea.value;
   sel.innerHTML = e.target.elements.selectEd.value;
   vol.innerHTML = e.target.elements.dataAdd.value;
});

// Array.isArray() - перевіряє масив, якщо це масив - true, якщо ні, то виводить - false  
// toString() - переводить у строку

