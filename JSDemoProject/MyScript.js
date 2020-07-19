//alert('url'+document.URL)
//let str=document.getElementById('p1').innerText='hhhhhhhh'

//alert(str)

const  tag=document.querySelectorAll("p")



tag.forEach(function(pk){

pk.textContent='hhhhhhh'+new Date()


})


const classNode =document.querySelectorAll('.pclass')

for(let i=0;i<tag.length;i++){

    console.log('data'+tag[i])
}

document.title='My web application'
//event listener
document.addEventListener('click',  function(event){

    console.log('i clicked '+event.target.value)
})


document.addEventListener('click',  function(event){

    event.target.textContent='yes i clicked '+new Date()
    console.log('i clicked '+event)
})

function showMessage(){

    document.getElementById('p1').innerText="OTP generated"

    setTimeout(1000,function(){
        
    })
}