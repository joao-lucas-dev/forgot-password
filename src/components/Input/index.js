import React from 'react';
import { MdLock } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ placeholder, onFocus, onBlur, isFocus }) {
  return (
    <Container isFocus={isFocus}>
      <div>
        <MdLock size={18} color={isFocus ? '#7159c1' : 'rgb(40, 39, 44)'} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Container>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onFocus: PropTypes.bool.isRequired,
  onBlur: PropTypes.bool.isRequired,
  isFocus: PropTypes.bool.isRequired,
};
