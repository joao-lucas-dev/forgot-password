import React, { useState, useRef } from 'react';

import { Form } from '@unform/web';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import * as Yup from 'yup';

import logo from '../../assets/imgs/logo.svg';
import Input from '../../components/Input';
import api from '../../services/api';
import { Header, Container, Footer } from './styles';

export default function ForgotPassword({ location, history }) {
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusSecond, setFocusSecond] = useState(false);

  const formRef = useRef(null);

  const parsed = queryString.parse(location.search);
  const { token } = parsed;

  async function handleSubmit({ password, confirmPassword }, { reset }) {
    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .min(6, 'A senha deve conter pelo menos 6 caracteres!')
          .required('A nova senha é obrigatória!'),
        confirmPassword: Yup.string().required(
          'A confirmação da nova senha é obrigatória!'
        ),
      });

      await schema.validate(
        { password, confirmPassword },
        {
          abortEarly: false,
        }
      );
      await api.put('/forgot-password', { token, password, confirmPassword });
      reset();

      history.push('/success');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
      reset();
    }
  }

  return (
    <>
      <Header>
        <img src={logo} alt="Logo Petbuddy" />
      </Header>
      <Container>
        <Form
          ref={formRef}
          initialData={{ password: '', confirmPassword: '' }}
          onSubmit={handleSubmit}
        >
          <h1>Resetar Senha</h1>

          <Input
            name="password"
            type="password"
            placeholder="Sua nova senha"
            isFocus={isFocus}
            onFocus={() => setIsFocus(!isFocus)}
            onBlur={() => setIsFocus(!isFocus)}
          />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirme nova senha"
            isFocus={isFocusSecond}
            onFocus={() => setFocusSecond(!isFocusSecond)}
            onBlur={() => setFocusSecond(!isFocusSecond)}
          />

          <button type="submit">alterar senha</button>
        </Form>
      </Container>

      <Footer>Petbuddy 2020 © Todos os direitos reservados</Footer>
    </>
  );
}

ForgotPassword.propTypes = {
  location: PropTypes.object.isRequired,
};
