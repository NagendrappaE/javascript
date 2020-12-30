
function callAjax(){


    console.log('you have been clicked...')

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange= function(){
        xhttp.open("GET", "http://127.0.0.1:5500/hello.html", true);
        xhttp.send();
        xhttp.responseType='json'

        console.log('inside.....')
        if(xhttp.readyState == 4 &&xhttp.status == 200){

            console.log('the response text'+xhttp.responseText)
        }
        console.log('issssss')
        
    }


}

