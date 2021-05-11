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
const addContacts = createAction('contacts/add', values => ({
    payload: {
        id: uuidv4(),
        name: values.name,
        number: values.number
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
const deleteContacts = createAction('contacts/delete');
const filterContacts = createAction('contacts/filterContacts');


export { addContacts, deleteContacts, filterContacts };