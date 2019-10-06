document.addEventListener('DOMContentLoaded', () => {

  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit',handleNewItemSubmitForm);

  const deleteBtn = document.querySelector('#deleteBtn');
  deleteBtn.addEventListener('click',handleDeleteDisposition);

  });

  const handleNewItemSubmitForm = function(event) {

    event.preventDefault();

    const listItem = createDisposition(event.target);
    const list = document.querySelector('#disposition');
    list.appendChild(listItem);

    event.target.reset();

  };

  const createDisposition = function (form) {

    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    const county = document.createElement('p');
    county.textContent = `${form.county.value}`;
    listItem.appendChild(county);

    const title_no = document.createElement('p');
    title_no.textContent = `${form.title_no.value}`;
    listItem.appendChild(title_no);

    const property_name = document.createElement('p');
    property_name.textContent = `${form.property_name.value}`;
    listItem.appendChild(property_name);

    const property_no = document.createElement('p');
    property_no.textContent = `${form.property_no.value}`;
    listItem.appendChild(property_no);

    const street_name = document.createElement('p');
    street_name.textContent = `${form.street_name.value}`;
    listItem.appendChild(street_name);

    const town = document.createElement('p');
    town.textContent = `${form.town.value}`;
    listItem.appendChild(town);

    const postcode = document.createElement('p');
    postcode.textContent = `${form.postcode.value}`;
    listItem.appendChild(postcode);

    // const dispFrontPage1 = document.createElement('p');
    // dispFrontPage1.textContent = 'DISPOSITION';
    // listItem.appendChild(dispFrontPage1);
    //
    // const dispFrontPage2 = document.createElement('p');
    // dispFrontPage2.textContent = 'by';
    // listItem.appendChild(dispFrontPage2);
    //
    // const dispFrontPage1 = document.createElement('p');
    // dispFrontPage1.textContent = 'DISPOSITION';
    // listItem.appendChild(dispFrontPage1);
    //
    // const dispFrontPage1 = document.createElement('p');
    // dispFrontPage1.textContent = 'DISPOSITION';
    // listItem.appendChild(dispFrontPage1);
    // const dispFrontPage1 = document.createElement('p');
    // dispFrontPage1.textContent = 'DISPOSITION';
    // listItem.appendChild(dispFrontPage1);

    return listItem;

  };

  const handleDeleteDisposition = function(event) {

  const list = document.querySelector('#disposition');
  list.remove();

};
