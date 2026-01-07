import { PortfolioRow } from "@/types/portfolio";
import GainLossCell from "./GainLossCell";

export default function PortfolioTable({ data }: { data: PortfolioRow[] }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">
      <table className="min-w-full border-collapse">
        <thead className="bg-gray-100 text-sm">
          <tr>
            <th className="p-3 text-left">Stock</th>
            <th className="p-3">Qty</th>
            <th className="p-3">CMP</th>
            <th className="p-3">Investment</th>
            <th className="p-3">Present Value</th>
            <th className="p-3">Gain / Loss</th>
            <th className="p-3">P/E</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.symbol} className="border-t text-sm">
              <td className="p-3 font-medium">{row.symbol}</td>
              <td className="p-3 text-center">{row.quantity}</td>
              <td className="p-3 text-center">₹{row.cmp}</td>
              <td className="p-3 text-center">₹{row.investment}</td>
              <td className="p-3 text-center">₹{row.presentValue}</td>
              <GainLossCell value={row.gainLoss} percent={row.gainLossPercent} />
              <td className="p-3 text-center">{row.peTTM ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
