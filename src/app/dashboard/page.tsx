"use client";

import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import Leaderboard from "../../components/Leaderboard";
import ShootingEfficiencyChart from "../../components/ShootingEfficiencyChart";
import PerformanceRadarChart from "../../components/PerformanceRadarChart";
import PointsDistributionChart from "../../components/PointsDistributionChart";

interface Player {
    id: number;
    name: string;
    team: string;
    pointsPerGame: number;
    rebounds: number;
    assists: number;
    fieldGoalPercentage: number;
    minutes: number;
}


export default function Dashboard() {
   const { user, isLoading: authLoading } = useUser();
   useRouter();
   const [players, setPlayers] = useState<Player[]>([]);
   const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (!authLoading && !user) {
            router.push("/api/auth/login?returnTo=/dashboard");
        }
    }, [authLoading, user, router]);


    useEffect(() => {
        if (user) {
            fetch("/api/players")
                .then((res) => res.json())
                .then((data) => {
                    setPlayers(data.players);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error fetching player data:", error);
                    setLoading(false);
                });
        }
    }, [user]);

    if (authLoading || loading) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-6">
                Charlotte Hornets Player Stats
            </h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Player Leaderboard</h2>
                <Leaderboard players={players} />
            </div>
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Shooting Efficiency</h2>
                    <ShootingEfficiencyChart players={players} />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Points Distribution</h2>
                    <PointsDistributionChart players={players} />
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-2">
                    Performance Radar Chart
                </h2>
                {players.length > 0 && (
                    <PerformanceRadarChart player={players[0]} />
                )}
            </div>
        </div>
    );
}
