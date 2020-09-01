import React, {useState, useEffect} from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './cards.module.css'
import CountUp from 'react-countup';
import cx from 'classnames';
const Cards = (props) => {
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    function getCurrentDate (separator='') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
       
        if (month < 10) month = '0' + month;
        if (date < 10) date = '0' + date;
       
        return `${year}${separator}${month}${separator}${date}`
      }
   if (!props.data.confirmed && !props.data.length) {
    return 'Loading...';
   }
   if (props.data.length) {
    return (
        <div class = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp
                        
                                start = {0}
                                end = {props.data[0].confirmed}
                                duration = {2.5}
                                separator = ","
        
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(getCurrentDate('/')).toDateString()}</Typography>
                        <Typography variant = "body2">Number of total confirmed positive cases from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Newly Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp
                                start = {0}
                                end = {props.data[0].hospitalized}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(getCurrentDate('/')).toDateString()}</Typography>
                        <Typography variant = "body2">Number of new confirmed positive cases from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant = "h5">
                            <CountUp
                                start = {0}
                                end = {props.data[0].deaths}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(getCurrentDate('/')).toDateString()}</Typography>
                        <Typography variant = "body2">Number of total deaths from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
   }
    return (
        <div class = {styles.container}>
            <Grid container spacing = {3} justify = "center">
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Total Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp
                                start = {0}
                                end = {props.data.confirmed}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(getCurrentDate('/')).toDateString()}</Typography>
                        <Typography variant = "body2">Number of total confirmed positive cases from Covid-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component = {Card} xs = {12} md = {3} className = {cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Newly Infected</Typography>
                        <Typography variant = "h5">
                            <CountUp
                                start = {0}
                                end = {props.data.hospitalized}
                                duration = {2.5}
                                separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(getCurrentDate('/')).toDateString()}</Typography>
                        <Typography variant = "body2">Number of new confirmed positive cases from Covid-19</Typography>
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
                                separator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">{new Date(getCurrentDate('/')).toDateString()}</Typography>
                        <Typography variant = "body2">Number of total deaths from Covid-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;