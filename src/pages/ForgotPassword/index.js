import React, { useState } from 'react';

import PropTypes from 'prop-types';
import queryString from 'query-string';

import Input from '../../components/Input';
import api from '../../services/api';
import { Container, Form, Footer } from './styles';

export default function ForgotPassword({ location }) {
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusSecond, setFocusSecond] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const parsed = queryString.parse(location.search);
  const { token } = parsed;

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put('/forgot-password', { token, password, confirmPassword });
      setPassword('');
      setConfirmPassword('');
      alert('Senha trocada com sucesso!');
    } catch (err) {
      alert('Algo deu errado. Por favor, tente mais tarde!');
    }
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1>Resetar Senha</h1>

          <Input
            type="password"
            value={password}
            placeholder="Sua nova senha"
            onChange={(e) => setPassword(e.target.value)}
            isFocus={isFocus}
            onFocus={() => setIsFocus(!isFocus)}
            onBlur={() => setIsFocus(!isFocus)}
          />
          <Input
            type="password"
            value={confirmPassword}
            placeholder="Confirme nova senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
            isFocus={isFocusSecond}
            onFocus={() => setFocusSecond(!isFocusSecond)}
            onBlur={() => setFocusSecond(!isFocusSecond)}
          />

          <button type="submit">Alterar Senha</button>
        </Form>
      </Container>

      <Footer>Petbuddy 2020 © Todos os direitos reservados</Footer>
    </>
  );
}

ForgotPassword.propTypes = {
  location: PropTypes.object.isRequired,
};
