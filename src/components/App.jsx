import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

const CONTACTS_KEY = 'contacts_key';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem(CONTACTS_KEY)?.length) {
      return JSON.parse(localStorage.getItem(CONTACTS_KEY));
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const newContact = { id: nanoid(), ...data };

    if (contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleSetFilter = event => {
    setFilter(event.target.value);
  };

  const applyFilters = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        padding: 20,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>
      <Filter onChangeFilter={handleSetFilter} />
      <ContactList contacts={applyFilters()} deleteContact={deleteContact} />
    </div>
  );
};
