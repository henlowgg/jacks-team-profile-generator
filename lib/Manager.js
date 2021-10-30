const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, offNumber) {
    super(name, id, email);
    this.offNumber = offNumber;
  }

  getRole() {
    return "Manager";
  }
  // may need to remove offNumber from this.
  getOffNumber() {
    return this.offNumber;
  }
}
module.exports = Manager;
