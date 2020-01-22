const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: String,
  genre: String,
  authorId: {
    type: mongoose.Types.ObjectId,
    ref: "Author",
  },
});

module.exports = mongoose.model("Book", bookSchema);
