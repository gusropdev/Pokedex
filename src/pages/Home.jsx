import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Index';
import PokemonCard from '../components/PokemonCard/Index';
import { Container, Grid2 } from '@mui/material';
import axios from 'axios';
import Skeletons from '../components/Skeletons/Index';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getPokemons();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scrol', handleScroll);
    }, []);

    useEffect(() => {
        if (!isLoading) return;
        getPokemons();
    }, [isLoading]);

    const getPokemons = () => {
        setIsLoading(true);
        var endpoints = [];
        const limit = 60;
        const start = loadedCount + 1;

        for (var i = start; i < start + limit; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => {
            setPokemons((prevPokemons) => [...prevPokemons, ...res]);
            setLoadedCount((prevCount) => prevCount + limit);
            setIsLoading(false);
        });
    }

    const pokemonFilter = (search) => {
        if (search === "")
            getPokemons();
        var filteredPokemons = [];
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(search)) {
                filteredPokemons.push(pokemons[i])
            }
        }
        setPokemons(filteredPokemons);
    }

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) return;
        setIsLoading(true);
    }

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false">
                <Grid2 container spacing={3}>
                    {pokemons.length === 0 ? <Skeletons /> :
                        pokemons.map((pokemon, key) =>
                            <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} key={key}>
                                <PokemonCard name={pokemon.data.name} sprite={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Grid2>)
                    }
                </Grid2>
                {isLoading && <Skeletons />}
            </Container>
        </div >
    );
}
