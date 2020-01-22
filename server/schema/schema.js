const { GraphQLOjectType, GraphQLString } = require("graphql");

const BookType = new GraphQLOjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});
