import inquirer from "inquirer";
import { adds, subs, muls, divs, rems} from "./calc.js";

const operations = {
    "+": adds,
    "-": subs,
    "*": muls,
    "/": divs,
    "%": rems,
};
let answers = await inquirer.prompt([
    {
        name:"n1",
        type:"number",
        message:"Enter First Number",
    },
    {
        name:"n2",
        type:"number",
        message:"Enter Second Number",
    },
    {
        name:"op",
        type:"checkbox",
        message:"select operator, multiple selection allowed.",
        choices: [ "+", "-", "*", "/", "%"]
    }
]);

const n1 = answers.n1;
const n2 = answers.n2;
const selectedOperators: string[] = answers.op;
if ( isNaN(n1) || isNaN(n2))
{console.log(`Invalid Input! Only Numbers Allowed!`)}
else {
selectedOperators.forEach((operation:string) => {
    if (operations[operation as keyof typeof operations]) {
        operations[operation as keyof typeof operations](n1, n2, operation);
    } else {
        console.log(`Wrong Operator!`);
    }
});
}