import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// import { Container } from './styles';

function Home({ props }) {

    const { pokemons } = props;

    return (
        <div>
        Pokédex
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/sobre">
              <a>Sobre o projeto</a>
            </Link>
          </li>
        </ul>
  
        <ul>
          {pokemons.map((pokemon) => (
            <li key={pokemon.entry_number}>
              <Link href={`/pokemon/${pokemon.entry_number}`}>
                <a>
                  {pokemon.pokemon_species.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
}


Home.getInitialProps = async (ctx) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokedex/2')
    const json = await res.json()

    return {
        props: {
            pokemons: json.pokemon_entries
        }
    }
}

export default Home;