import React from 'react';

const PokemonProfile = ({ att, value }) => {
  return (
    <div>
      <h4>{att}</h4>
      {value}
    </div>
  );
};

export default PokemonProfile;
