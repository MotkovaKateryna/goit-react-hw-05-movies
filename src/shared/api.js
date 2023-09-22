import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '86eb0a0633e53490d444bb214710bd0c',
  },
});


export const getAllMovies = async () => {
  const {data} = await instance.get("/trending/movie/day");
  return data; 

}

export const getMovieById = async (id) => {
  const {data} = await instance.get(`/movie/${id}`);
  return data; 
}


export const searchMovies = async (search, page) => { 
  const { data } = await instance.get("/search/movie", {
    params: {
      query:search,
      page,
      include_adult: "false",
      language: 'en-US',
    },
  });
  return data;

};


