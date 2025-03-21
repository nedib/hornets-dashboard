import { NextResponse } from 'next/server';

export async function GET() {
    //just some  data
    const players = [
        {
            name: "Mark Williams",
            pointsPerGame: 22.5,
            rebounds: 7.8,
            assists: 5.1,
            fieldGoalPercentage: 0.45,
            minutes: 32,
        },
        {
            name: "Grant Williams",
            pointsPerGame: 18.3,
            rebounds: 6.5,
            assists: 4.2,
            fieldGoalPercentage: 0.47,
            minutes: 30,
        },
        {
            name: "Marcus Garrett",
            pointsPerGame: 15.6,
            rebounds: 4.3,
            assists: 3.8,
            fieldGoalPercentage: 0.42,
            minutes: 28,
        },
        {
            name: "LaMelo Ball",
            pointsPerGame: 12.9,
            rebounds: 5.1,
            assists: 2.7,
            fieldGoalPercentage: 0.44,
            minutes: 26,
        },
        {
            name: "Miles Bridges",
            pointsPerGame: 10.4,
            rebounds: 3.9,
            assists: 2.1,
            fieldGoalPercentage: 0.40,
            minutes: 24,
        },
    ];

    return NextResponse.json({ players });
}
