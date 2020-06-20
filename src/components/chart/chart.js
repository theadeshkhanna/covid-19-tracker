import React from "react";
import { Bar } from 'react-chartjs-2';

const Chart = () => {
    return (
        <Bar
            data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [20, 20, 20, 50, 20, 30, 45]
                }]
            }}
        />
    );
};

export default Chart;
