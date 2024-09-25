// 'use strict'
// const { Model } = require('sequelize')
// module.exports = (sequelize, DataTypes) => {
//   class Todo extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate (models) {
//       // define association here
//     }
//   }
//   Todo.init(
//     {
//       title: DataTypes.STRING,
//       isdone: DataTypes.BOOLEAN
//     },
//     {
//       sequelize,
//       modelName: 'Todo',
//       underscored: true
//     }
//   )
//   return Todo
// }

'use strict'
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isdone: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      tableName: 'Todos',
      underscored: true, // Use snake_case in DB, camelCase in code
      timestamps: true // createdAt, updatedAt will be automatically managed
    }
  )

  return Todo
}
