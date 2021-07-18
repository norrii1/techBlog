const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Post extends Model { }

Post.init(
{
  title: DataTypes.STRING,
  description: DataTypes.STRING
},
{
  sequelize,
  timestamps: true,
  modelName: 'posts'
})

module.exports = Post