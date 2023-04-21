import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        return setName(value);

      case 'number':
        return setNumber(value);

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </StyledLabel>
      <StyledButton>Add contact</StyledButton>
    </StyledForm>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
