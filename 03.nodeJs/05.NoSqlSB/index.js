const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/nodejs");

const Cat = mongoose.model('Cat', { name: String, age: Number });

async function main() { 
  // create

  // const kitty = new Cat({ name: "Adison", age: 0 });
  // await kitty.save(); // adding this record



  // read

  // byId
  // const id = "6569049c6ac2a68e4f82c548";
  // const zildjian = await Cat.findById(id);
  // console.log(zildjian.name);
  // console.log(zildjian.age);

  // // by own condition
  // const name = "Sugar";
  // const sugar = await Cat.findOne({ name: name }); 
  // // we can find by id using { _id: id }.
  // console.log(sugar.name);

  // read all records
  // const cats = await Cat.find();
  // console.log(cats);

  // read where greater then 1
  // const gt1_cats = await Cat.find({
  //   age: {
  //     $gt: 1
  //   }
  // })
  // console.log(gt1_cats);

  


  // update

  // by reading
  // const id = "6569049c6ac2a68e4f82c548";
  // const zildjian = await Cat.findById(id);
  // zildjian.age = 0;
  // await zildjian.save();
  // console.log(zildjian.name);
  // console.log(zildjian.age);

  // by using updateOne to update one record or updateMany to many records
  // const id = "6569049c6ac2a68e4f82c548";
  // await Cat.updateOne({ _id: id }, { age: 2 });
  // console.log("done");

  // update many
  // await Cat.updateMany(
  //   { age: { $lt: 5 } }, // if empty all records will be changed!!!
  //   { age: 1 },
  // )
  // console.log("done");


  // delete
  // const id = "6569049c6ac2a68e4f82c548";
  // await Cat.deleteOne({ _id: id });
  // console.log("done");

  await Cat.deleteMany(
    { age: { $gt: 1 } },
  )
  console.log("done");
}
main()