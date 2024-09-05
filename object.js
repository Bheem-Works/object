class User {
    constructor(username) {
      this.username = username;
      this.roles = new Set(); // Using Set to avoid duplicate roles
    }
  
    // Method to assign a role to the user
    assignRole(role) {
      this.roles.add(role);
    }
  
    // Method to remove a role from the user
    removeRole(role) {
      this.roles.delete(role);
    }
  
    // Method to check if the user has a specific role
    hasRole(role) {
      return this.roles.has(role);
    }
  }
  
  // Example usage
  const alice = new User('Alice');
  console.log(alice.username); // Alice
  console.log(alice.hasRole('admin')); // false
  
  alice.assignRole('admin');
  console.log(alice.hasRole('admin')); // true
  
  alice.removeRole('admin');
  console.log(alice.hasRole('admin')); // false
//   second one 
