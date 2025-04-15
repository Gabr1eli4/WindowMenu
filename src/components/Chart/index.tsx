import { useExperimentChartData } from '@/store/experiment';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

export function Chart() {
  const chartData = useExperimentChartData();

  return (
    <LineChart
      style={{
        position: 'absolute',
        bottom: '0%',
        right: 0,
      }}
      width={500}
      height={200}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
}
