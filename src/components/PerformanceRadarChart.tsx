// components/PerformanceRadarChart.tsx
import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface Player {
    name: string;
    pointsPerGame: number;
    rebounds: number;
    assists: number;
    fieldGoalPercentage: number;
    minutes: number;
}

interface PerformanceRadarChartProps {
    player: Player;
}

const PerformanceRadarChart: React.FC<PerformanceRadarChartProps> = ({ player }) => {
    const data = {
        labels: ['PPG', 'Rebounds', 'Assists', 'FG%', 'Minutes'],
        datasets: [{
            label: player.name,
            data: [
                player.pointsPerGame,
                player.rebounds,
                player.assists,
                player.fieldGoalPercentage * 100,
                player.minutes
            ],
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1
        }]
    };

    return <Radar data={data} />;
}

export default PerformanceRadarChart;
