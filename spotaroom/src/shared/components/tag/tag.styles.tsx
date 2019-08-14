import styled from "styled-components";

export const StyledTag = styled.div`
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${ ({theme}: any) => theme.black}
  color: ${({theme}: any) => theme.hintColor}
  height: fit-content;
`;
