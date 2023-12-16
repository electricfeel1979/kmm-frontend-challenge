import React from 'react';
import {StyleSheet, View} from 'react-native';

import Textt from '@app/components/atoms/Textt';
import {
  Roboto_400Regular,
  useFonts as useRoboto,
} from '@expo-google-fonts/roboto';
import {StatusBar} from 'expo-status-bar';

export default function App() {
  const [robotoLoaded] = useRoboto({
    Roboto_400Regular,
  });

  if (!robotoLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Textt>Open up App.tsx to start working on your app!</Textt>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
