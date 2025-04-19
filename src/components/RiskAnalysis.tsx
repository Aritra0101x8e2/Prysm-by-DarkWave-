import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartLine, AlertTriangle, Clock } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const generateRandomData = () => ({
  phishing: Math.floor(Math.random() * 60),
  location: Math.floor(Math.random() * 30),
  devices: Math.floor(Math.random() * 25),
  velocity: Math.floor(Math.random() * 40),
  timestamp: new Date().toLocaleTimeString(),
});

const RiskAnalysis = () => {
  const [threatData, setThreatData] = useState(generateRandomData());
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateRandomData();
      setThreatData(newData);
      setChartData((prev) => [...prev.slice(-19), newData]); // last 20 points
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const threatCategories = [
    { name: 'Phishing Attempts', count: threatData.phishing, change: '+12%', status: 'high' },
    { name: 'Unusual Locations', count: threatData.location, change: '-5%', status: 'medium' },
    { name: 'Multiple Device Usage', count: threatData.devices, change: '+3%', status: 'low' },
    { name: 'Velocity Alerts', count: threatData.velocity, change: '+28%', status: 'high' },
  ];

  return (
    <Card className="cyber-panel h-full">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Risk Analysis</h2>
          <Button variant="ghost" className="text-xs text-cyber-accent">
            <ChartLine className="mr-1 h-4 w-4" />
            Detailed Report
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gradient-to-br from-cyber-navy to-cyber-darker p-3 rounded-md">
            <div className="flex justify-between">
              <AlertTriangle className="text-cyber-danger h-5 w-5" />
              <span className="text-xs text-gray-400">Live</span>
            </div>
            <p className="text-2xl font-bold text-white mt-2">{threatData.phishing}</p>
            <p className="text-xs text-gray-400">High Risk Alerts</p>
          </div>
          <div className="bg-gradient-to-br from-cyber-navy to-cyber-darker p-3 rounded-md">
            <div className="flex justify-between">
              <Clock className="text-cyber-warning h-5 w-5" />
              <span className="text-xs text-gray-400">Live</span>
            </div>
            <p className="text-2xl font-bold text-white mt-2">{threatData.velocity}</p>
            <p className="text-xs text-gray-400">Suspicious Activities</p>
          </div>
        </div>

        <div className="bg-cyber-navy/40 p-3 rounded-md">
          <h3 className="text-sm font-medium text-white mb-2">Threat Categories</h3>
          <div className="space-y-2">
            {threatCategories.map((category, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span
                    className={`h-2 w-2 rounded-full mr-2 ${
                      category.status === 'high'
                        ? 'bg-cyber-danger'
                        : category.status === 'medium'
                        ? 'bg-cyber-warning'
                        : 'bg-cyber-success'
                    }`}
                  ></span>
                  <span className="text-xs text-gray-300">{category.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-xs font-medium text-white mr-2">{category.count}</span>
                  <span
                    className={`text-xs ${
                      category.change.startsWith('+')
                        ? 'text-cyber-danger'
                        : 'text-cyber-success'
                    }`}
                  >
                    {category.change}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Graph */}
        <div className="bg-cyber-navy/40 p-3 rounded-md mt-4">
          <h3 className="text-sm font-medium text-white mb-2">Live Threat Graph</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={chartData}>
              <XAxis dataKey="timestamp" stroke="#555" fontSize={10} />
              <YAxis stroke="#444" fontSize={10} />
              <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.7)', border: 'none' }} />
              <Legend wrapperStyle={{ fontSize: '10px', color: '#aaa' }} />
              <Line
                type="monotone"
                dataKey="phishing"
                name="Phishing"
                stroke="#00BFFF"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="location"
                name="Unusual Location"
                stroke="#9b59b6"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="devices"
                name="Device Usage"
                stroke="#ffffff"
                strokeWidth={1.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="velocity"
                name="Velocity"
                stroke="#38bdf8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default RiskAnalysis;
