const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const schema = require("./schema/schema");

const app = express();

app.use(cors());

mongoose
  .connect("mongodb://localhost/books_db", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
