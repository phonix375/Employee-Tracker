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
        choices: ['view all departments','view all roles','view all employees','add a department','add a role','add an employee','update an employee role','View employees by manager']
    }
])
}



async function mainLoop(){
     mainMenu()
    .then(async answer => {
        if(answer.selection === 'view all departments'){
           const departments = await department.showAll();
           if(departments.error){
               console.log(departments.error)
           }else{
            console.table(departments);
           }
           mainLoop();
           return;
        }else if(answer.selection === 'view all roles'){
            const roles = await role.showAll();
            if(roles.error){
                console.log(roles.error)
            }else{
                console.table(roles)
            }
            mainLoop();
            return;
        }else if(answer.selection === 'view all employees'){
            const employees = await employee.showAll();
            if(employees.error){
                console.log(employees.error)
            }else{
                console.table(employees);
            }
            mainLoop();
            return;
        }else if(answer.selection === 'add a department'){
            department.askAdd().then(answer =>{
                department.add(answer.name);
                mainLoop();
                return;
            })
        }else if(answer.selection === 'add a role'){
            const departments = await department.showAll();
            if(departments.error){
                console.log('Please add a dipartment first');
                mainLoop();
                return;
            }
            if(departments.length === 0){
                console.log('Please add a dipartment first');
                mainLoop();
            }else{
                role.askAdd(departments).then(async answers => {
                    await role.add(answers);
                    mainLoop();
                    return;
                })
            }

        }else if(answer.selection === 'add an employee'){
            const roles = await role.showAll();
            const employees = await employee.showAll();
            if(roles.error){
                console.log('Please add a role first');
                mainLoop();
                return;
            }else{
                employee.askAdd(roles,employees).then(async answer => {
                    await employee.add(answer);
                    mainLoop();
                    return;
                });
            }
        
        }else if(answer.selection === 'update an employee role'){
            const employees = await employee.showAll();
            if(employees.error){
                console.log('Please add employees first');
                mainLoop();
                return;
            }
            const roles = await role.showAll();
            employee.askUpdate(employees,roles).then(async answer => {
                await employee.update(answer);
                mainLoop();
                return;
            })
        }else if(answer.selection === 'View employees by manager'){
            const employees = await employee.showAll();
            if(employees.error){
                console.log('Please add employees first');
                mainLoop();
                return;
            }
            employee.askShowByManager(employees).then(async answer => {
               await employee.ShowByManager(answer);
               mainLoop();
               return;
            })
        }
    });
}

mainLoop();



