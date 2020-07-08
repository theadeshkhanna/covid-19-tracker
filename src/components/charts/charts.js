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
        <div className={classes.Carousel}>
            <Carousel
                pagination={false}
                showArrows={true}
                enableAutoPlay={true}
                autoPlaySpeed={3000}
                focusOnSelect={false}>
                <div className={classes.ChartSize}>
                    <Bar
                        data={{
                            labels: labels,
                            datasets: [{
                                label: 'Confirmed',
                                backgroundColor: '#721817',
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
                                backgroundColor: '#2B4162',
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
                                backgroundColor: '#0B6E4F',
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
                                backgroundColor: '#E0E0E2',
                                data: deaths
                            }]
                        }}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Charts;
