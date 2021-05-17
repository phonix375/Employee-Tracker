const inquirer = require('inquirer');
const department = require('./utils/departments');
const role = require('./utils/role');
const employee = require('./utils/employee');

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const mainMenu = () => {
return inquirer.prompt([
    {
        type:'rawlist',
        name: 'selection',
        message: 'What whold you like to do ?',
        choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee','update an employee role']
    }
])
}



async function mainLoop(){
     mainMenu()
    .then(async answer => {
        if(answer.selection === 'view all departments'){
           const departments = await department.showAll();
           console.table(departments);
           mainLoop();
        }else if(answer.selection === 'view all roles'){
            const roles = await role.showAll();
            console.table(roles)
            mainLoop();
        }else if(answer.selection === 'view all employees'){
            const employees = await employee.showAll();
            console.table(employees);
            mainLoop();
        }else if(answer.selection === 'add a department'){
            department.askAdd().then(answer =>{
                department.add(answer.name);
                mainLoop();
            })
        }else if(answer.selection === 'add a role'){
            const departments = await department.showAll();
            // let departmentsNames = departments.map(a => a.name);
            role.askAdd(departments).then(async answers => {
                await role.add(answers);
                mainLoop();
            })
        }else if(answer.selection === 'add an employee'){
            const roles = await role.showAll();
            const employees = await employee.showAll();
            employee.askAdd(roles,employees).then(async answer => {
                await employee.add(answer);
                mainLoop();
            })

        }else if(answer.selection === 'update an employee role'){
            const employees = await employee.showAll();
            const roles = await role.showAll();
            employee.askUpdate(employees,roles).then(async answer => {
                await employee.update(answer);
                mainLoop();
            })
        }
    });
}

mainLoop();



