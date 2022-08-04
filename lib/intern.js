function Intern(name, id, email, role, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    this.school = school;

    this.getName = function() {
        return {
            name: this.name
        }
    }

    this.getId = function() {
        return {
            id: this.Id
        }
    }

    this.getEmail = function() {
        return {
            email: this.email
        }
    }
    
    this.getRole = function() {
        return {
            role: this.role
        }
    }

    this.getSchool = function() {
        return {
            school: this.school
        }
    }
}

module.exports = Intern