window.onload = function(){
    document.getElementById("Submit Button").onclick = function() {Calculate();};
    Array.from(document.querySelectorAll('input[type=checkbox]')).forEach(el => el.checked = isAllCheck);
};




function Calculate(){
    const checkedlist = document.querySelectorAll("input[type=checkbox]");
    let score = 0;
    for (i = 0; i < checkedlist.length; i++){
        if (checkedlist[i].checked == true){
            
            score += parseFloat(checkedlist[i].value);
            
        }
    }
    var percentScore = Math.round((score/999)*100);
    //alert(score);
   
    var test = document.getElementById("test");
    test.style.visibility = "hidden";
    test.style.display = "none";
    document.getElementById("score").innerHTML = "Your Sore is: " + percentScore + "%!";

    if(score <= 25){
        document.getElementById("result1").style.visibility = "visible";
        document.getElementById("result1").style.display = "block";
    }
    else if (score <= 100){
        document.getElementById("result2").style.visibility = "visible";
        document.getElementById("result2").style.display = "block";
    }
    else if (score <= 300){
        document.getElementById("result3").style.visibility = "visible";
        document.getElementById("result3").style.display = "block";
    }
    else if (score <= 450){
        document.getElementById("result4").style.visibility = "visible";
        document.getElementById("result4").style.display = "block";
    }
    else if (score <= 500){
        document.getElementById("result5").style.visibility = "visible";
        document.getElementById("result5").style.display = "block";
    }
    else if (score <= 650){
        document.getElementById("result6").style.visibility = "visible";
        document.getElementById("result6").style.display = "block";
    }
    else{
        document.getElementById("result7").style.visibility = "visible";
        document.getElementById("result7").style.display = "block";
    }



}