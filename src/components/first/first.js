import React, {Component} from 'react'
import {Button, Typography} from '@material-ui/core'
import { fade, makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden';
import './first.css'

const useStyles = makeStyles((theme) => ({
    
    boton1:{
        background:'#00EDBA',
        color:'black',
        textTransform:'none',
        float: 'left',
        position: 'absolute',
        left:'8%',
        top:'92%'
      },
    boton2:{
        background:'#FF0079',
        color:'white',
        textTransform:'none',
        position: 'absolute',
        left:'21%',
        top:'92%'
      },
      boton3:{
        background:'#00EDBA',
        color:'white',
        textTransform:'none',
        position: 'absolute',
        left:'7%',
        top:'19%'
      },
      boton4:{
        background:'#FF0079',
        color:'white',
        textTransform:'none',
        position: 'absolute',
        left:'50%',
        top:'19%'
      },
      letra1:{
        position: 'absolute',
        left:'8%',
        top:'67%',
        color:'white'
      },
      letra2:{
        position: 'absolute',
        left:'8%',
        top:'75%',
        color:'white'
      },
      letra3:{
        position: 'absolute',
        left:'8%',
        top:'80%',
        color:'white'
      },
      letra:{
        position: 'absolute',
        color:'white'
      }
     
}));

export default function SearchAppBar() {
        const classes = useStyles();
        
        return(
            <Grid container>
              <Hidden smDown>
                <Grid container>
                <img src="BG3.png" alt="logo"  width= '100%' height="100%"></img>
                <Typography variant="h4" className={classes.letra1}>Conocimiento y experiencia </Typography>
                <Typography variant="h5" className={classes.letra2}>al alcance de empresas que quieren</Typography>
                <Typography variant="h5" className={classes.letra3}>hacer crecer sus negocios.</Typography>
                <Button variant="contained"  className={classes.boton1}>Contrata un experto</Button>
                <Button variant="contained"  className={classes.boton2}>Aplica como experto</Button>
                </Grid>
                </Hidden>

                <Hidden mdUp>
                <Grid container justify='center' className='fond' xs={12} md={12}>
                <Typography style={{marginTop:'12%'}} className={classes.letra} variant="h5" >Conocimiento y experiencia </Typography>
                <Typography style={{marginTop:'19%'}} className={classes.letra} variant="h7">al alcance de empresas que quieren</Typography>
                <Typography style={{marginTop:'23%'}} className={classes.letra} variant="h7">hacer crecer sus negocios.</Typography>
                <Button variant="contained" size='small' className={classes.boton3}>Contrata un experto</Button>
                <Button variant="contained" size='small' className={classes.boton4}>Aplica como experto</Button>
                <Grid container xs={12} md={12}>
                <img style={{marginTop:'17%'}} src="BG-movil.png" alt="logo"  width= '100%' height="82%"></img>
                </Grid>
                </Grid>
                </Hidden>         
            </Grid>
        )
        
}