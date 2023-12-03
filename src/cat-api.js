import axios from 'axios';
import { reject } from 'lodash';
const MAIN_KEY =
  'live_VRMdp0bWbeOrrNl6pew4MxIkbQ3yK2ufGeK2s0xbqs98EkMkG9wFzO4zuPZmNuST';
axios.defaults.headers.common['x-api-key'] = MAIN_KEY;
const MAIN_URL = 'https://api.thecatapi.com/v1';
const END_POINT_BREED = '/breeds';
const END_POINT_INFO = '/images/search';
const instance = axios.create({
  baseURL: MAIN_URL,
});

export function fetchBreeds() {
  return axios
    .get(`${MAIN_URL}${END_POINT_BREED}`)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(err => {
      return err;
    });
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${MAIN_URL}${END_POINT_INFO}?breed_ids=${breedId}`)
    .then(response => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch(err => {
      console.log(err);
    });
}
