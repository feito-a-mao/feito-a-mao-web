import styled from "styled-components";
import backgroundImg from "../../assets/fam_background.jpeg";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
  }

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_TITLE};
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > button {
    margin-bottom: 42px;
  }

  select {
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;

    border-radius: 0.8rem;
    padding: 0 1.4rem;

    margin-top: 0.5rem;

    width: 100%;
    height: 2.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  opacity: 30%;
`;
