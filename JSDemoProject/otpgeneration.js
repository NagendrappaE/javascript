//document.getElementById('otpmsg').innerText='OTP generated'

//document.getElementById('otpmsg').style.opacity = '0';

//alert('hhhh')

////////////////////include the jquerycdn///////////////
var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
document.head.appendChild(jQueryScript);

 function generateOTP(){
    document.getElementById('otpmsg').innerText='OTP generated'

    setTimeout(function(){
        document.getElementById('generate').style.display='none';
        document.getElementById('regenerate').style.display='';
    },10000)

}

function verifyOTP(inp){

   var pwd= document.getElementById('pwd').value;
if(pwd.trim()==''){
    document.getElementById('errorname').innerText='Please input OTP'
    document.getElementById('otpmsg').innerText=''

}else{
    document.getElementById('errorname').innerText=''

    document.getElementById('otpmsg').innerText='verified succesfully'

}
    

}

function regenerateOTP(){
    document.getElementById('otpmsg').innerText='OTP generated succesfully'

}