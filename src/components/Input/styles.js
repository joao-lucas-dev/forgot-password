import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 50px;
  border-bottom: 2px solid ${(props) => (props.isFocus ? '#7239F2' : '#bababa')};
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: border 0.2s ease 0s;

  div {
    padding: 0 10px;
  }

  input {
    flex: 1;
    border: none;
    outline: 0;
    font-size: 16px;
    height: 100%;
    background: transparent;
  }
`;

export const Error = styled.div`
  display: ${(props) => (props.error ? 'block' : 'none')};
  width: 100%;
  margin-top: 10px;
  color: #f00;
  font-size: 12px;
`;
