const pool = require('../db/connection');
const inquirer = require('inquirer');

async function showAll() {

    const result = await pool.query('SELECT id, name from department');
    if (result[0].length < 1) {
      throw new Error('department not found');
    }
    return result[0];
  
  };

  const askAdd = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'name',
            message: 'What is the name of the new department?',
        }
    ])
    }

function add(value) {
        const sql = `INSERT INTO department (name) VALUES (?)`
        pool.query(sql,[value]);
        console.log(`New ${value} Department was added !`);
  };

function getId() {
    const sql = `INSERT INTO department (name) VALUES (?)`
}



module.exports= {showAll, add, askAdd}