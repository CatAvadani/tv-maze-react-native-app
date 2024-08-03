const URL = ' https://api.tvmaze.com';

export const searchShouws = async (query: string) => {
  const response = await fetch(`${URL}/search/shows?q=${query}`);
  const data = await response.json();
  return data;
};

export const getTrendingMovies = async () => {
  const response = await fetch(`${URL}/trending/movies`);
  const data = await response.json();
  return data;
};
