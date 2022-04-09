import { AppBar, Avatar, Box, Grid, IconButton, List, ListItem, Toolbar } from '@mui/material'
import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Navbar = () => {
  return (
    <AppBar position="sticky" color="primary" elevation={0} sx={{padding:"5px 3px"}}>
      <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center",width:"100%"}}>
          <Grid container spacing={0} >
              <Grid item xs={1} sx={{marginTop:0.4}}>
                <IconButton >
                    <MovieIcon color="error"  fontSize="large" />
                </IconButton>
              </Grid>
              <Grid item xs={9}>
                    <List sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <ListItem>
                            <IconButton >
                                <WidgetsIcon color="disabled" />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <LocalMoviesIcon color="disabled" />
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <TvIcon color="disabled"/>
                            </IconButton>
                        </ListItem>
                        <ListItem>
                            <IconButton>
                                <BookmarkIcon color="disabled" />
                            </IconButton>
                        </ListItem>
                    </List>
              </Grid>
              <Grid item xs={2}>
                    <Avatar src="/assets/image-avatar.png" alt="Imagen del avatar" />
              </Grid>
          </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar