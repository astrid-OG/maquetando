import React, { Component } from 'react';
import { Grid} from '@material-ui/core'
import SearchAppBar from '../../components/appBar/appBar'
import First from '../../components/first/first'
import './main.css'
import Second from '../../components/second/second'

class Main extends Component {
    render() {
        return (
            
            <Grid container >
                <Grid item xs={12} lg={12}>
                    <SearchAppBar></SearchAppBar>
                    <First></First>
                </Grid >
                    
                <Grid item xs={12}  lg={12}>
                <Second className='fondo'></Second>
                </Grid>
            </Grid>
               
        );
    }
}

export default Main;