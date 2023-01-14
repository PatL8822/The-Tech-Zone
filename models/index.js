const Posts = require('./post');
const User = require('./User')

User.hasMany(Posts, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

Posts.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
})

module.exports = { User, Posts }