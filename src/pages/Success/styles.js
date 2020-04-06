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

  h1 {
    margin: 20px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 22px;
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
