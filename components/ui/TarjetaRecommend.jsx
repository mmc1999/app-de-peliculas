import { Box, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import React, { useContext } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import favoritoContext from '../../context/favoritos';

const TarjetaRecommend = ({el}) => {
  const {
    existeEnFavorites, toggleFavorite
  } = useContext(favoritoContext);
  return (
      <Card sx={{position:"relative", backgroundImage:"none"}}>
        <CardActions sx={{position:"absolute", zIndex:10, top:5, right:15, backgroundColor:"rgba(0,0,0,0.5)", borderRadius:50}}>
          <IconButton onClick={() => toggleFavorite(el.title)}>
          { existeEnFavorites(el.title) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </CardActions>
        <CardMedia
          component="img"
          alt={el.title}
          height="140"
          width={140}
          image={el.thumbnail.regular.large}
          sx={{borderRadius:3}}
        />
        <CardContent sx={{padding:"8px 0px " }}>
          <Typography variant="body2" sx={{fontSize:12, opacity:0.6}}>{`${el.year}  ■  ${ el.category}  ■  ${el.rating}`}</Typography>
          <Typography variant="h6">{el.title}</Typography>
        </CardContent>
      </Card>
    
  )
}

export default TarjetaRecommend