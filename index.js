let container2=document.querySelector(".container1");
let card=document.querySelector(".card-img");
let on=document.querySelector(".on");

container2.addEventListener("mousemove",function(){
    container2.style.backgroundColor="pink";
    on.style.display="block";

})

container2.addEventListener("mouseout",function(){
   container2.style.backgroundColor="rgb(250, 242, 231)";
   on.style.display="none";
})