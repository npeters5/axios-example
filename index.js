
const URL = 'https://petdibs.herokuapp.com/pets';

const loadPets = () => {
  const petList = $('#pet-list');
  petList.empty();

  axios.get(URL)
    .then((response) => {
      response.data.forEach((pet) => {
        petList.append(`<li>${pet.name}</li>`);
      });
    })
    .catch((error) => {
      console.log(error);
    });
}


$(document).ready(() => {
  $('#load').click(loadPets);
});
