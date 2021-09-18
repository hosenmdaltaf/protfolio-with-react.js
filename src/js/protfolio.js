
 /* Selecting DOM elements */
 /*===== LINK ACTIVE  =====*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
if(linkColor){
   linkColor.forEach(l=> l.classList.remove('active'))
   this.classList.add('active')
}
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


/* Selecting DOM elements */
/*===== for project button  =====*/




/*===== button click show for mobile device  =====*/

document.getElementById('project-button').onclick=function(){
var toggle_div = document.getElementById('hide-projects');
if (toggle_div.value == "1"){
toggle_div.style.display="none";
toggle_div.value="0";
}
else{
toggle_div.style.display="";
toggle_div.value="1";
}
};





