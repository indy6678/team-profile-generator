const { Manager } = require('../lib/manager');

test('creates a manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'role', 'officeNumber');

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.role).toBe('role');
    expect(manager.officeNumber).toBe('officeNumber');
})