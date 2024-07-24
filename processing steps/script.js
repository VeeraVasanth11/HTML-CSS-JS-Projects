const circles=document.querySelectorAll(".circle");
const buttons=document.querySelectorAll("button");
const line=document.querySelector(".indicator");
let currentValue=1;
const update=(e)=>{
  e.target.id==="prev" ? --currentValue : ++currentValue;
  circles.forEach((circle,index)=>{
      if(index<currentValue){
        circle.classList.add("active");
      }
      else{
        circle.classList.remove("active");
      }
  })
  line.style.width=`${((currentValue-1)/(circles.length-1))*100}%`
  if(currentValue===1){
    buttons[0].disabled=true;
  }
  else if(currentValue===circles.length){
    buttons[1].disabled=true;
  }
  else{
    buttons.forEach((button)=>{
      button.disabled=false;
    })
  }
}
buttons.forEach((button)=>{
  button.addEventListener('click',update);
})
