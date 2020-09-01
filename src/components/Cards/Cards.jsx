import React from 'react';

//import card visuals from material ui
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

//importing styles for cards
import styles from './Cards.module.css';

//dependency to count up so it has live chaing effect on the webapp


const Cards = ({ data : {confirmed, deaths, recovered, lastUpdate} }) => {

//without if statements, the data will not be shown and will through an error
    if(!confirmed){
        return 'Loading Data....'
    }

    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">
                        Infected
                        </Typography>
                        <Typography variant="h5">
                        {confirmed.value}
                        </Typography>
                        <Typography color="textSecondary">
                        Real Date
                        </Typography>
                        <Typography variant="body2">
                        Number of active cases of COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">
                        Recovered
                        </Typography>
                        <Typography variant="h5">
                        Real Data
                        </Typography>
                        <Typography color="textSecondary">
                        Real Date
                        </Typography>
                        <Typography variant="body2">
                        Number of recoveries of COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">
                        Deaths
                        </Typography>
                        <Typography variant="h5">
                        Real Data
                        </Typography>
                        <Typography color="textSecondary">
                        Real Date
                        </Typography>
                        <Typography variant="body2">
                        Number of death cases of COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;