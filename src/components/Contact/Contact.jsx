import React from 'react';
import PropTypes from 'prop-types';

export const Contact = ({ name, number }) => {
  return (
    <p>
      {name} {number}
    </p>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
