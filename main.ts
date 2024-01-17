import inquirer from "inquirer";
import chalk from "chalk";

// prompt for word count
do{
    let user = await inquirer.prompt({
        type: "input",
        name: "para",
        message: chalk.redBright("Enter your Paragraph to count the words :\n")
    })
    
    // converting para into Array to split it and then count
    let words = user.para.trim().split(" ")
    console.log( chalk.yellow("Your word count is" ) + chalk.bold.cyan(" => ") +  chalk.bold.magenta(( words.length)) + "\n")
    
    // option if you want to count letters too
    let will = await inquirer.prompt({
        type: "list",
        name: "wantsTo",
        choices: ["yes","No"],
        message: chalk.redBright("do you want to know the letter count ?")
    })
    
    if(will.wantsTo == "yes"){
        function counter(paragraph: string){
            let noWhiteSpace = paragraph.replace(/\s/g,"");
            return noWhiteSpace.length
        }
        console.log( chalk.yellow("Your letter count is" ) + chalk.bold.cyan(" => ") + chalk.bold.magenta(counter( user.para)))
    } else {
        console.log(chalk.yellow("ok"))
    }
}
while(true)