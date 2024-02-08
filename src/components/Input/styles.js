import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.EXIT};
  color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};

  margin-bottom: 8px;
  border-radius: 10px;

  > input {
    height: 56px;
    width: 100%;

    padding: 18px 16px;

    color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
    background: transparent;
    border: 0;

    &::placeholder {
      color: #000;
    }
  }
  svg {
    margin-left: 12px;
  }
`;
