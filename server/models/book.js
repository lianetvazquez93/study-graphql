const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  genre: String,
  authorId: mongoose.SchemaTypes.ObjectId,
});

module.exports = mongoose.model("Book", bookSchema);
