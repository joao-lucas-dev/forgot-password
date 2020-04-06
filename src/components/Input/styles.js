import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  width: 300px;
  height: 50px;
  border: 2px solid
    ${(props) => (props.isFocus ? '#484a75' : 'rgb(40, 39, 44)')};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background: #19181f;
  transition: border 0.2s ease 0s;

  div {
    padding: 0 15px;
  }

  input {
    flex: 1;
    border: none;
    outline: 0;
    font-size: 16px;
    height: 100%;
    background: transparent;
    color: #fff;
  }
`;

export const Error = styled.div`
  display: ${(props) => (props.error ? 'block' : 'none')};
  width: 100%;
  margin-top: 10px;
  color: #f00;
`;
