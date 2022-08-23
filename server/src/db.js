const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/to-do-db');
}

const toDoSchema = new mongoose.Schema({
  toDo: String,
  done: Boolean,
  createdAt: Date
}, {collection: "todos"});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = { Mongoose: mongoose, toDoSchema: toDoSchema, ToDo: ToDo };
