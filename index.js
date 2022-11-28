//Student grade Generator(Challenge 1)
function studentGrade(){
    let grade = prompt("Please enter a grade between 0-100");//Prompts a user for input
    if(grade > 79){
console.log("A");//Returns A if grade is above 79
    }
    else if(grade <= 79 && grade >= 60){
console.log("B");//Returns B if grade is between 79- 60
    }
    else if(grade <= 59 && grade > 49) {
        console.log("C");//Returns C if grade is between 59 and 49
    }
    else if(grade <= 49 && grade >= 40) {
        console.log("D");//Returns D if grade is between 49 and 40
    }
    else if(grade < 40){
        console.log("E");//Return E if
    }
    else{
        console.log("Please enter a valid grade");//Asks the user to enter a valid grade if grade is not between 0 and 100
    }
}
studentGrade();
//End of challenge 1

//Challenge 2: Speed detector
/*
speed = prompt("Please input speed");
if (speed <=70) {
    console.log("OK");
}
    else if(speed > 70){
        let points = (speed - 70) / 5;
        console.log('Your points are'${points})

}
*/

//Code challenge 3: Net salary calculator
function netSalary() {
let basicSalary = parseInt(prompt("Please enter your basic salary"));
let benefits =parseInt(prompt('Please enter your total benefits'));//allowances + bonus on pay
    let grossSalary = (basicSalary + benefits);//total earnings without any deductions
    let nssf = grossSalary * 0.06;//nssf deduction: 6% of salary
    let nhif = parseInt(prompt('Enter total nhif deduction'));//total nhif deductions
    let paye = 0.2 * grossSalary;//income tax 20% of gross pay
    let totalDeductions = paye+nhif+nssf;
    let netSalary = grossSalary - totalDeductions;
    console.log(`Your gross pay is ${grossSalary}`);
    console.log(`Your paye deduction is ${paye}`);
    console.log(`Your net pay is ${netSalary}`);
}
netSalary();