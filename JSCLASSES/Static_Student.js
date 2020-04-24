class Student{

    static collegename ='GECMANDYA'

constructor(sname,semister,dob){

    this.sname=sname
    this.semister=semister
    this.dob=dob

}

studentData(){

    console.log(`the student name ${this.sname}  belongs to college ${Student.collegename}  and semister is ${this.semister}`)
}

}

let nag=new Student('Nagendra','8th','14-05-1992')

let sush=new Student('Sushma','6th','14-05-1992')
let xyz=new Student('XYZ','5th','14-05-1992')

nag.studentData()