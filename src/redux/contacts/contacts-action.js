import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

//було
// const addContacts = data => ({
//   type: SVGUnitTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     name: data.name,
//     number: data.number
//   },
// });

//стало
const addContact = createAction('contacts/addContacts', data => ({
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number
  },
}));

//було 
// deleteContact = (contactId) => {
//   this.setState((prevState) => ({
//     contacts: prevState.contacts.filter(
//       (contact) => contact.id !== contactId
//     ),
//   }));
// };

//стало
const deleteContact = createAction('contacts/deleContacts');
const filterContacts = createAction('contacts/filterContacts');

export default { addContact, deleteContact, filterContacts };