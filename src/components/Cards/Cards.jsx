import React from 'react';

//import card visuals from material ui
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

//importing styles for cards
import styles from './Cards.module.css';

const Cards = (props) => {
    console.log(props);

    

    return (
        <div className={styles.container}>
            <Grid container spacing = {3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary">

                        </Typography>

                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;