import React, {Component} from 'react'
import {Button, Typography} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles';
import { Grid} from '@material-ui/core'
import './second.css'


const useStyles = makeStyles((theme) => ({
    
    img:{
        width:'35%',
        height:'32%',
        margin:'5%',
      },
      letra:{
        color:'white',
        left:'20px',
        right:'5px'
      },   
      boton:{
        textTransform:'none',
        marginTop:'3%',
        marginBottom:'2%'
      }
    
}));

export default function SearchAppBar() {
        const classes = useStyles();
        
        return(
            <Grid container justify='center' className='contained' >
            <Grid container  sm={12}>
                <Grid  xs={6} sm={3} className='circulo1' >
                    <img src="12.png" alt="logo" className={classes.img}></img>
                    <Typography className={classes.letra} variant="h5" color="initial"> Asesores expertos </Typography>
                    <Typography className={classes.letra} variant="h8" color="initial"> Con experiencia real en diversos sectores y orientados al logro de objetos </Typography>       
                </Grid>
                <Grid  xs={6} sm={3} className='circulo2' >
                    <img src="21.png" alt="logo" className={classes.img}></img> 
                    <Typography className={classes.letra} variant="h5" color="initial"> Asequibilidad </Typography>
                    <Typography className={classes.letra} variant="h8" color="initial"> Con precios que se ajustan a diferentes presupuestos </Typography>          
                </Grid>
                <Grid  xs={6} sm={3} className='circulo3' >
                    <img src="22.png" alt="logo" className={classes.img}></img>
                    <Typography className={classes.letra} variant="h5" color="initial"> Proceso ágil y autogestionado </Typography>
                    <Typography className={classes.letra} variant="h8" color="initial"> Identifica  las necesidades de tu empresa con nuestro proceso autogestionado </Typography>          
                </Grid>
                <Grid  xs={6} sm={3} className='circulo4' >
                    <img src="23.png" alt="logo" className={classes.img} ></img> 
                    <Typography className={classes.letra} variant="h5" color="initial"> Tus pagos están asegurados </Typography>
                    <Typography className={classes.letra}variant="h8" color="initial"> Pago protegido hasta alcanzar las metas definidas </Typography>         
                </Grid>
            </Grid>
            <Grid container justify='flex-end'>
                <Button variant="contained"  className={classes.boton}>
                   Conoce a K4B
                </Button>
            </Grid>
            </Grid>
        )
        
}