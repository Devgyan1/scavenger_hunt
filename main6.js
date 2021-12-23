function letter(){
    answer=document.getElementById("Letter").value;
    answer1=document.getElementById("Letter1").value;
    answer2=document.getElementById("Letter2").value;
    answer3=document.getElementById("Letter3").value;
    answer4=document.getElementById("Letter4").value;
    if(answer=="30" && answer1=="37" && answer2=="24" && answer3=="28" && answer4=="32"){
        window.location="final.html"
    }
    else if(answer==""){
        window.alert ("please finish all answers")
    }
    else if(answer1==""){
        window.alert ("please finish all answers")
    }
    else if(answer2==""){
        window.alert ("please finish all answers")
    }
    else if(answer3==""){
        window.alert ("please finish all answers")
    }
    else if(answer4==""){
        window.alert ("please finish all answers")
    }
    else{
        window.alert ("One of the answers is WRONG");
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