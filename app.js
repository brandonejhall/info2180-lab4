"use strict";

window.onload = function(){
    var search = document.getElementsByClassName("btn");
    var results = document.getElementsByClassName("results");
    let url =  "http://localhost/info2180-lab4/superheroes.php?query="
    
    
    
    search[0].addEventListener('click',function(event)
        {   
            event.preventDefault();
            let query = document.getElementById("search").value;
            let get_request = new URL(url+query);
            
            fetch (get_request)
                .then(response => {
                    if (response.ok){
                        return response.text()
                    } else{
                        return Promise.reject('something went wrong')
                    }
                })
                .then (function(data){
                    results[0].innerHTML = data;
                })
                .catch (error => console.log('There was an error: ' + error))
            
        })
    
    
}