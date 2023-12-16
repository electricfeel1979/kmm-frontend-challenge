import React, {useContext, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';

import Textt from '@app/components/atoms/Textt';
import {StarWarsFilmsContext} from '@app/contexts';
import {useTheme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

import '@app/i18n';

const Navigation = () => {
  const {colors} = useTheme();

  const {t} = useTranslation();

  const {starWarsFilms} = useContext(StarWarsFilmsContext);

  useEffect(() => {
    console.log(starWarsFilms);
  }, [starWarsFilms]);

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
