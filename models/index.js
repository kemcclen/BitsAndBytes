const User = require('./User');
const Blogpost = require('./Blogpost');
const Comments = require('./comments');

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comments, {
  foreignKey: 'user_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogpost.hasMany(Comments, {
foreignKey: 'blogpost_id'
});

Comments.belongsTo(Blogpost, {
  foreignKey: 'blogpost_id'
});

module.exports = { User, Blogpost, Comments };
