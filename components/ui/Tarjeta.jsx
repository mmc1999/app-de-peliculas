import { Box, CardActionArea, CardActions, IconButton, Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useContext } from 'react';
import favoritoContext from '../../context/favoritos';

const Tarjeta = ({el}) => {
  if(typeof window === "undefined") return false
  const {
    existeEnFavorites, toggleFavorite
  } = useContext(favoritoContext);
  
  return (
      <Card sx={{position:"relative"}} > 
        <CardActions sx={{position:"absolute", zIndex:10, top:5, right:15, backgroundColor:"rgba(0,0,0,0.5)", borderRadius:50}}>
          <IconButton onClick={() => toggleFavorite(el.title)}>
            { existeEnFavorites(el.title) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
        </CardActions>
        <CardActionArea>
            <CardMedia
              component="img"
              alt={el.title}
              height={150}
              width={150}
              image={el.thumbnail.trending.large}
            />
            <Box sx={{position:"absolute", zIndex:10, bottom:5, left:15}}>
              <Typography variant="body2" sx={{fontSize:12, opacity:0.6}}>
                {`${el.year}  ■  ${ el.category}  ■  ${el.rating}`}
              </Typography>
              <Typography variant="h6">{el.title}</Typography>
            </Box>
        </CardActionArea>
      </Card>
    
  )
}

export default Tarjeta