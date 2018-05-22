
const URL = 'https://petdibs.herokuapp.com/pets';

const reportStatus = (message) => {
  $('#status-message').html(message);
}

const loadPets = () => {
  reportStatus('Loading Pets!');
  const petList = $('#pet-list');
  petList.empty();

  axios.get(URL)
    .then((response) => {
      reportStatus('Successfully loaded Pets');
      response.data.forEach((pet) => {
        petList.append(`<li>${pet.name}</li>`);
      });
    })
    .catch((error) => {
      reportStatus(`Encountered an error while loading pets ${error.message}`);
      console.log(error);
    });
}


$(document).ready(() => {
  $('#load').click(loadPets);
});
