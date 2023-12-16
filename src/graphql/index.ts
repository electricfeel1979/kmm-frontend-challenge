import {gql} from '@apollo/client';

export type StarWarsFilm = {
  title: string;
};

export type AllStarWarsFilmsQuery = {
  allFilms: {
    films: StarWarsFilm[];
  };
};

export const GET_ALL_STARWARS_FILMS = gql`
  query Query {
    allFilms {
      films {
        title
      }
    }
  }
`;
