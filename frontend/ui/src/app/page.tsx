"use client";

import { useEffect, useState } from "react";
import { fetchPortfolio } from "@/services/portfolio.api";
import { PortfolioRow } from "@/types/portfolio";
import PortfolioTable from "@/components/PortfolioTable";
import Loader from "@/components/Loader";

export default function DashboardPage() {
  const [data, setData] = useState<PortfolioRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  async function loadData() {
    try {
      setError(null);
      const res = await fetchPortfolio();
      setData(res);
    } catch {
      setError("Failed to load portfolio data");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">📊 Portfolio Dashboard</h1>
      <PortfolioTable data={data} />
    </main>
  );
}
