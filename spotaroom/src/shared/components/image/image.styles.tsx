import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  :hover {
    box-shadow: 10px 10px 5px -6px ${({theme}) => theme.gray};
  }
`;
