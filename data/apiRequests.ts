const URL = 'https://api.tvmaze.com';

export const searchShows = async (query: string) => {
  const response = await fetch(`${URL}/search/shows?q=${query}`);
  if (!response.ok) {
    throw new Error('Failed to fetch shows');
  }
  const data = await response.json();
  return data;
};

export const getShowDetails = async (id: number) => {
  const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const data = await response.json();
  return data;
};

export const getTrendingMovies = async () => {
  const response = await fetch(`${URL}/trending/movies`);
  const data = await response.json();
  return data;
};
