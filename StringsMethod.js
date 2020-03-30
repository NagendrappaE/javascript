let longStr='my name is nagendra \n'+
 'iam  good'+
 'iam  bad persion'

 
 console.log(longStr)


 let  name=longStr.toUpperCase();

 console.log(name)

 console.log('the string of '+name[12])


 console.log('the  sub  str of '+longStr.substr(0,22))
 
 

 console.log('the substring '+longStr.substring(0,11))
 

 let  StrLen='Nagendra Ravi'

 console.log('the  string length  '+StrLen.length)

 console.log('the String replace \t '+StrLen.replace('N','n'))

  
  console.log('the data'+StrLen.replace('/\s/g',''))