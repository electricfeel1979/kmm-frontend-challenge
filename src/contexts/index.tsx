import React, {createContext, useEffect, useState} from 'react';

import {useQuery} from '@apollo/client';
import {
  AllStarWarsFilmsQuery,
  GET_ALL_STARWARS_FILMS,
  StarWarsFilm,
} from '@app/graphql';

type StarWarsFilmsContextType = {
  starWarsFilms: StarWarsFilm[];
};

export const StarWarsFilmsContext = createContext<StarWarsFilmsContextType>({
  starWarsFilms: [],
});

export const StarWarsFilmsProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [starWarsFilms, setStarWarsFilms] = useState<StarWarsFilm[]>([]);

  const {loading, error, data} = useQuery<AllStarWarsFilmsQuery>(
    GET_ALL_STARWARS_FILMS,
  );

  useEffect(() => {
    if (data) {
      const {
        allFilms: {films},
      } = data;

      setStarWarsFilms(films);
    }
  }, [data]);

  const value = {
    starWarsFilms,
    loading,
    error,
  };

  return (
    <StarWarsFilmsContext.Provider value={value}>
      {children}
    </StarWarsFilmsContext.Provider>
  );
};
