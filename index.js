// working on the help function
const help =document.getElementById('help');
const customer =document.getElementById('customer');
const helpMenu = document.getElementById('helpMenu');
const customerHelpLine = document.getElementById('customerHelpLine');

help.addEventListener('click',()=>{
  helpMenu.style.display=helpMenu.style.display==='none'?'block':'none';
});
document.addEventListener('click',(e)=>{
  if(!help.contains(e.target)&& !helpMenu.contains(e.target)){
    helpMenu.style.display='none';
  }
});
help.addEventListener('mouseleave',()=>{
  helpMenu.style.display='none'

});

helpMenu.addEventListener('mouseenter',()=>{
helpMenu.style.display='block';
});

window.onload=function(){
  helpMenu.style.display='none';
  customerHelpLine.style.display='none';
};

customer.addEventListener('click',()=>{
  customerHelpLine.style.display=customerHelpLine.style.display==='none'?'block':'none';
});
document.addEventListener('click',(e)=>{
  if(!customer.contains(e.target)&& !customerHelpLine.contains(e.target)){
    customerHelpLine.style.display='none';
  }
});
customer.addEventListener('mouseleave',()=>{
  customerHelpLine.style.display='none'

});

customer.addEventListener('mouseenter',()=>{
customerHelpLine.style.display='block';
});