ALTER TABLE role
ADD FOREIGN KEY (department_id) REFERENCES employee(id);

ALTER TABLE employee
ADD FOREIGN KEY (roleID) REFERENCES role(id);

ALTER TABLE employee
ADD FOREIGN KEY (managerID) REFERENCES employee(id);