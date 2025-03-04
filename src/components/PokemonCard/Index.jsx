import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Box, Chip } from '@mui/material';

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const renderTypes = (types) => {
    return types.map((type, index) => (
        <Chip
            key={index}
            label={capitalize(type.type.name)}
            sx={{
                backgroundColor: getTypeColor(type.type.name),
                color: '#fff',
                fontWeight: 'bold',
                margin: '0 2px'
            }} />
    ))
}

const getTypeColor = (type) => {
    const typeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    };
    return typeColors[type] || '#777';
};


export default function PokemonCard({ name, sprite, types }) {

    return (
        <Card sx={{
            maxWidth: 345,
            transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 4px 8px rgba (0, 0, 0, 0.2)'
            }
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={sprite}
                    alt={name}
                    sx={{
                        objectFit: 'contain',
                        height: '180px',
                        margin: '0 auto'
                    }}
                />
                <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {capitalize(name)}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                            {renderTypes(types)}
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
