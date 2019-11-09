const PostService = {
    getAllPosts(db) {
      return db('post');
    },
    createPost(db, newPost) {
      return db
        .insert(newPost)
        .into('post')
        .returning('*')
        .then(rows => rows[0]);
    },
    deletePost(db, id) {
      return db('post')
        .where({ id })
        .delete();
    },
    getPostByUserId(db, users) {
      return db
        .select('*')
        .from('post')
        .where({ users })
    },
  };
  
  module.exports = PostService;