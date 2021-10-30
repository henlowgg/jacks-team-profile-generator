// adds Employee constructor
const Employee = require('../lib/employee');

test('creates an Employee obj', () => {
  // make an instance of employee
  const employee = new Employee("Jack", 27, "henlowgg@outlook.com");

  // check that properties are of correct constructors
  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test('retrieves employee Name', () => {
  // make an instance of employee
  const employee = new Employee("Jack", 27, "henlowgg@outlook.com");
  // testing getName() method
  expect(employee.getName()).toEqual(expect.any(String));
});

test("retrieves employee ID", () => {
  // make an instance of employee
  const employee = new Employee("Jack", 27, "henlowgg@outlook.com");

  // testing getId() method
  expect(employee.getId()).toEqual(expect.any(Number));
});

test("retrieves employee Email", () => {
  // make an instance of employee
  const employee = new Employee("Jack", 27, "henlowgg@outlook.com");

  // testing getEmail() method
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("retrieves employee Role", () => {
  // make an instance of employee
  const employee = new Employee("Jack", 27, "henlowgg@outlook.com");

  // testing getRole() method
  expect(employee.getRole()).toEqual("Employee");
});