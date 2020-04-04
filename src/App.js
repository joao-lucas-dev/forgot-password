import React, { useState } from 'react';

import Input from './components/Input';
import GlobalStyle from './styles/globalStyle';

export default function App() {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Input
        onFocus={() => setIsFocus(!isFocus)}
        onBlur={() => setIsFocus(!isFocus)}
        isFocus={isFocus}
      />
    </>
  );
}
