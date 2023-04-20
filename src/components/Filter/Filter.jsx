import React from 'react';
import PropTypes from 'prop-types';
import { StyledFilterName } from './Filter.styled';
import { StyledInput } from 'components/ContactForm/ContactForm.styled';

export const Filter = ({ onChangeFilter }) => {
  return (
    <div>
      <StyledFilterName>Find contacts by name</StyledFilterName>
      <StyledInput type="text" onChange={onChangeFilter} />
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
