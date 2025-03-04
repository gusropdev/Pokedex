import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar/Index';
import PokemonCard from '../components/PokemonCard/Index';
import { Container, Grid2 } from '@mui/material';
import axios from 'axios';
import Skeletons from '../components/Skeletons/Index';

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const isFetching = useRef(false);

    useEffect(() => {
        getPokemons();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!isLoading) return;
        getPokemons();
    }, [isLoading]);

    const handleScroll = () => {
        if (isLoading) return; // Garante que só chama uma vez
        if (window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100) {
            setIsLoading(true);
        }
    };

    const getPokemons = async () => {
        if (isFetching.current) return;
        isFetching.current = true;
        setIsLoading(true);
        const limit = 48;
        const offset = loadedCount;

        try {
            // Busca a lista de Pokémons com informações básicas
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
            const pokemonList = response.data.results;

            // Busca os detalhes de cada Pokémon
            const pokemonDetails = await Promise.all(
                pokemonList.map(pokemon => axios.get(pokemon.url))
            );

            // Atualiza o estado com os novos Pokémons
            setPokemons((prevPokemons) => {
                const newPokemons = [...prevPokemons, ...pokemonDetails];
                return newPokemons;
            });

            setLoadedCount((prevCount) => prevCount + limit);
        }
        catch (error) {
            console.error("Erro ao buscar Pokémons: ", error);
        }
        finally {
            setIsLoading(false)
            isFetching.current = false;
        }
    }


    return (
        <div>
            <Navbar />
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
