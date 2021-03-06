const UsersService = {
  getAllUsers(db) {
    return db('users');
  },
  createUser(db, newUser) {
    return db
      .insert(newUser)
      .into('users')
      .returning('*')
      .then(rows => rows[0]);
  },
  deleteUser(db, id) {
    return db('users')
      .where({ id })
      .delete();
  },
  updateUser(db, id, newUser) {
    return db('users')
      .where({ id })
      .update(newUser)
  },
  getUsersById(db, id) {
    return db
      .select('*')
      .from('users')
      .where({ id })
      .first();
  },
  getUsersByEmail(db, email) {
    return db('users')
      .where('email', email)
      .first();
  }
};

module.exports = UsersService;
