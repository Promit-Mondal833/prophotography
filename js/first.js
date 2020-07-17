function login() {
  var name1="PromitMondal";
  var pass1="833408";
   var name2=document.getElementById("na");
    var pass2=document.getElementById("pass");
   if(name1==name2.value && pass1==pass2.value) {
    document.getElementById("logpage").innerHTML="<a href='welcome.html'>WELCOME</a>";
  }
  else{
    document.getElementById("logpage").innerHTML="Please Enter Details first";
  }
  }