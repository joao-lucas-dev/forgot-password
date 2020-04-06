import { lighten } from 'polished';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;

  img {
    width: 200px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;

    h1 {
      font-size: 25px;
      margin-bottom: 20px;
      display: block;
      color: #484848;
      font-weight: normal;
    }

    button {
      margin-top: 40px;
      width: 300px;
      height: 40px;
      font-size: 16px;
      border-radius: 25px;
      background: #7239f2;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background 200ms;

      &:hover {
        background: ${lighten(0.08, '#7239F2')};
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(68, 67, 75);
  height: 10%;
`;
