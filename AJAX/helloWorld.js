console.log('Hiiiiiiiii welcome')

console.log($)

let    callFunction=function( val ){

    console.log(`the ${val} received `)
   let name= $('#searchId'). val()
   $('#searchId').css("color","red")
console.log(name)
}

//let val=document.getElementById('searchId').innerText
//console.log('the value '+val)
//callFunction('na')

/////////////////////////


let issueSymbol=function(inpVal){

console.log('inside the issue symbol')
    $.ajax({
        url: 'http://localhost:8080/asbaWeb/restServices/easba',
        type: "POST",
        data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?> <asbaWebService> <header> <channelId>1002</channelId> <transcation>GetIssueList</transcation> </header> </asbaWebService>'
        ,
        contentType:"application/xml",
        dataType: "text",
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
console.log('ended')
}