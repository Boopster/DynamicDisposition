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

    const listItem = document.createElement('li-none');
    listItem.classList.add('list-item');

    const dispFrontPage1 = document.createElement('p');
    dispFrontPage1.textContent = 'DISPOSITION';
    listItem.appendChild(dispFrontPage1);

    const dispFrontPage2 = document.createElement('p');
    dispFrontPage2.textContent = 'by';
    listItem.appendChild(dispFrontPage2);

    const dispFrontPage3 = document.createElement('p');
      if (form.transactionType.value === "sale") {
        dispFrontPage3.textContent = `${form.client_name.value}`;
      } else {
        dispFrontPage3.textContent = `${form.other_party_name.value}`;
        }
    listItem.appendChild(dispFrontPage3);

    const dispFrontPage4 = document.createElement('p');
    dispFrontPage4.textContent = 'in favour of';
    listItem.appendChild(dispFrontPage4);

    const dispFrontPage5 = document.createElement('p');
      if (form.transactionType.value === "purchase") {
        dispFrontPage5.textContent = `${form.client_name.value}`;
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

    const dispMainBodyDefinitionsBurdensWrits = document.createElement('p');
    dispMainBodyDefinitionsBurdensWrits.textContent = '"Burdens Writs" means [TBC];';
    listItem.appendChild(dispMainBodyDefinitionsBurdensWrits);

    const dispMainBodyDefinitionsDateOfEntry = document.createElement('p');
    dispMainBodyDefinitionsDateOfEntry.textContent = `"Date of Entry" means ${form.dateOfEntry.value};`;
    listItem.appendChild(dispMainBodyDefinitionsDateOfEntry);

    const dispMainBodyDefinitionsPrice = document.createElement('p');
    dispMainBodyDefinitionsPrice.textContent = `"Price" means [TBC] POUNDS (£${form.price.value}) Sterling [on which sum no Value Added Tax is payable][exclusive of Value Added Tax which will be payable in addition];`;
    listItem.appendChild(dispMainBodyDefinitionsPrice);

    const dispMainBodyDefinitionsProperty = document.createElement('p');
    dispMainBodyDefinitionsProperty.textContent = `"Property" means ALL and WHOLE the property known as ${form.property_name.value}, ${form.property_no.value} ${form.street_name.value}, ${form.town.value} ${form.postcode.value} being the whole subjects registered in the Land Register of Scotland under Title Number ${form.title_no.value}; TOGETHER WITH (One) the parts, privileges and pertinents; and (Two) the Seller's whole right, title and interest present and future in and to the property disponed;`;
    listItem.appendChild(dispMainBodyDefinitionsProperty);

    const dispMainBodyDefinitionsPurchaser = document.createElement('p');
      if (form.transactionType.value === "purchase") {
        dispMainBodyDefinitionsPurchaser.textContent = `"Purchaser" means ${form.client_name.value}, incorporated under the Companies Acts (Registered Number: ${form.client_co_no.value}) and having its Registered Office at ${form.client_property_name.value}, ${form.client_property_no.value} ${form.client_street_name.value}, ${form.client_town.value} ${form.client_postcode.value};`;
      } else {
        dispMainBodyDefinitionsPurchaser.textContent = `"Purchaser" means ${form.other_party_name.value}, incorporated under the Companies Acts (Registered Number: ${form.other_party_co_no.value}) and having its Registered Office at ${form.other_party_property_name.value}, ${form.other_party_property_no.value} ${form.other_party_street_name.value}, ${form.other_party_town.value} ${form.other_party_postcode.value};`;
      }
    listItem.appendChild(dispMainBodyDefinitionsPurchaser);

    const dispMainBodyDefinitionsSeller = document.createElement('p');
      if (form.transactionType.value === "sale") {
        dispMainBodyDefinitionsSeller.textContent = `"Seller" means ${form.client_name.value}, incorporated under the Companies Acts (Registered Number: ${form.client_co_no.value}) and having its Registered Office at ${form.client_property_name.value}, ${form.client_property_no.value} ${form.client_street_name.value}, ${form.client_town.value} ${form.client_postcode.value};`;
      } else {
        dispMainBodyDefinitionsSeller.textContent = `"Seller" means ${form.other_party_name.value}, incorporated under the Companies Acts (Registered Number: ${form.other_party_co_no.value}) and having its Registered Office at ${form.other_party_property_name.value}, ${form.other_party_property_no.value} ${form.other_party_street_name.value}, ${form.other_party_town.value} ${form.other_party_postcode.value};`;
      }
    listItem.appendChild(dispMainBodyDefinitionsSeller);

    const dispMainBodyConsideration = document.createElement('p');
    dispMainBodyConsideration.textContent = '2.  Consideration';
    listItem.appendChild(dispMainBodyConsideration);

    const dispMainBodyConsideration1 = document.createElement('p');
    dispMainBodyConsideration1.textContent = '2.1  The Seller is the proprietor of the Property;';
    listItem.appendChild(dispMainBodyConsideration1);

    const dispMainBodyConsideration2 = document.createElement('p');
    dispMainBodyConsideration2.textContent = '2.2  The Seller has sold the Property to the Purchaser for the Price;';
    listItem.appendChild(dispMainBodyConsideration2);

    const dispMainBodyConsideration3 = document.createElement('p');
    dispMainBodyConsideration3.textContent = '2.3 The Seller acknowledges receipt of the Price;';
    listItem.appendChild(dispMainBodyConsideration3);

    const dispMainBodyDisposition1 = document.createElement('p');
    dispMainBodyDisposition1.textContent = '3.  Disposition';
    listItem.appendChild(dispMainBodyDisposition1);

    const dispMainBodyDisposition2 = document.createElement('p');
    dispMainBodyDisposition2.textContent = 'The Seller DISPONES the Property to the Purchaser;';
    listItem.appendChild(dispMainBodyDisposition2);

    const dispMainBodyBurdens1 = document.createElement('p');
    dispMainBodyBurdens1.textContent = '4.  Burdens';
    listItem.appendChild(dispMainBodyBurdens1);

    const dispMainBodyBurdens2 = document.createElement('p');
    dispMainBodyBurdens2.textContent = 'The Property is disponed WITH AND UNDER so far as valid, subsisting and applicable the burdens, servitudes, conditions and encumbrances contained in the Burdens Writs;';
    listItem.appendChild(dispMainBodyBurdens2);

    const dispMainBodyEntry1 = document.createElement('p');
    dispMainBodyEntry1.textContent = '5.  Entry';
    listItem.appendChild(dispMainBodyEntry1);

    const dispMainBodyEntry2 = document.createElement('p');
    dispMainBodyEntry2.textContent = 'The Property is sold WITH ENTRY and VACANT POSSESSION on the Date of Entry;';
    listItem.appendChild(dispMainBodyEntry2);

    const dispMainBodyWarrandice1 = document.createElement('p');
    dispMainBodyWarrandice1.textContent = '6.  Warrandice';
    listItem.appendChild(dispMainBodyWarrandice1);

    const dispMainBodyWarrandice2 = document.createElement('p');
    dispMainBodyWarrandice2.textContent = 'The Seller grants warrandice: IN WITNESS WHEREOF this disposition is executed by the Seller as follows:-';
    listItem.appendChild(dispMainBodyWarrandice2);

    // const county = document.createElement('p');
    // county.textContent = `${form.county.value}`;
    // listItem.appendChild(county);
    //
    // const title_no = document.createElement('p');
    // title_no.textContent = `${form.title_no.value}`;
    // listItem.appendChild(title_no);
    //
    // const property_name = document.createElement('p');
    // property_name.textContent = `${form.property_name.value}`;
    // listItem.appendChild(property_name);
    //
    // const property_no = document.createElement('p');
    // property_no.textContent = `${form.property_no.value}`;
    // listItem.appendChild(property_no);
    //
    // const street_name = document.createElement('p');
    // street_name.textContent = `${form.street_name.value}`;
    // listItem.appendChild(street_name);
    //
    // const town = document.createElement('p');
    // town.textContent = `${form.town.value}`;
    // listItem.appendChild(town);
    //
    // const postcode = document.createElement('p');
    // postcode.textContent = `${form.postcode.value}`;
    // listItem.appendChild(postcode);

    return listItem;

  };

  const handleDeleteDisposition = function(event) {

  const list = document.querySelector('#disposition');
  list.remove();

};
