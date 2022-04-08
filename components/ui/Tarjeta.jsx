import { CardActionArea, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import React from 'react'

const Tarjeta = ({el}) => {
  return (
      <Card > 
        <CardActionArea>
            {<CardMedia
              component="img"
              alt={el.title}
              height="140"
              width={140}
              image={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
            />}
            <Typography variant="body1">{el.title}</Typography>
        </CardActionArea>
      </Card>
    
  )
}

export default Tarjeta