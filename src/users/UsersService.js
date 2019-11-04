const UsersService = {
    getAllUsers(db) {
        return db('users')
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
            .first();
    },
    getUsersById(db, id){
        return db
            .select('*')
            .from('users')
            .where({ id })
            .first();
    },
};

module.exports = noteService;

module.exports = UsersService;