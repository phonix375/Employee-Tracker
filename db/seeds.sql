insert into department (name) values ('Support');
insert into department (name) values ('Product Management');
insert into department (name) values ('Research and Development');
insert into department (name) values ('Human Resources');
insert into department (name) values ('Accounting');
insert into department (name) values ('Business Development');
insert into department (name) values ('Engineering');
insert into department (name) values ('Marketing');
insert into department (name) values ('Sales');
insert into department (name) values ('Services');
insert into department (name) values ('Legal');



insert into role (title, salary, department_id) values ('Administrative Officer', 54271, 6);
insert into role (title, salary, department_id) values ('Staff Accountant I', 40481, 1);
insert into role (title, salary, department_id) values ('Pharmacist', 79890, 6);
insert into role (title, salary, department_id) values ('Geologist III', 17135, 4);
insert into role (title, salary, department_id) values ('Structural Analysis Engineer', 18626, 2);
insert into role (title, salary, department_id) values ('Financial Analyst', 58788, 3);
insert into role (title, salary, department_id) values ('Biostatistician I', 35318, 1);
insert into role (title, salary, department_id) values ('Project Manager', 97261, 11);
insert into role (title, salary, department_id) values ('Nurse Practicioner', 51447, 9);
insert into role (title, salary, department_id) values ('Information Systems Manager', 84443, 5);
insert into role (title, salary, department_id) values ('Food Chemist', 83746, 8);
insert into role (title, salary, department_id) values ('Account Executive', 25791, 5);
insert into role (title, salary, department_id) values ('Community Outreach Specialist', 88163, 7);
insert into role (title, salary, department_id) values ('Research Nurse', 53487, 7);
insert into role (title, salary, department_id) values ('Mechanical Systems Engineer', 34514, 6);
insert into role (title, salary, department_id) values ('Administrative Assistant III', 92403, 11);
insert into role (title, salary, department_id) values ('Safety Technician I', 93128, 2);
insert into role (title, salary, department_id) values ('Desktop Support Technician', 17815, 5);
insert into role (title, salary, department_id) values ('Editor', 22258, 5);
insert into role (title, salary, department_id) values ('Research Associate', 80461, 2);


insert into employee (first_name, last_name, role_id, manager_id) values ('Tess', 'Knellen', 7, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Edwin', 'Petera', 15, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Ruth', 'Klosges', 12, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Frank', 'Thynne', 9, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Dru', 'Starford', 14, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Antonin', 'Boycott', 11, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Payton', 'Greim', 2, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Rafferty', 'Fellos', 5, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Douglass', 'Overstone', 2, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Alexis', 'Goodburn', 9, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Merry', 'Worsnip', 11, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Stacie', 'Ludlem', 9, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Peria', 'Bilham', 5, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Elliott', 'Jedrzejewski', 19, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Madlin', 'Manwaring', 16, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Hali', 'Klicher', 8, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Lynde', 'Clay', 1, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Cindee', 'Greenman', 19, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Renard', 'Lambersen', 14, NULL);
insert into employee (first_name, last_name, role_id, manager_id) values ('Marybelle', 'Ouldred', 14, NULL);


UPDATE employee set manager_id = null WHERE id = 1;
UPDATE employee set manager_id = 1 WHERE id = 2;
UPDATE employee set manager_id = 1 WHERE id = 3;
UPDATE employee set manager_id = 1 WHERE id = 4;
UPDATE employee set manager_id = 1 WHERE id = 5;
UPDATE employee set manager_id = 1 WHERE id = 6;
UPDATE employee set manager_id = 1 WHERE id = 7;
UPDATE employee set manager_id = 1 WHERE id = 8;
UPDATE employee set manager_id = 1 WHERE id = 9;
UPDATE employee set manager_id = 1 WHERE id = 10;
UPDATE employee set manager_id = 1 WHERE id = 11;
UPDATE employee set manager_id = 1 WHERE id = 12;
UPDATE employee set manager_id = 1 WHERE id = 13;
UPDATE employee set manager_id = 1 WHERE id = 14;
UPDATE employee set manager_id = 1 WHERE id = 15;
UPDATE employee set manager_id = 1 WHERE id = 16;
UPDATE employee set manager_id = 1 WHERE id = 17;
UPDATE employee set manager_id = 1 WHERE id = 18;
UPDATE employee set manager_id = 1 WHERE id = 19;
UPDATE employee set manager_id = 1 WHERE id = 20;