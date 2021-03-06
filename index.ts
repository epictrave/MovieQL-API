import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';
import typeDefs from './graphql/typeDefs';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});
server.start(() => console.log('Graphql server running'));
