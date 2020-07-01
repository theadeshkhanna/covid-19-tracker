import React from "react";
import { Bar } from 'react-chartjs-2';
import classes from "./charts.css";
import Carousel from 'react-elastic-carousel';

const Charts = (props) => {

    const labels = props.data.map((obj, i) => {
        return obj.name;
    });

    const recovered = props.data.map((obj, i) => {
       return obj.recovered;
    });

    const active = props.data.map((obj, i) => {
       return obj.active;
    });

    const confirmed = props.data.map((obj, i) => {
        return obj.confirmed;
    });

    const deaths = props.data.map((obj, i) => {
        return obj.deaths;
    });

    return (
        <Carousel>
            <div className={classes.ChartSize}>
                <Bar
                    data={{
                        labels: labels,
                        datasets: [{
                            label: 'Confirmed',
                            backgroundColor: 'rgb(246,64,77)',
                            data: confirmed
                        }]
                    }}
                />
            </div>
                <div className={classes.ChartSize}>
                <Bar
                    data={{
                        labels: labels,
                        datasets: [{
                            label: 'Active',
                            backgroundColor: 'rgb(9,120,247)',
                            data: active
                        }]
                    }}
                />
                </div>
                    <div className={classes.ChartSize}>
                <Bar
                    data={{
                        labels: labels,
                        datasets: [{
                            label: 'Recovered',
                            backgroundColor: 'rgb(66,168,70)',
                            data: recovered
                        }]
                    }}
                />
                    </div>
                        <div className={classes.ChartSize}>
                <Bar
                    data={{
                        labels: labels,
                        datasets: [{
                            label: 'Deaths',
                            backgroundColor: 'rgb(154,160,165)',
                            data: deaths
                        }]
                    }}
                />
            </div>
        </Carousel>
    );
};

export default Charts;