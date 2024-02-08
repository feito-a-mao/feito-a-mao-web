import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.EXIT};
  
  height: 56px;
  border: 0;
  border-radius: 10px;

  padding: 12px;

    svg {
       margin-right: 8px;
    }

`;

export const SelectContainer = styled.select`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
`;