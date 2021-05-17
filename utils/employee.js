const pool = require('../db/connection');
const inquirer = require('inquirer');
async function showAll() {

    const result = await pool.query('SELECT employee.*, role.id as role_id, title, salary from employee LEFT JOIN role ON role_id = role.id;');
    if (result[0].length < 1) {
      throw new Error('employee not found');
    }
    return result[0];
  
  }


  const askAdd = (roles, employees) => {
    let rolesTitles = roles.map(a => a.title);
    let employeesNames = employees.map(a => `${a.id};${a.first_name} ${a.last_name}`);
    employeesNames.splice(0, 0, 'NULL');
    return inquirer.prompt([
        {
            type:'input',
            name: 'first_name',
            message: 'Employees First name?',
        },
        {
          type:'input',
          name: 'last_name',
          message: 'Employees Last name?'
        },
        {
          type:'rawlist',
          name: 'roles',
          message: 'What is the employee role ?',
          choices: rolesTitles
        },
        {
            type:'rawlist',
            name: 'manager',
            message: 'Who is the manager?',
            choices: employeesNames
        }

    ]).then(answers => {
      return answers;
    });
    }

async function add(answers){
    console.log(answers);
    let managerID = 'NULL'
    const rouleId = await pool.query(`SELECT id FROM role WHERE title = ? LIMIT 1`,[answers.roles]);
    if(answers.manager != 'NULL'){
         managerID =  await pool.query(`SELECT id FROM employee WHERE id = ?`,[answers.manager.split(';')[0]]);
         await pool.query(`insert into employee (first_name , last_name, role_id, manager_id ) values (?,?,?,?);`,
         [answers.first_name, answers.last_name, rouleId[0][0].id , managerID[0][0].id]);

         console.log(`${answers.first_name} ${answers.last_name} Was added suceesfuly`)
    }else{
        await pool.query(`insert into employee (first_name , last_name, role_id) values (?,?,?, NULL);`,
         [answers.first_name, answers.last_name, rouleId[0][0]]);
         console.log(`${answers.first_name} ${answers.last_name} Was added suceesfuly`)
    }
}
const askUpdate = (employees,roles) => {
    let rolesTitles = roles.map(a => `${a.id}:${a.title}`);
    let employeesNames = employees.map(a => `${a.id}:${a.first_name} ${a.last_name}`);
    return inquirer.prompt([
        {
            type:'rawlist',
            name: 'employees',
            message: 'Who is the employees?',
            choices: employeesNames
        },
        {
            type:'rawlist',
            name: 'role',
            message: 'What is the new role ?',
            choices: rolesTitles
        },

    ]).then(answers => {
      return answers;
    });
    }

async function update(answers){
    console.log(answers);
    const paramas = [answers.role.split(':')[0],answers.employees.split(':')[0]]
    await pool.query(`UPDATE employee SET role_id = ? WHERE id = ?`,paramas);
    console.log(`${answers.employees.split(':')[1]} Been updateded to${answers.role.split(':')[0]} `)
}


module.exports= {showAll, askAdd, add, update, askUpdate}