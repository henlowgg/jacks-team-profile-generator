const Manager = require("../lib/manager");

test("creates an Manager obj", () => {
  const manager = new Manager("Jack", 27, "henlowgg@outlook.com", 13);

  expect(manager.offNum).toEqual(expect.any(Number));
});

test("retrieves manager Role", () => {
  const manager = new Manager("Jack", 27, "henlowgg@outlook.com", 13);

  expect(manager.getRole()).toEqual("Manager");
});
