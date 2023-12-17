const { Sequelize, QueryTypes, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/nodejs');

const User = sequelize.define(
  'User', 
  {
    name: {
      type: DataTypes.STRING
    }, 
    email: {
      type: DataTypes.STRING
    }
  },
  {
    tableName: "users",
    timestamps: false,
  }
)

async function main() 
{
  // Find all records
  // const users = await User.findAll();
  // console.log(users);

  // Find one record by pk
  // const user = await User.findByPk(1); // gives null if does't exist!
  // console.log(user);

  // Create new record
  // const user = new User(
  //   {
  //     name: "Shakal",
  //     email: "shakal@shaka.com"
  //   }
  // )
  // await user.save() // save() ==> async func

  // Update record
  // User.update({ name: "Mostafa" }, { where: { id: 3 } })

  // Delete record
  // User.destroy({ where: { id: 3 } })


}

main();