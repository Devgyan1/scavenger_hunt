function find(){
    answer=document.getElementById("find-ans").value;
    if(answer=="WASDASTW"){
        window.location="hint6.html"
    }
    else{
        window.alert ("The answer "+answer+" is WRONG");
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