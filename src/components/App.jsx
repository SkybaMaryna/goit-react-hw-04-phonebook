import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

const CONTACTS_KEY = 'contacts_key';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem(CONTACTS_KEY)?.length)
      this.setState({
        contacts: JSON.parse(localStorage.getItem(CONTACTS_KEY)),
      });
  }

  componentDidUpdate(_, prevSate) {
    if (prevSate.contacts?.length !== this.state.contacts.length) {
      localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    const newContact = { id: nanoid(), ...data };
    this.setState(prevState => {
      if (this.state.contacts.find(contact => contact.name === data.name)) {
        alert(`${data.name} is already in contacts`);
        return;
      }
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleSetFilter = event => {
    this.setState({ filter: event.target.value });
  };

  applyFilters = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div
        style={{
          padding: 20,
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.handleSetFilter} />
        <ContactList
          contacts={this.applyFilters()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
