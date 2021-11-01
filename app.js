"use strict";

window.onload = function(){
    var search = document.getElementsByClassName("btn");

    search[0].addEventListener('click',function(event)
        {
            fetch ("http://localhost/info2180-lab4/superheroes.php")
                .then(response => {
                    if (response.ok){
                        return response.text()
                    } else{
                        return Promise.reject('something went wrong')
                    }
                })
                .then (function(data){
                    alert(data)
                })
                .catch (error => console.log('There was an error: ' + error))
        })
}