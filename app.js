"use strict";

window.onload = function(){
    var form  = document.getElementById("query");
    var results = document.getElementsByClassName("results");
    var search = document.getElementsByClassName("btn");
    
    search[0].addEventListener('click',function(event)
        {
           event.preventDefault();
           console.log(form.value);
        })
}