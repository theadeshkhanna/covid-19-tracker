import React from "react";
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {

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
        <div>
            <Bar
                data={{
                    labels: labels,
                    width: 100,
                    height: 200,
                    datasets: [{
                        label: 'Confirmed',
                        backgroundColor: 'rgb(246,64,77)',
                        data: confirmed
                    }]
                }}
                width={100}
                height={50}
            />

            <Bar
                data={{
                    labels: labels,
                    datasets: [{
                        label: 'Active',
                        backgroundColor: 'rgb(9,120,247)',
                        data: active
                    }]
                }}
                width={100}
                height={50}
            />

            <Bar
                data={{
                    labels: labels,
                    width: 100,
                    height: 200,
                    datasets: [{
                        label: 'Recovered',
                        backgroundColor: 'rgb(66,168,70)',
                        data: recovered
                    }]
                }}
                width={100}
                height={50}
            />

            <Bar
                data={{
                    labels: labels,
                    datasets: [{
                        label: 'Deaths',
                        backgroundColor: 'rgb(154,160,165)',
                        data: deaths
                    }]
                }}
                width={100}
                height={50}
            />
        </div>
    );
};

export default Chart;
