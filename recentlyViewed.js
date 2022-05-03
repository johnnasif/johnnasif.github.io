var select = document.querySelector('.select');
var length =localStorage.getItem("i");
var code = document.getElementById("code");
code.classList.add("flex-container")
for (let i = 1; i <= length; i++) {
  var my_new_el = localStorage.getItem("trythislocal"+i);
  if(my_new_el==null){
    continue;
  }
  code.innerHTML+=(my_new_el);//= my_new_el;
  console.log(my_new_el); 
}
/*
var my_new_el = localStorage.getItem("trythislocal1");
var code = document.getElementById("code");
code.innerHTML+=(my_new_el);//= my_new_el;
console.log(my_new_el);
var my_new_el = localStorage.getItem("trythislocal2");
code.innerHTML+= my_new_el;*/
