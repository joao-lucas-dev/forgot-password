import React from 'react';
import Lottie from 'react-lottie';

import logo from '../../assets/imgs/logo.svg';
import checked from '../../assets/lottie/checked.json';
import { Header, Container, Footer } from './styles';

export default function Success() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: checked,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Header>
        <img src={logo} alt="Logo Petbuddy" />
      </Header>
      <Container>
        <Lottie options={defaultOptions} height={150} width={150} />
        <h1>Sucesso!</h1>
        <p>A senha foi troca pela qual você digitou anteriomente.</p>
        <p>Entre no Petbuddy com sua nova senha!</p>
      </Container>

      <Footer>Petbuddy 2020 © Todos os direitos reservados</Footer>
    </>
  );
}
