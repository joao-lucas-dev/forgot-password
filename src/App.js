import React, { useState } from 'react';

import Input from './components/Input';
import GlobalStyle, { Form, Aga6 } from './styles/globalStyle';

export default function App() {
  const [isFocus, setIsFocus] = useState(false);
  const [isFocusSecond, setFocusSecond] = useState(false);
  return (
    <div>
      <Form>
        <GlobalStyle />
        <h1>Resetar Senha</h1>
        <Input
          placeholder="Sua nova sehna"
          onFocus={() => setIsFocus(!isFocus)}
          onBlur={() => setIsFocus(!isFocus)}
          isFocus={isFocus}
        />
        <Input
          placeholder="Confirme nova senha"
          onFocus={() => setFocusSecond(!isFocusSecond)}
          onBlur={() => setFocusSecond(!isFocusSecond)}
          isFocus={isFocusSecond}
        />
        <button type="submit">Alterar Senha</button>
      </Form>
      <Aga6>
        Pet Buddy versão 0.0.01 <br /> BeRich 2020 © Todos os direitos
        reservados
      </Aga6>
    </div>
  );
}
