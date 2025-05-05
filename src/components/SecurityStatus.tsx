
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ShieldCheck, ShieldAlert, Network, Lock, Database } from 'lucide-react';

const SecurityStatus = () => {
  const securityScore = 87;
  const systemStatus = [
    { name: "Fraud Detection", status: "active", uptime: "99.9%" },
    { name: "ML Engine", status: "active", uptime: "100%" },
    { name: "Transaction API", status: "active", uptime: "99.7%" },
    { name: "User Verification", status: "active", uptime: "99.8%" }
  ];

  return (
    <Card className="cyber-panel h-full">
      <div className="p-4">
        <h2 className="text-lg font-bold text-white mb-4">Security Status</h2>
        
        <div className="space-y-4">
          <div className="mb-6 flex items-center gap-4">
            <div className="relative w-20 h-20">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle 
                  className="text-cyber-navy" 
                  strokeWidth="10" 
                  stroke="currentColor" 
                  fill="transparent" 
                  r="40" 
                  cx="50" 
                  cy="50" 
                />
                <circle 
                  className="text-cyber-accent" 
                  strokeWidth="10" 
                  stroke="currentColor" 
                  fill="transparent" 
                  r="40" 
                  cx="50" 
                  cy="50" 
                  strokeDasharray={`${2 * Math.PI * 40 * securityScore / 100} ${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * 0.25}`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-lg font-bold fill-white">
                  {securityScore}
                </text>
              </svg>
            </div>
            
            <div>
              <h3 className="text-white font-medium">System Security</h3>
              <p className="text-sm text-gray-400">All systems operational</p>
            </div>
          </div>

          <div className="space-y-2">
            {systemStatus.map((system, index) => (
              <div key={index} className="flex items-center justify-between bg-cyber-navy/40 p-2 rounded">
                <div className="flex items-center gap-2">
                  {index === 0 ? <ShieldCheck className="text-cyber-success h-4 w-4" /> : 
                   index === 1 ? <Database className="text-cyber-accent h-4 w-4" /> : 
                   index === 2 ? <Network className="text-cyber-warning h-4 w-4" /> :
                   <Lock className="text-cyber-success h-4 w-4" />}
                  <span className="text-sm text-white">{system.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${system.status === 'active' ? 'bg-cyber-success' : 'bg-cyber-danger'}`}></span>
                  <span className="text-xs text-gray-400">{system.uptime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SecurityStatus;
