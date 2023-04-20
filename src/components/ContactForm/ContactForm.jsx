import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addContact({ ...this.state });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledLabel>
          Name
          <StyledInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          />
        </StyledLabel>
        <StyledLabel>
          Number
          <StyledInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </StyledLabel>
        <StyledButton>Add contact</StyledButton>
      </StyledForm>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
