import React, {Component} from 'react'
import {Button, Typography} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core'

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
        marginLeft:'10px',
        position: 'absolute',
        left:'21%',
        top:'92%'
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
      }
     
}));

export default function SearchAppBar() {
        const classes = useStyles();
        
        return(
            <Grid container spacing={20}>
                <img src="BG3.png" alt="logo"  width= '100%' height="100%"></img>
                <Typography variant="h4" className={classes.letra1}>Conocimiento y experiencia </Typography>
                <Typography variant="h5" className={classes.letra2}>al alcance de empresas que quieren</Typography>
                <Typography variant="h5" className={classes.letra3}>hacer crecer sus negocios.</Typography>
                <Button variant="contained"  className={classes.boton1}>Contrata un experto</Button>
                <Button variant="contained"  className={classes.boton2}>Aplica como experto</Button>         
            </Grid>
        )
        
}