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

    const dispFrontPage1 = document.createElement('p');
    dispFrontPage1.textContent = 'DISPOSITION';
    listItem.appendChild(dispFrontPage1);

    const dispFrontPage2 = document.createElement('p');
    dispFrontPage2.textContent = 'by';
    listItem.appendChild(dispFrontPage2);

    const dispFrontPage3 = document.createElement('p');
      if (form.transactionType.value === "sale") {
        dispFrontPage3.textContent = `${form.name.value}`;
      } else {
        dispFrontPage3.textContent = `${form.other_party_name.value}`;
        }
    listItem.appendChild(dispFrontPage3);

    const dispFrontPage4 = document.createElement('p');
    dispFrontPage4.textContent = 'in favour of';
    listItem.appendChild(dispFrontPage4);

    const dispFrontPage5 = document.createElement('p');
      if (form.transactionType.value === "purchase") {
        dispFrontPage5.textContent = `${form.name.value}`;
      } else {
        dispFrontPage5.textContent = `${form.other_party_name.value}`;
        }
    listItem.appendChild(dispFrontPage5);

    const dispFrontPage6 = document.createElement('p');
    dispFrontPage6.textContent = `Property: ${form.property_name.value}, ${form.property_no.value} ${form.street_name.value}, ${form.town.value} ${form.postcode.value}`;
    listItem.appendChild(dispFrontPage6);

    const dispMainBodyHeading = document.createElement('p');
    dispMainBodyHeading.textContent = 'DISPOSITION';
    listItem.appendChild(dispMainBodyHeading);

    const dispMainBodyDefinitions1 = document.createElement('p');
    dispMainBodyDefinitions1.textContent = '1.  Definitions';
    listItem.appendChild(dispMainBodyDefinitions1);

    const dispMainBodyDefinitions2 = document.createElement('p');
    dispMainBodyDefinitions2.textContent = 'In this disposition:';
    listItem.appendChild(dispMainBodyDefinitions2);

    const dispMainBodyDefinitions3 = document.createElement('p');
    dispMainBodyDefinitions3.textContent = '"Date of Entry" means [TBC];';
    listItem.appendChild(dispMainBodyDefinitions3);

    const dispMainBodyDefinitions4 = document.createElement('p');
    dispMainBodyDefinitions4.textContent = '"Price" means [TBC]POUNDS (£[TBC] Sterling [on which sum no Value Added Tax is payable][exclusive of Value Added Tax which will be payable in addition]);';
    listItem.appendChild(dispMainBodyDefinitions4);

    const dispMainBodyDefinitions5 = document.createElement('p');
    dispMainBodyDefinitions5.textContent = `"Property" means ALL and WHOLE the property known as ${form.property_name.value}, ${form.property_no.value} ${form.street_name.value}, ${form.town.value} ${form.postcode.value} being the whole subjects registered in the Land Register of Scotland under Title Number ${form.title_no.value}; TOGETHER WITH (One) the parts, privileges and pertinents; and (Two) the Seller's whole right, title and interest present and future in and to the property disponed;`;
    listItem.appendChild(dispMainBodyDefinitions5);

    const dispMainBodyDefinitions6 = document.createElement('p');
      if (form.transactionType.value === "purchase") {
        dispMainBodyDefinitions6.textContent = `"Purchaser" means ${form.name.value}, incorporated under the Companies Acts (Registered Number: ${form.co_no.value}) and having its Registered Office at [TBC];`;
      } else {
        dispMainBodyDefinitions6.textContent = `"Purchaser" means ${form.other_party_name.value}, incorporated under the Companies Acts (Registered Number: ${form.other_party_co_no.value}) and having its Registered Office at [TBC];`;
      }
    listItem.appendChild(dispMainBodyDefinitions6);

    const dispMainBodyDefinitions7 = document.createElement('p');
      if (form.transactionType.value === "sale") {
        dispMainBodyDefinitions7.textContent = `"Seller" means ${form.name.value}, incorporated under the Companies Acts (Registered Number: ${form.co_no.value}) and having its Registered Office at [TBC];`;
      } else {
        dispMainBodyDefinitions7.textContent = `"Seller" means ${form.other_party_name.value}, incorporated under the Companies Acts (Registered Number: ${form.other_party_co_no.value}) and having its Registered Office at [TBC];`;
      }
    listItem.appendChild(dispMainBodyDefinitions7);

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

    return listItem;

  };

  const handleDeleteDisposition = function(event) {

  const list = document.querySelector('#disposition');
  list.remove();

};
