/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Store from './store';

function ReduxProvider({ children }) {
  return <Provider store={Store}>{children}</Provider>;
}
const reduxRender = (ui, options) =>
  render(ui, { wrapper: ReduxProvider }, ...options);

export * from '@testing-library/react';
export { reduxRender as render };
