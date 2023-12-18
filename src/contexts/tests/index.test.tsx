import React from 'react';
import {Text} from 'react-native';

import {render, screen} from '@app/test-utils';
import {mockAllFilmsResponse} from '@app/test-utils/mock-data';

import {StarWarsFilmsContext, StarWarsFilmsProvider} from '../';

const expectedFilms = mockAllFilmsResponse.data.allFilms.films;

const MockChildComponent = () => {
  return (
    <StarWarsFilmsContext.Consumer>
      {({starWarsFilms}) => <Text>{starWarsFilms.length}</Text>}
    </StarWarsFilmsContext.Consumer>
  );
};

describe('StarWarsFilmsProvider', () => {
  it('renders the correct number of films', async () => {
    const expectedFilmsCount = expectedFilms.length.toString();

    render(
      <StarWarsFilmsProvider>
        <MockChildComponent />
      </StarWarsFilmsProvider>,
    );

    const filmsCountElement = await screen.findByText(expectedFilmsCount);

    expect(filmsCountElement).toHaveTextContent(expectedFilmsCount);
  });
});
