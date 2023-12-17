const { Sequelize, QueryTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/nodejs');

function createUser(name, email) {
  return sequelize.query(
    `INSERT INTO users (name, email) VALUES ('${name}', '${email}')`,
    { type: QueryTypes.INSERT }
  );
}

function getUsers() {
  return sequelize.query(
    `SELECT * FROM users`,
    { type: QueryTypes.SELECT }
  )
}

function getUserById(id) {
  return sequelize.query(
    `SELECT * FROM users WHERE id=${id}`,
    { type: QueryTypes.SELECT }
  )
}

function deleteUser(id) {
  return sequelize.query(
    `DELETE FROM users WHERE id=${id};`,
    { type: QueryTypes.DELETE }
  )
}

function updateUserById(id, name, email) {
  return sequelize.query(
    `UPDATE users 
    SET name = '${name}', email = '${email}'
    WHERE id = ${id};`,
    { type: QueryTypes.UPDATE }
  )
}

async function main() {
  // await createUser('Ahmad', "ahmad@adham.com");
  const users = await getUsers();
  console.log(users);

  const user_1 = await getUserById(1);
  console.log(user_1);
  console.log(user_1[0].name);
  console.log(user_1[0].email);

  await updateUserById(1, user_1[0].name, "jamol@kamol.com");

  console.log(user_1[0].email);
}

main();