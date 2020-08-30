import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = (props) => {
   
   if (!props.data.confirmed) {
        return 'Loading...';
   }
   
    return (
        <div class = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp
                                start = {0}
                                end = {props.data.confirmed}
                                duration = {2.5}
                                seperator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of infected cases of Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Hospitalized</Typography>
                        <Typography variant = "h5">
                            <CountUp
                                start = {0}
                                end = {props.data.hospitalized}
                                duration = {2.5}
                                seperator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of current hospital patients from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = "h5">
                            <CountUp
                                start = {0}
                                end = {props.data.deaths}
                                duration = {2.5}
                                seperator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
                        <Typography variant = "body2">Number of deaths from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;