import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const select = document.querySelector('.breed-select');
select.addEventListener('change', selectOnChange);
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');
loader.hidden = true;
error.hidden = true;
select.style.width = '200px';

function createLayoutSelect(response) {
  const options = response.map(({ id, name }) => {
    return `<option value="${id}" class="js-option">${name}</option>`;
  });
  options.unshift(
    '<option value="" disabled selected>Оберіть породу кішки...</option>'
  );
  return (select.innerHTML = options.join(''));
}
fetchBreeds()
  .then(response => createLayoutSelect(response))
  .catch(err => console.log(err));

function selectOnChange(event) {
  if (event.target.value) {
    select.firstChild.remove();
  }
  fetchCatByBreed(event.target.value).then(response =>
    createLayoutInfo(response)
  ).catch(err => console.log(err))
}

function createLayoutInfo(response) {
  console.log(response);
}