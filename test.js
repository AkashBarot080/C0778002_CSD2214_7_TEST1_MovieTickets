$(document).ready(function() {
	$('input[type="checkbox"]').click(function () {
 var count=document.querySelectorAll("input:checked").length
  document.getElementById('no_seat').innerHTML = '';
	document.getElementById('no_seat').innerHTML = count;
var e = document.getElementById("m_name").value;
	
	if(e=="Spider Man")
	{

f=count*10;
document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = f;
	}
	else if(e=="Bat Man")
	{
f=count*20;
document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = f;

	}
	else{
f=count*15;
document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = f;

	}	

});
 
});


function get_movie(divid) {
	  $('#' + divid + ' :checkbox:enabled').prop('checked', false);

	var e = document.getElementById("m_name").value;
	document.getElementById('movie_name').innerHTML = '';
	document.getElementById('movie_name').innerHTML = e;
	if(e=="Spider Man")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "$10";
  document.getElementById('no_seat').innerHTML = '';
  document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = 0;

	}
	else if(e=="Bat Man")
	{
document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "$20";
  document.getElementById('no_seat').innerHTML = '';
	document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = 0;

	}
	else{
		document.getElementById('price').innerHTML = '';
	document.getElementById('price').innerHTML = "$15";
  document.getElementById('no_seat').innerHTML = '';
	document.getElementById('total').innerHTML = '';
	document.getElementById('total').innerHTML = 0;

	}
}


function myfun()
           {
            
             var a = document.getElementById("Card Holder Name").value;
                
             if(a=="") {
	         alert("Invalid, Please enter Card Holder Name");
             return false;
             }
             if(!isNaN(a)){
             alert("Invalid, Please enter only alphabets in name");
             return false;
             }

             var b = document.getElementById("Card Number").value;
                
             if(b=="") {
	         alert("Invalid, Please enter Card Number");
             return false;
             }
             if(isNaN(b)){
             alert("Invalid, Please enter only numbers in card number");
             return false;
             }
             if(b.length<10){
             alert("Invalid, Please enter 10 digit card number");
             return false;
             } 
             if(b.length>10){
             alert("Invalid, Please enter 10 digit card number");
             return false;
             } 

             var c = document.getElementById("CVV").value;
                
             if(c=="") {
	         alert("Invalid, Please enter CVV");
             return false;
             }
             if(isNaN(c)){
             alert("Invalid, Please enter only numbers in CVV");
             return false;
             }
             if(c.length<3){
             alert("Invalid, Please enter 3 digit CVV");
             return false;
             } 
             if(c.length>3){
             alert("Invalid, Please enter 3 digit CVV");
             return false;
             } 

             var d = document.getElementById("Expiration Date").value;
                
             if(d=="") {
	         alert("Invalid, Please select expiration month and year");
             return false;
             }
            
   
             
           }
