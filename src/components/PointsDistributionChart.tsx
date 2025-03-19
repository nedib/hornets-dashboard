import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface Player {
    name: string;
    pointsPerGame: number;
}

interface PointsDistributionChartProps {
    players: Player[];
}

const PointsDistributionChart: React.FC<PointsDistributionChartProps> = ({ players }) => {
    const data = {
        labels: players.map(p => p.name),
        datasets: [{
            label: 'Points Per Game',
            data: players.map(p => p.pointsPerGame),
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
        }]
    };

    return <Bar data={data} />;
}

export default PointsDistributionChart;
