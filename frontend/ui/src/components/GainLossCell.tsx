export default function GainLossCell({
  value,
  percent,
}: {
  value: number;
  percent: number;
}) {
  const isProfit = value >= 0;

  return (
    <td
      className={`p-3 text-center font-medium ${
        isProfit ? "text-green-600" : "text-red-600"
      }`}
    >
      ₹{value} ({percent.toFixed(2)}%)
    </td>
  );
}
