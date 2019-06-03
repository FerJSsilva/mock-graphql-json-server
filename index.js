const { ApolloServer, gql } = require('apollo-server');
const { fetchCompanies, fetchUsers } = require('./resolvers/resolvers');
const typeDefs = gql`
  type Query {
    company: [Company]
    user: [User]
  }, 
  type Company {
    id: String
    name: String
    description: String
    users: [User]
  },
  type User {
    id: String,
    firstName: String,
    age: Int,
    company: Company
  },
`;

const resolvers = {
    Query: {
        company: fetchCompanies,
        user: fetchUsers,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({ port: 3042 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
