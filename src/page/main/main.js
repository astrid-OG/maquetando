import React, { Component } from 'react';
import { Grid} from '@material-ui/core'
import SearchAppBar from '../../components/appBar/appBar'
import First from '../../components/first/first'
import './main.css'
import Second from '../../components/second/second'
import Third from '../../components/third/third'
import Fourth from '../../components/fourth/fourth'
import Fifth from '../../components/fifth/fifth'
import Sixth from '../../components/sixth/sixth'

class Main extends Component {
    render() {
        return (
            
            <Grid container >
                <Grid item xs={12} lg={12}>
                    <SearchAppBar></SearchAppBar>
                    <First></First>
                </Grid >
                    
                <Grid item xs={12}  lg={12}>
                <Second ></Second>
                </Grid>

                <Grid item xs={12}  lg={12}>
                <Third ></Third>
                </Grid>

                <Grid item xs={12}  lg={12}>
                <Fourth > </Fourth>
                </Grid>

                <Grid item xs={12}  lg={12}>
                <Fifth > </Fifth>
                </Grid>

                <Grid item xs={12}  lg={12}>
                <Sixth > </Sixth>
                </Grid>
            </Grid>
               
        );
    }
}

export default Main;