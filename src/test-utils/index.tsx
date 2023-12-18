import React, {ReactElement} from 'react';

import {ApolloProvider} from '@apollo/client';
import {client} from '@app/api';
import {StarWarsFilmsProvider} from '@app/contexts';
import theme from '@app/theme';
import {NavigationContainer} from '@react-navigation/native';
import {render, RenderOptions} from '@testing-library/react-native';

type AllTheProviders = {
  children: React.ReactNode;
};

const AllTheProviders = ({children}: AllTheProviders) => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={theme}>
        <StarWarsFilmsProvider>{children}</StarWarsFilmsProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => {
  render(ui, {wrapper: AllTheProviders, ...options});
};

export * from '@testing-library/react-native';

export {customRender as render};
