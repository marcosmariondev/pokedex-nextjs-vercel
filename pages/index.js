import React, { useState, useEffect } from 'react';

// import { Container } from './styles';

function Home({ props }) {

    const { pokemons } = props;

    return (
        <>
            <h1>Listagem de pokemons!!!</h1>
            <hr></hr>
            <ul>
                {pokemons.length && pokemons.map((pokemon) => {

                    return (<li key={pokemon.entry_number}>
                        {pokemon.entry_number} -  {pokemon.pokemon_species.name}
                    </li>)

                })}
            </ul>
        </>
    )
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