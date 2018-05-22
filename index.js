// index.js
const URL = 'https://petdibs.herokuapp.com/pets/';

const reportStatus = (message) => {
  $('#status-message').html(message);
}

const loadPets = () => {
  // Prep work
  const petList = $('#pet-list');
  petList.empty();

  reportStatus('Loading pets, please wait...');

  // Actually load the pets
  axios.get(URL)
    .then((response) => {
      console.log(response);
      response.data.forEach((pet) => {
        petList.append(`<li>${pet.name}</li>`);
      });
      reportStatus('Pets loaded.')
    })
    .catch((error) => {
      console.log(error);
      reportStatus(`Error: ${error.message}`);
    });
    console.log('this is after .get');
    console.log(petList);
};

$(document).ready(() => {
  $('#load').click(loadPets);
});
