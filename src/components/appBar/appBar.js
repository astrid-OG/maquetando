import React from 'react';
import './appBar.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {Button, Typography} from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import {Person} from '@material-ui/icons';
import { Grid} from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },

  inputRoot: {
    color: 'inherit',
  },
posicion:{
  flexGrow:1
},
boton:{
  color:'white',
  textTransform:'none'
},
barra:{
  marginTop:'2%',
  boxShadow:'none'
},
menuButton: { 
  marginRight: theme.spacing(2),
  color:'white',
},

}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}  >
      
      <AppBar position="absolute" color='transparent' className={classes.barra} >
      
        <Toolbar>
        <Hidden smDown>

            <img src="LOGO.png" alt="logo"  width='10%'></img>
            <Grid item className={classes.posicion} >
            <Button className={classes.boton}>Expertos</Button>
            <Button className={classes.boton}>Proyectos</Button>
            <Button className={classes.boton}>Autodiagnóstico</Button>
            <Button className={classes.boton}>Cómo funciona</Button>
            <Button className={classes.boton}>Sobre Nosotros</Button>
            </Grid>

            <div >
            <Button className={classes.boton} variant="contained" size='large'>Ingresar</Button>
            </div>

        </Hidden >

        <Hidden mdUp>
          <Grid container>
          <Grid item xs={4} sm={4} align='left' >
            <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
              <MenuIcon/>
            </IconButton>
            </Grid>
            <Grid item xs={4} sm={4}>
            <img src="LOGO.png" alt="logo" width='40%' ></img>
            </Grid>
            <Grid item xs={4} sm={4} align='right'>
            <IconButton edge="start" className={classes.menuButton}  aria-label="ingresar" placeholder="Titulo">
              <Person></Person>
            </IconButton>
            </Grid>
            </Grid>
        </Hidden >
 
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
