const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require("graphql");
const _ = require("lodash");

//dummy data
const books = [
  { id: "1", name: "Name of the Wind", genre: "Fantasy" },
  { id: "2", name: "The Final Empire", genre: "Fantasy" },
  { id: "3", name: "The Long Earth", genre: "Sci-Fi" },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //Code to get data from db/other source
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
