import React from 'react';

interface Player {
    name: string;
    pointsPerGame: number;
    rebounds: number;
    assists: number;
    fieldGoalPercentage: number;
    threePointPercentage?: number;
    minutes: number;
}

interface LeaderboardProps {
    players: Player[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ players }) => {
    const sortedPlayers = [...players].sort((a, b) => b.pointsPerGame - a.pointsPerGame).slice(0, 5);

    return (
        <table className="min-w-full bg-white border">
            <thead>
            <tr className="bg-gray-200">
                <th className="py-2 px-4 border">Player</th>
                <th className="py-2 px-4 border">PPG</th>
                <th className="py-2 px-4 border">Rebounds</th>
                <th className="py-2 px-4 border">Assists</th>
            </tr>
            </thead>
            <tbody>
            {sortedPlayers.map((player) => (
                <tr key={player.name} className="text-center">
                    <td className="py-2 px-4 border">{player.name}</td>
                    <td className="py-2 px-4 border">{player.pointsPerGame}</td>
                    <td className="py-2 px-4 border">{player.rebounds}</td>
                    <td className="py-2 px-4 border">{player.assists}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Leaderboard;
