import styled, {css} from "styled-components";
import {responsive} from "core/theme"

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 3px solid ${({theme}) => theme.primaryColorDark};
  padding: ${({theme}) => theme.spacing()};
  background-color: ${({theme}) => theme.white};

  ${responsive(
    css`
      justify-content: space-between;
    `
  )}

  .company {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .links {
    display: none;
    ${responsive(
      css`
        display: inherit
      `
    )}

    ul {
      list-style: none;
      display: flex;

      li {
        margin-right: 15px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  a {
    text-decoration: none;
  }
`;
