import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View} from 'react-native';

import {useQuery} from '@apollo/client';
import Textt from '@app/components/atoms/Textt';
import {AllStarWarsFilmsQuery, GET_ALL_STARWARS_FILMS} from '@app/graphql';
import {useTheme} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';

import '@app/i18n';

const Navigation = () => {
  const {colors} = useTheme();

  const {t} = useTranslation();

  const {loading, error, data} = useQuery<AllStarWarsFilmsQuery>(
    GET_ALL_STARWARS_FILMS,
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

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
