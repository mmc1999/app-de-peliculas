import { AppBar, Avatar, Grid, IconButton, List, ListItem, Link, Toolbar, Hidden } from '@mui/material'
import React from 'react'
import MovieIcon from '@mui/icons-material/Movie';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import TvIcon from '@mui/icons-material/Tv';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import NextLink from 'next/link'

const Navbar = () => {
  return (
    <>
    <Hidden smUp={true}>
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
                                <ListItem >
                                    <NextLink href="/" passHref>
                                        <Link  variant="button" >
                                            <IconButton >
                                                <WidgetsIcon color="disabled" />
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem >
                                    <NextLink href="/movie" passHref>
                                    <Link> 
                                            <IconButton>
                                                <LocalMoviesIcon color="disabled" />
                                            </IconButton>
                                        </Link> 
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/series" passHref>
                                        <Link variant='button'>
                                            <IconButton>
                                                <TvIcon color="disabled"/>
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/favoritas" passHref>
                                        <Link variant='button'>
                                            <IconButton>
                                                <BookmarkIcon color="disabled" />
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                            </List>
                    </Grid>
                    <Grid item xs={2}>
                            <Avatar src="/assets/image-avatar.png" alt="Imagen del avatar" />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </Hidden>
    <Hidden smDown={true} lgUp={true}>
        <AppBar position="relative" color="primary" elevation={0} sx={{padding:"5px 3px", width:"95%", borderRadius:5, margin:"10px auto"}}>
            <Toolbar sx={{display:"flex", justifyContent:"space-between", alignItems:"center",width:"100%"}}>
                <Grid container spacing={0} sx={{display:"flex", alignItems:"center"}}>
                    <Grid item xs={1} sx={{marginTop:0.4}}>
                        <IconButton >
                            <MovieIcon color="error"  sx={{fontSize:"50px"}} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                            <List sx={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", gap:2}} >
                                <ListItem >
                                    <NextLink href="/" passHref>
                                        <Link  variant="button" >
                                            <IconButton >
                                                <WidgetsIcon fontSize='large' color="disabled" />
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem >
                                    <NextLink href="/movie" passHref>
                                    <Link> 
                                            <IconButton>
                                                <LocalMoviesIcon fontSize='large'  color="disabled" />
                                            </IconButton>
                                        </Link> 
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/series" passHref>
                                        <Link variant='button'>
                                            <IconButton>
                                                <TvIcon  fontSize='large'  color="disabled"/>
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/favoritas" passHref>
                                        <Link variant='button'>
                                            <IconButton>
                                                <BookmarkIcon  fontSize='large'  color="disabled" />
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                            </List>
                    </Grid>
                    <Grid item xs={1}>
                            <Avatar src="/assets/image-avatar.png" alt="Imagen del avatar"  />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </Hidden>
    <Hidden lgDown={true}>
        <AppBar position="fixed" color="primary" elevation={0} sx={{width:80, height:"90vh", left:20, marginTop:5, borderRadius:5}}>
            <Toolbar sx={{height: "100%"}}>
                <Grid container spacing={0} justifyContent="center" alignItems="center" sx={{height: "100%"}}>
                    <Grid item  sx={{marginTop:0.4}}>
                        <IconButton >
                            <MovieIcon color="error"  sx={{fontSize:"40px"}} />
                        </IconButton>
                    </Grid>
                    <Grid item >
                            <List sx={{display:"flex", flexDirection:"column", gap:2}}>
                                <ListItem >
                                    <NextLink href="/" passHref>
                                        <Link  variant="button">
                                            <IconButton >
                                                <WidgetsIcon fontSize='large' color="disabled" />
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem >
                                    <NextLink href="/movie" passHref>
                                        <Link> 
                                            <IconButton>
                                                <LocalMoviesIcon fontSize='large'  color="disabled" />
                                            </IconButton>
                                        </Link> 
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink href="/series" passHref>
                                        <Link variant='button'>
                                            <IconButton>
                                                <TvIcon  fontSize='large'  color="disabled"/>
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                                <ListItem>
                                    <NextLink  href="/favoritas" passHref>
                                        <Link variant='button'>
                                            <IconButton>
                                                <BookmarkIcon  fontSize='large'  color="disabled" />
                                            </IconButton>
                                        </Link>
                                    </NextLink>
                                </ListItem>
                            </List>
                    </Grid>
                    <Grid item >
                        <Avatar src="/assets/image-avatar.png" alt="Imagen del avatar"  />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </Hidden>
    </>
  )
}

export default Navbar