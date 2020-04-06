import React, { useEffect, useRef } from 'react';
import { MdLock } from 'react-icons/md';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Error } from './styles';

export default function Input({ name, isFocus, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isFocus={isFocus}>
        <div>
          <MdLock size={18} color={isFocus ? '#7239F2' : '#484848'} />
        </div>
        <input ref={inputRef} defaultValue={defaultValue} {...rest} />
      </Container>
      <Error error={error}>{error && <strong>{error}</strong>}</Error>
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  isFocus: PropTypes.bool.isRequired,
};
