export function fetchBreeds() {
    return axios
      .get(`${MAIN_URL}${END_POINT}`)
      .then(response => {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  