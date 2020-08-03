import React, { Component } from 'react';
import {expertos} from '../../todo.json';
import { Grid, Typography} from '@material-ui/core'; 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './fifth.css'


class Fifth extends Component{
  constructor() {
    super();
    this.state = {
      expertos
    }
  }

  render(){

    const expertos = this.state.expertos.map((expertos) => {
      return (
          <Card style={{maxWidth:'25%', marginLeft:'5%'}}>
          <CardActionArea>
            <CardMedia image={expertos.circle} className='tamaño1'>
    
              </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {expertos.name}
              </Typography>
              <Typography gutterBottom variant="caption" component="h2">
                {expertos.career}
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                {expertos.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size="large" fullWidth="true" style={{backgroundColor:'#2F2D6D', color:'white'}}>
              {expertos.buton}
            </Button>
          </CardActions>
        </Card>      
  )
  });

      return (
        <Grid container lg={12} xs={12}>
          <Grid container className='linea' lg={1} xs={1}> </Grid>
          <Grid container  lg={11} xs={11}>
            <Typography variant="subtitle2" style={{marginTop:"4%"}} >ENCUENTRA EXPERTOS</Typography>   
          </Grid>
          <Grid container  lg={12} xs={12}>
            <Typography variant="h4" style={{marginLeft:"8%", marginBottom:"2%"}}>Conoce los expertos de nuestra comunidad</Typography>   
          </Grid>

          <Grid container lg={12} >
            <AppBar position="static" color='transparent' style={{boxShadow:'none', alignItems:'center'}}>
              <Toolbar>
                <Button style={{textTransform:'none', fontSize:'1.5rem'}} color="default">Comerciales</Button>
                <Button style={{textTransform:'none', fontSize:'1.5rem'}} color="inherit">Ingenieros</Button>
                <Button style={{textTransform:'none', fontSize:'1.5rem'}} color="inherit">Abogados</Button>
                <Button style={{textTransform:'none', fontSize:'1.5rem'}} color="inherit">Financieros</Button>
                <Button style={{textTransform:'none', fontSize:'1.5rem'}} color="inherit">Project Managers</Button>
              </Toolbar>
            </AppBar>
          </Grid>

          <Grid container lg={12} style={{marginLeft:'5%', marginBottom:'3%'}}>
            {expertos}
          </Grid>
          
        </Grid>
      );
  }
}

export default Fifth;