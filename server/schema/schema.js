const { GraphQLOjectType, GraphQLString, GraphQLSchema } = require("graphql");

const BookType = new GraphQLOjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLOjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //Code to get data from db
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
