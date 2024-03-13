const user = require('./User');
const blogPost = require('./blogPost');
const Comment = require("./comment");

user.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
})

user.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "CASCADE",
})

blogPost.belongsTo(user, {
    foreignKey: 'user_id'
})

blogPost.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "CASCADE",
})

Comment.belongsTo(user, {
    foreignKey: 'user_id',
})

Comment.belongsTo(blogPost, {
    foreignKey: 'post_id',
    onDelete: "CASCADE",
})


module.exports = {
    user,
    blogPost,
    Comment
};