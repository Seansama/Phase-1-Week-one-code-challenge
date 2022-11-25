//Student grade Generator(Challenge 1)
function studentGrade(){
    let grade = prompt("Please enter a grade between 0-100");//Prompts a user for input
    if(grade < 79){
console.log("A");
    }
    else if(grade <= 79 && grade >= 60){
console.log("B");
    }
    else if(grade <= 59 && grade > 49) {
        console.log("C");
    }
    else if(grade <= 49 && grade > 40) {
        console.log("D");
    }
    else if(grade < 40){
        console.log("E");
    }
    else{
        console.log("Please enter a valid grade");
    }
}
studentGrade();