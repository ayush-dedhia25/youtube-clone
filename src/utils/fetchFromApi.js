import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const config = {
   url: BASE_URL,
   params: {
      maxResults: '50',
   },
   headers: {
      'X-RapidAPI-Key': 'e5e9d912c4msh3097411c99d1555p125313jsn61d97f29495a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
   }
};

export async function fetchFromApi(url) {
   const { data } = await axios.get(`${BASE_URL}/${url}`, config);
   return data;
}