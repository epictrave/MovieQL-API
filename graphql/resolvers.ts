import { getMovies, getMovie, getSuggestions } from './db';

type movieInfo = {
  id: number;
  limit: number;
  rating: number;
};
const resolvers = {
  Query: {
    movies: (_: any, { limit, rating }: movieInfo) => getMovies(limit, rating),
    movie: (_: any, { id }: movieInfo) => getMovie(id),
    suggestions: (_: any, { id }: movieInfo) => getSuggestions(id),
  },
};
export default resolvers;
