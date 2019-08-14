import styled, { css } from "styled-components";
import { Button } from "../";
import { responsive } from "core/theme";

export const StyledPropertyCard = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing()};
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ theme }) => theme.white};
  border-bottom: 2px solid ${({ theme }) => theme.primaryColorDark};

  ${responsive(
    css`
      display: flex;
    `
  )}

  .image {
    margin-bottom: ${({ theme }) => theme.spacing(1)};
    ${responsive(
      css`
        max-width: 200px;
        display: flex;
        flex-direction: column;
        align-self: center;
        margin-right: ${({ theme }) => theme.spacing()};
        margin-bottom: 0;
      `
    )}
  }

  .description {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;

    .heading {
      text-align: left;

      ${responsive(
        css`
          display: flex;
          justify-content: space-between;
        `
      )}

      .price {
        display: flex;
        justify-content: flex-end;
        margin-left: 30px;
      }
    }

    .actions {
      text-align: right;
    }
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  ${({ secondary }) => secondary && css`
    visibility: hidden;
    margin-right: ${({theme}) => theme.spacing(1)};
  `}
  ${responsive(
    css`
      width: inherit;
      visibility: visible;
    `
  )}
`;
