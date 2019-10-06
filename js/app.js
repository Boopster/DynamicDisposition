document.addEventListener('DOMContentLoaded', () => {

  console.log('Javascript loaded');

  const handleSubmitForm = function(event) {

    event.preventDefault();

    const county = document.createElement('li');
    county.textContent = `${this.county.value}`;

    const title_no = document.createElement('li');
    title_no.textContent = `${this.title_no.value}`;


    const property_name = document.createElement('li');
    property_name.textContent = `${this.property_name.value}`;


    const property_no = document.createElement('li');
    property_no.textContent = `${this.property_no.value}`;


    const street_name = document.createElement('li');
    street_name.textContent = `${this.street_name.value}`;


    const town = document.createElement('li');
    town.textContent = `${this.town.value}`;


    const postcode = document.createElement('li');
    postcode.textContent = `${this.postcode.value}`;



  const list = document.querySelector('#disposition');
  list.appendChild(county);
  list.appendChild(title_no);
  list.appendChild(property_name);
  list.appendChild(property_no);
  list.appendChild(street_name);
  list.appendChild(town);
  list.appendChild(postcode);
  document.querySelector('#new-item-form').reset();

};

const handleDeleteDisposition = function(event) {

  const listItem = document.querySelector('#disposition');
  listItem.remove();
};

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit',handleSubmitForm);

  const deleteBtn = document.querySelector('#deleteBtn');
  deleteBtn.addEventListener('click',handleDeleteDisposition);

});
