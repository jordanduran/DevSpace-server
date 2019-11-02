const UsersService = {
    getAllUsers(db) {
        return db('users')
    }
}

module.exports = UsersService;