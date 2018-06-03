const translate = require('google-translate-api');
const inquirer = require('inquirer');

function processAnswers (answers) {
  console.log("And your answers are:", answers);
}
var questions = [
{
    message: "Please enter the text ",
    type: "input",
    name: "txt"
},{
    /*Google Web Interface and Search Language Codes*/
    message: "Please enter the language",
    type: "input",
    name: "language"
}];
inquirer.prompt(questions, processAnswers)  .then(answers => {
    translate(answers.txt, {to: answers.language}).then(res => {
        console.log(res.text);
        console.log("(Original Language => ",res.from.language.iso,")");
    }).catch(err => {
        console.error(err);
    });
});
