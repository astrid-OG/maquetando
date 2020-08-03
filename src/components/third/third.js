import React from 'react';
import { Grid, Typography} from '@material-ui/core'; 
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './third.css'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 50,
    backgroundColor:'#2F2D6D'
  },
  contend: {
    backgroundColor:'#EEEEEE'
  },
  boton: {
    backgroundColor:'white',
    textTransform:'none',
    marginTop:'10%',
  },

  TextFi: {
    '& > *': {
      margin: theme.spacing(1),
      width: '40ch',
      marginBottom:'8%'
    },
  },

  TextFi2: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  formControl: {
    minWidth: 250,
    backgroundColor:'white',
    borderRadius:4,
    alignItems:'left'
  },
}));


export default function Third() {
  const classes = useStyles();
  
    return (
      <Grid container  lg={12} xs={12}>
        <Grid container className='linea' lg={1} xs={1}> </Grid>
        <Grid container  lg={11} xs={11}>
          <Typography variant="subtitle2" style={{marginTop:"4%"}} >ENCUENTRA EXPERTOS</Typography>   
        </Grid>
        <Grid container  lg={12} xs={12}>
          <Typography variant="h4" style={{marginLeft:"8%", marginBottom:"2%"}}>¿En qué tema necesitas asesoría?</Typography>   
        </Grid>

        <Grid container lg={6} xs={12} justify="center">
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media}>
        <FormControl variant="outlined" className={classes.formControl} size='small' style={{marginTop:"1.25%"}} >
        <InputLabel id="demo-simple-select-outlined-label"  >Planeación estratégica</InputLabel>
        <Select
        className={classes.formControl}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Planeación estratégica"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Uno</MenuItem>
          <MenuItem value={20}>Dos</MenuItem>
          <MenuItem value={30}>Tres</MenuItem>
        </Select>
      </FormControl>
        </CardMedia>
        <CardContent className={classes.contend}>
          <Typography variant="body2" color="textPrimary" style={{textAlign:'left'}}>
          Definición de objetivos de negocio, metas empresariales, línea de tiempo, indicadores claves de desempeño, 
          planes de acción generales y priorización de presupuestos.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.contend}>
        <Button size="small" variant="contained"  className={classes.boton}>
          Encontrar expertos
        </Button>
      </CardActions>
    </Card>
        </Grid>

        <Grid container justify="center" lg={5} xs={12}>
        <FormControl component="fieldset">
        <FormControlLabel value="uno" control={<Radio />} style={{textAlign:'left'}} label="Necesito implementar un proceso de. planeación estratégica desde cero." />
        <FormControlLabel value="dos" control={<Radio />} style={{textAlign:'left'}} label="Necesito diagnósticar y/o mejorar del proceso de planeación estratégica ya existente." />
        <FormControlLabel value="tres" control={<Radio />}  style={{textAlign:'left'}} label="Quiero generar mayor compromiso al interior de la empresa para lograr un proceso de planeación estratégica exitoso." />
        <FormControlLabel value="cuatro" control={<Radio />} label="¿Otro? ¿Cuál? (escriba su texto)" />
        <TextField className={classes.TextFi} multiline size="small" id="outlined-basic" variant="outlined" />
        </FormControl>
        </Grid>
      </Grid>
    );
  }