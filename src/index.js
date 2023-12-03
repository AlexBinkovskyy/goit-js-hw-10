import axios from 'axios';
const MAIN_KEY =
  'live_VRMdp0bWbeOrrNl6pew4MxIkbQ3yK2ufGeK2s0xbqs98EkMkG9wFzO4zuPZmNuST';
axios.defaults.headers.common['x-api-key'] = MAIN_KEY;
const MAIN_URL = 'https://api.thecatapi.com/v1';
const END_POINT = '/breeds';

const instance = axios.create({
  baseURL: MAIN_URL,
});

params: {
}

const select = document.querySelector('.breed-select');
select.addEventListener('change', selectOnChange);
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
loader.hidden = true;
error.hidden = true;
select.style.width = '200px';

import { fetchBreeds } from './cat-api';

function createLayout(response) {
  return response
    .map(({ id, name }) => {
      return `<option value="${id}" class="js-option">${name}</option>`;
    })
    .join('');
}



function selectOnChange(event) {
  console.log(event);
}
