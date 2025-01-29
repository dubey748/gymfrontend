const getCachedData = (url) => {
  const cachedData = localStorage.getItem(url);
  return cachedData ? JSON.parse(cachedData) : null;
};

const setCachedData = (url, data) => {
  localStorage.setItem(url, JSON.stringify(data));
};

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const cachedData = getCachedData(url);
  if (cachedData) {
    return cachedData;
  }

  const res = await fetch(url, options);
  const data = await res.json();
  setCachedData(url, data);
  return data;
};