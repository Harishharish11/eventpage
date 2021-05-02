
function validateForm() {
  var name = document.forms["register_form"]["name"].value;
  var roll = document.forms["register_form"]["roll"].value;
  var email = document.forms["register_form"]["email"].value;
  var phn = document.forms["register_form"]["phnnumber"].value;
  var gender = document.forms["register_form"]["cars"].value;
  var collegename = document.forms["register_form"]["collegename"].value;
  var department = document.forms["register_form"]["department"].value;
  var dob = document.forms["register_form"]["dob"].value;
  var year = document.forms["register_form"]["year"].value;
   if (name == "")
   {
       window.alert("Name must be filled out");
       document.forms["register_form"]["name"].focus();
       return false;
   }

   if (roll == "")
   {
       window.alert("Roll Number must be filled out");
       return false;
   }
    if (email == "")
   {
       window.alert("Email must be filled out");
       return false;
   }
    if (phn == "")
   {
       window.alert("Phone Number must be filled out");
       return false;
   }
    if (gender.selectedIndex <1)
   {
       window.alert("Gender must be filled out");
       return false;
   }
  if (collegename == "")
   {
       window.alert("college name must be filled out");
       return false;
   }
    if (department == "")
   {
       window.alert("department must be filled out");
       return false;
   } 
    if (dob == "")
   {
       window.alert("DOB must be filled out");
       return false;
   }
    if (year == "")
   {
       window.alert("Year of study must be filled out");
       return false;
   }
   window.alert("Name : "+name+"\n"+"Roll Number: "+roll+"\nEmail : "+email+"\nPnone Number : "+phn+"\nGender : "+gender+"\nCollege : "+collegename+"\nDep : "+department+"\nDOB : "+dob+"\nYear : "+year);

}