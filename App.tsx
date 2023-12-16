import React from 'react';

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
    <NavigationContainer theme={theme}>
      <Navigation />
    </NavigationContainer>
  );
}
