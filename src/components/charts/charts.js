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
                        options={{
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                fontColor: 'black',
                                text: 'CONFIRMED',
                                fontSize: '22',
                                fontFamily: "'Roboto Slab', serif"
                            }     ,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true,
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }]
                            }
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
                        options={{
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                fontColor: 'black',
                                text: 'ACTIVE',
                                fontSize: '22',
                                fontFamily: "'Roboto Slab', serif"
                            }     ,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true,
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }]
                            }
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
                        options={{
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                fontColor: 'black',
                                text: 'RECOVERED',
                                fontSize: '22',
                                fontFamily: "'Roboto Slab', serif"
                            }     ,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true,
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }]
                            }
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
                        options={{
                            legend: {
                                display: false
                            },
                            title: {
                                display: true,
                                fontColor: 'black',
                                text: 'DEATHS',
                                fontSize: '22',
                                fontFamily: "'Roboto Slab', serif"
                            }     ,
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true,
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'black',
                                        fontSize: '13',
                                        fontFamily: "'Roboto Slab', serif"
                                    },
                                }]
                            }
                        }}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Charts;
