#! /usr/bin/env node
import inquirer from "inquirer";
const asnwer = await inquirer.prompt([
    { message: "enterfirstnumber", type: "number", name: "firstnumber" },
    { message: "entersecondnumber", type: "number", name: "secondnumber" },
    {
        message: "select one of the opearator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (asnwer.operator === "addition") {
    console.log(asnwer.firstnumber + asnwer.secondnumber);
}
else if (asnwer.operator === "subtraction") {
    console.log(asnwer.firstnumber - asnwer.secondnumber);
}
else if (asnwer.operator === "multiplication") {
    console.log(asnwer.firstnumber * asnwer.secondnumber);
}
else if (asnwer.operator === "division") {
    console.log(asnwer.firstnumber / asnwer.secondnumber);
}
else {
    console.log("non");
}
