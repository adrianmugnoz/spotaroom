import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "core/theme";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
