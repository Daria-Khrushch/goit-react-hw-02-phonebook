import React from 'react';
import shortid from 'shortid';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../App/ContactList/ContactList';

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    console.log(contact);

    if (
      this.state.contacts.some(
        item => item.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert('This contact is already exist!! Try one more time, please!');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...contact, id: shortid.generate() }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      //  <div>
      //   <h1>Phonebook</h1>
      //   <ContactForm ... />

      //   <h2>Contacts</h2>
      //   <Filter ... />
      //   <ContactList ... />
      // </div>

      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <ContactsList
          contacts={contacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default Phonebook;
