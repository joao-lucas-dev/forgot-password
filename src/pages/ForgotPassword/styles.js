import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 95%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 25px;
    margin-bottom: 10px;
    display: block;
    color: #fff;
  }

  button {
    margin-top: 20px;
    width: 300px;
    height: 50px;
    font-size: 16px;
    border-radius: 5px;
    background: #484a75;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 200ms;

    &:hover {
      background: ${lighten(0.08, '#484a75')};
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(68, 67, 75);
`;
