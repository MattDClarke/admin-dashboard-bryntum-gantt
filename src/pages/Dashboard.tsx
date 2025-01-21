import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTheme } from 'next-themes';

const data = [
  { month: 'Jan', '2023': 400, '2024': 240 },
  { month: 'Feb', '2023': 300, '2024': 380 },
  { month: 'Mar', '2023': 200, '2024': 320 },
  { month: 'Apr', '2023': 278, '2024': 280 },
  { month: 'May', '2023': 189, '2024': 310 },
  { month: 'Jun', '2023': 239, '2024': null },
  { month: 'Jul', '2023': 349, '2024': null },
  { month: 'Aug', '2023': 430, '2024': null },
  { month: 'Sep', '2023': 401, '2024': null },
  { month: 'Oct', '2023': 390, '2024': null },
  { month: 'Nov', '2023': 380, '2024': null },
  { month: 'Dec', '2023': 360, '2024': null },
];

const Dashboard = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="p-8">
      <h1 className="text-2xl  mb-8 text-foreground">Monthly sales</h1>
      <div className="w-full h-[400px] bg-card rounded-xl p-4 border border-border">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDark ? '#374151' : '#e5e7eb'} 
            />
            <XAxis 
              dataKey="month" 
              stroke={isDark ? '#9ca3af' : '#6b7280'}
            />
            <YAxis
              stroke={isDark ? '#9ca3af' : '#6b7280'}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? '#1f2937' : '#ffffff',
                border: '1px solid',
                borderColor: isDark ? '#374151' : '#e5e7eb',
                color: isDark ? '#ffffff' : '#000000'
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="2023"
              stroke="#ff9800"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="2024"
              stroke="#2196f3"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <h2 className="text-2xl  mt-8 mb-4 text-foreground">Project planning</h2>
      <div className="bg-card rounded-xl p-4 border border-border h-64">
        {/* Project planning content will go here in future iterations */}
      </div>
    </div>
  );
};

export default Dashboard;