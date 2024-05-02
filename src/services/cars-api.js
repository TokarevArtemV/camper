import axios from 'axios';

export const carsInstance = axios.create({
  baseURL: 'https://65aecb4d1dfbae409a758f43.mockapi.io/API',
});

export const getAllCars = async (page = 1, limit = 4) => {
  const url = new URL(
    'https://65aecb4d1dfbae409a758f43.mockapi.io/API/adverts'
  );
  url.searchParams.append('page', page);
  url.searchParams.append('limit', limit);
  const response = await carsInstance.get(url.href);

  return response;
};
