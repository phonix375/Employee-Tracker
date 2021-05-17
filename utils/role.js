const pool = require('../db/connection');
const inquirer = require('inquirer');

async function showAll() {

    const result = await pool.query('SELECT role.*, name as department_name from role JOIN department ON department_id = department.id;');
    if (result[0].length < 1) {
      return {error : `No roles found`}
    }
    return result[0];
  
  }

  const askAdd = (departments) => {
    let departmentsNames = departments.map(a => a.name);
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is the name of the new role?',
        },
        {
          type:'number',
          name: 'salary',
          message: 'What is the salary for this role'
        },
        {
          type:'rawlist',
          name: 'Department',
          message: 'What is the department ?',
          choices: departmentsNames
      }

    ]).then(answers => {
      return answers;
    });
    }

async function add(answers){

  const departmentId = await pool.query(`SELECT id FROM department WHERE name = ? LIMIT 1`,[answers["Department"]]);
  await pool.query(`insert into role (title, salary, department_id) values (?,?,?);`,[answers.name, answers.salary, departmentId[0][0].id]);
}



module.exports= {showAll, askAdd, add}