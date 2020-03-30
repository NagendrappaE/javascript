//for loop
//https://www.youtube.com/watch?v=-P04pE6zRNE&list=PLRAV69dS1uWTSu9cVg8jjXW8jndOYYJPP&index=19
for(let i=0; i<10;i++){

    console.log('inside the for loop '+i)
}
//for loop with the arrays

const days =['monday','tuesday','wednesday','thursday','friday','saturday','sunday']

for(let j=0;j<days.length;j++){

    console.log('the days are '+days[j])
}

//while loop
let num=20
while(num){

    console.log('inside the while loop'+new Date())
    num--
}

//forEach

const players=['ABD','VIRAT','GANGULY','SEWAG','MSD']


let printPlayer=function( val,pos){

    console.log('preint the player name :::'+val+"at this index:::;"+pos)
}

players.forEach(printPlayer)

//for each OR


players.forEach(function(value,indx){
console.log('the  player name is '+value+'the position is '+indx)

console.log(`the  player name is diffrent'+${value}+'the position is '${indx}`)


})