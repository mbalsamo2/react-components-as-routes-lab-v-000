import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsList = actors.map((actor, index) => {
    return (
      <div key={index}>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>
    )
  });

  return (
    <div>
      <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
