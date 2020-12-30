var employee={

    name:'Nagendra',

    salary:2400.00,

    company:'',

    desigation:'senior software engineer',

    details:function(inp,data){

        this.company=inp
        return 'the company name'+this.company+'the addion details'+data
    },

//getter
    get comp(){
        return this.company
    },

    //setter
    set comp(nm){

this.company=nm.toUpperCase()
    }

}

employee.comp='evolvus'

console.log(employee.comp)





