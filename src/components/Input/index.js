import React from 'react';
import { MdLock } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ onFocus, onBlur, isFocus }) {
  return (
    <Container isFocus={isFocus}>
      <div>
        <MdLock size={18} color={isFocus ? '#7159c1' : 'rgb(40, 39, 44)'} />
      </div>
      <input
        type="text"
        placeholder="Sua nova senha"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Container>
  );
}

Input.propTypes = {
  onFocus: PropTypes.bool.isRequired,
  onBlur: PropTypes.bool.isRequired,
  isFocus: PropTypes.bool.isRequired,
};
