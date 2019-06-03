const { ApolloServer, gql } = require('apollo-server');
const { fetchCompanies, fetchCompanyUsers, fetchUsers, fetchUserCompany } = require('./resolvers/resolvers');
const typeDefs = gql`
  type Query {
    companies: [Company]
    users: [User]
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
      companies: fetchCompanies,
      users: fetchUsers,
    },
    Company: {
      users: fetchCompanyUsers,
    },
    User: {
      company: fetchUserCompany,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen({ port: 3042 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
});
