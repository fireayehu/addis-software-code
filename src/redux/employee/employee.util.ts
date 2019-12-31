import { Employee } from './employee.types';

export const removeEmployee = (
  employees: Employee[],
  newEmployee: Employee
) => {
  const exists = employees.find(employee => employee.id === newEmployee.id);

  if (exists) {
    employees = employees.filter(employee => employee.id !== newEmployee.id);
  }
  return employees;
};

export const updateEmployee = (
  employees: Employee[],
  newEmployee: Employee
) => {
  const exists = employees.find(employee => employee.id === newEmployee.id);

  if (exists) {
    employees = employees.map(employee =>
      employee.id === newEmployee.id ? newEmployee : employee
    );
  }
  return employees;
};
