let hidebutton = document.querySelector("#hidebutton");
let input = document.querySelector("input");
hidebutton.addEventListener("click",function(){
    if(input.type==="password"){
        input.type="text";
        hidebutton.textContent = "Hide";
    }
    else{
        input.type="password";
        hidebutton.textContent = "Show";
    }
});
let form = document.querySelector("form");
let span = document.querySelector("span");
form.addEventListener("submit",function(dets){
    dets.preventDefault();
    let hidden = form.elements.password.value;
    let level1 = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    let level2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let level3 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/
   let strength = 0;
   if(level1.test(hidden)){
    strength++;
   };
   if(level2.test(hidden)){
    strength++;
   };
   if(level3.test(hidden)){
    strength++;
   };
   switch(strength){
    case 0 : span.textContent = "Weak";
             span.style.color = "Red";   
    break;
    case 1 : span.textContent = "Easy";
             span.style.color = "Red";    
    break;
    case 2 : span.textContent = "Medium";
             span.style.color = "orange";    
    break;
    case 3 : span.textContent = "Hard";
             span.style.color = "green";    
    break;
   }
});

