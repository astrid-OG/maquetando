import React, { Component } from 'react';
import {proyectos} from '../../todo.json';
import { Grid, Typography} from '@material-ui/core'; 
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './sixth.css'
import {IconButton} from '@material-ui/core';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';

class Sixth extends Component{
  constructor() {
    super();
    this.state = {
      proyectos
    }
  }

  render(){

    const proyectos = this.state.proyectos.map((proyectos) => {
      return (
          <Card style={{maxWidth:'25%', marginLeft:'5%'}}>
          <CardActionArea>
            <CardMedia image={proyectos.image} className='tamaño'>
                <IconButton aria-label="BookmarkBorder" style={{marginLeft:'16rem'}} color="primary">
                  <BookmarkBorder></BookmarkBorder>
                </IconButton>
              </CardMedia>
            <CardContent style={{textAlign:'left'}}>
              <Typography gutterBottom variant="h6" component="h2">
                {proyectos.name}
              </Typography>
              <Typography gutterBottom variant="caption" component="h2">
                {proyectos.zone}
              </Typography>
              <Typography variant="caption" color="textSecondary" component="p">
                {proyectos.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size="large" fullWidth="true" style={{backgroundColor:'#FF0079', color:'white'}}>
              {proyectos.buton}
            </Button>
          </CardActions>
        </Card>      
  )
  });

      return (
        <Grid container lg={12} xs={12} className='cont'>
          <Grid container className='linea' lg={1} xs={1}> </Grid>
          <Grid container  lg={11} xs={11}>
            <Typography variant="subtitle2" style={{marginTop:"4%"}} >ENCUENTRA EXPERTOS</Typography>   
          </Grid>
          <Grid container  lg={12} xs={12}>
            <Typography variant="h4" style={{marginLeft:"8%", marginBottom:"2%"}}>Últimos proyectos publicados</Typography>   
          </Grid>

          <Grid container lg={12} style={{marginLeft:'5%'}}>
            {proyectos}
          </Grid>
          
        </Grid>
      );
  }
}

export default Sixth;