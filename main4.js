function riddle(){
    word=document.getElementById("riddle-ans").value;
    if(word=="NOTHING"){
        window.location="hint5.html"
    }
    else{
        window.alert ("nope "+word+" is WRONG");
    }
}
$(document).bind("contextmenu",function(e) {
    e.preventDefault();
   });
   
   $(document).keydown(function(e){
       if(e.which === 123){
          return false;
       }
   });