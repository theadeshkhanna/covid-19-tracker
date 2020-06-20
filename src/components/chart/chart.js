import React from "react";
import { Bar } from 'react-chartjs-2';

const Chart = (props) => {

    const labels = props.data.map((obj, i) => {
        return obj.name;
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

    console.log(labels);

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
                options={{ maintainAspectRatio: true }}
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
                options={{ maintainAspectRatio: true }}
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
                options={{ maintainAspectRatio: true }}
            />
        </div>
    );
};

export default Chart;
