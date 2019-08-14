import React from 'react';
import { StyledContainer } from './container.styles'

export const Container: React.FC = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>
}