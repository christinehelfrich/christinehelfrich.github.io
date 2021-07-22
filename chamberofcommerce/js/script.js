// Date in footer


var string = document.lastModified;

const mydate = new Date();
document.getElementById("last-modified").textContent = string
const todayDayNumber = mydate.getDay();



// Submit form for join.html

           // Form validation code will come here.
           function validate() {
           
            if( document.myForm.fname.value == "" ) {
               alert( "Please provide your name!" );
               document.myForm.Name.focus() ;
               return false;
            }
            if( document.myForm.lname.value == "" ) {
               alert( "Please provide your last name!" );
               document.myForm.EMail.focus() ;
               return false;
            }

            if( document.myForm.bname.value == "-1" ) {
               alert( "Please provide your country!" );
               return false;
            }
            window.location.href="thanks.html";
         }
