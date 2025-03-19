import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface Player {
    name: string;
    fieldGoalPercentage: number;
    threePointPercentage?: number;
}

interface ShootingEfficiencyChartProps {
    players: Player[];
}

const ShootingEfficiencyChart: React.FC<ShootingEfficiencyChartProps> = ({ players }) => {
    const data = {
        labels: players.map(p => p.name),
        datasets: [
            {
                label: 'FG%',
                data: players.map(p => p.fieldGoalPercentage * 100),
                backgroundColor: 'rgba(75,192,192,0.6)',
            },
            {
                label: '3P%',
                data: players.map(p => (p.threePointPercentage ? p.threePointPercentage * 100 : 0)),
                backgroundColor: 'rgba(153,102,255,0.6)',
            }
        ]
    };

    return <Bar data={data} />;
}

export default ShootingEfficiencyChart;
