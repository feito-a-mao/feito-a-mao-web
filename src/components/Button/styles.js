import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, $colored }) =>
    $colored ? theme.COLORS.BLACK : theme.COLORS.PINK_TITLE};
  color: ${({ theme, $colored }) =>
    $colored ? theme.COLORS.PINK_TITLE : theme.COLORS.THIRD_BACKGROUND};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
