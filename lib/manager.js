function Manager(name, id, email, role, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.officeNumber = officeNumber;
}

module.exports = {Manager, managerList};