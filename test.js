function myfun()
           {
            
             var a = document.getElementById("Card Holder Name").value;
                
             if(a=="") {
	         alert("Invalid, Please enter Card Holder Name");
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
         