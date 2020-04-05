import React from 'react';
import { MdLock } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({
  type,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  isFocus,
}) {
  return (
    <Container isFocus={isFocus}>
      <div>
        <MdLock size={18} color={isFocus ? '#484a75' : 'rgb(40, 39, 44)'} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </Container>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  isFocus: PropTypes.bool.isRequired,
};
