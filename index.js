const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
`;

const resolvers = {
    Query: {
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({ port: 3042 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
