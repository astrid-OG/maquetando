import React from 'react';
import { Grid, Typography} from '@material-ui/core'; 

import './fourth.css'


export default function Fourth() {
    
    
      return (
        <Grid container className='fondo' lg={12} xs={12}>
          <Grid container className='linea' lg={1} xs={1}> </Grid>
          <Grid container  lg={11} xs={11}>
            <Typography variant="subtitle2" style={{marginTop:"4%"}} >ENCUENTRA EXPERTOS</Typography>   
          </Grid>
          <Grid container  lg={12} xs={12}>
            <Typography variant="h4" style={{marginLeft:"8%", marginBottom:"2%"}}>Seleccion auna categoria</Typography>   
          </Grid>

          <Grid item justify='center' lg={12}>
            <img src="Group270.png" width= '90%' height='100%'></img>
          </Grid>
          <Grid item justify='center' lg={12}>
          <img src="Group271.png" width= '90%' height='100%'></img>
          </Grid>
        </Grid>

          );
  }