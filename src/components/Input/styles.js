import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  height: 50px;
  border: 2px solid
    ${(props) => (props.isFocus ? '#7159c1' : 'rgb(40, 39, 44)')};
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background: #19181f;

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
