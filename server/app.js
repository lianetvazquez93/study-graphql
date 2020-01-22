const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");

const schema = require("./schema/schema");

const app = express();

mongoose
  .connect("mongodb://localhost/books_db", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
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
