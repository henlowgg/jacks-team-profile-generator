const Engineer = require("../lib/engineer");

test("creates an Engineer obj", () => {
  // make an instance of engineer
  const engineer = new Engineer(
    "Jack",
    27,
    "henlowgg@outlook.com",
    "henlowgg"
  );

  // check that github is correct constructor
  expect(engineer.github).toEqual(expect.any(String));
});

test("retrieves engineer github with getGithub()", () => {
  // make an instance of employee
  const engineer = new Engineer(
    "Jack",
    27,
    "henlowgg@outlook.com",
    "henlowgg"
  );
  // testing getGithub() method
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("retrieves engineer Role", () => {
  // make an instance of engineer
  const engineer = new Engineer(
    "Jack",
    27,
    "henlowgg@outlook.com",
    "henlowgg"
  );

  // testing getRole() method
  expect(engineer.getRole()).toEqual("Engineer");
});