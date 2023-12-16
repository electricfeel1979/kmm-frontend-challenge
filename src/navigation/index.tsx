import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';

import Textt from '@app/components/atoms/Textt';
import {useTheme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

import '@app/i18n'; // Make sure to import your i18n configuration

const Navigation = () => {
  const {colors} = useTheme();

  const {t} = useTranslation();

  return (
    <View style={styles.container}>
      <Textt style={[{color: colors.primary}]}>{t('formTitle')}</Textt>
      <StatusBar style="auto" />
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
