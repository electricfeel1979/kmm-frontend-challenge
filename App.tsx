import React from 'react';

import {ApolloProvider} from '@apollo/client';
import {client} from '@app/api';
import Navigation from '@app/navigation';
import theme from '@app/theme';
import {
  Roboto_400Regular,
  useFonts as useRoboto,
} from '@expo-google-fonts/roboto';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  if (!robotoLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={theme}>
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}
