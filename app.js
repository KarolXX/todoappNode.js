//console.log(process.argv.slice(2, 3));
//console.log(argv._);

const parseArgs = require('minimist');
const colors = require('colors')

const command = parseArgs(process.argv.slice(2, 3));
//remove "_" property from object
delete command._;
console.log(command);

const handleCommand = ({ add, remove, list }) => {
    //console.log(add, remove, list);
    if (add) {
        if (typeof add !== "string")
            return console.log("enter the name of the task you want to add".red);
        else if (add.length < 7)
            return console.log("the name must be more than 6 characters".red)
    }
}

handleCommand(command);