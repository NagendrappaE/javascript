//await is keyword and waits for thr promise

//ex 1

async function demo(){

    var awt=await new Promise(function(res,rej){

        res('fullfilled')

    })

   console.log(awt)


}
//calling function
demo()


//ex2

async function ageCal(inp){

    var awtf=await new Promise(function (res,rej){

        if(inp>30){
            res('FULL FILLED with '+inp)
        }else{
            rej('not full filled'+inp)
        }
    })

    console.log(awtf)

}

//ageCal(40)
ageCal(2)