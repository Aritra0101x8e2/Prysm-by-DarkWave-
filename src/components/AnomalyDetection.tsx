import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Network, DatabaseBackup, Users, ShieldAlert, ServerCrash } from 'lucide-react';

const AnomalyDetection = () => {
  const allAnomalies = [
    {
      type: "Multiple failed transactions",
      severity: "high",
      description: "5 failed transactions from Mumbai, IN",
      icon: <Network className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "New device login",
      severity: "medium",
      description: "Windows PC from New Delhi, IN",
      icon: <DatabaseBackup className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Unusual receiver",
      severity: "medium",
      description: "First payment to overseas merchant",
      icon: <Users className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Suspicious login pattern",
      severity: "high",
      description: "Multiple failed logins from new IP",
      icon: <ShieldAlert className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "Transaction from blacklisted region",
      severity: "high",
      description: "Attempted transfer from North Korea",
      icon: <ServerCrash className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "Abnormal transaction volume",
      severity: "medium",
      description: "High volume transfer within 30 mins",
      icon: <Network className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Access from TOR network",
      severity: "high",
      description: "Login via anonymous IP traced to Punjab",
      icon: <ShieldAlert className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "Unknown device access",
      severity: "medium",
      description: "Linux terminal from Surat connected",
      icon: <DatabaseBackup className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "High traffic from one user",
      severity: "medium",
      description: "User generated 900 API hits from Bengaluru",
      icon: <Users className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Data sync error",
      severity: "low",
      description: "Mismatch detected in Gujarat backup server",
      icon: <ServerCrash className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Cross-region login",
      severity: "medium",
      description: "Same user logged in from Kochi and Lucknow",
      icon: <Network className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Firewall bypass attempt",
      severity: "high",
      description: "Root-level shell command attempted in Kolkata server",
      icon: <ShieldAlert className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "Outdated certificate usage",
      severity: "low",
      description: "TLS cert expired on Patna node",
      icon: <ServerCrash className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Bot-like behavior",
      severity: "medium",
      description: "Repeating actions detected from Ranchi client",
      icon: <Users className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Login with compromised credentials",
      severity: "high",
      description: "Leak matched with BreachDB from Jaipur",
      icon: <ShieldAlert className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "Admin override command",
      severity: "high",
      description: "Manual DB flush triggered in Visakhapatnam",
      icon: <ServerCrash className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "Backup failure",
      severity: "medium",
      description: "Sync failure from Coimbatore regional DB",
      icon: <DatabaseBackup className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Multiple account creation",
      severity: "medium",
      description: "50+ new accounts from same IP in Nagpur",
      icon: <Users className="h-4 w-4 text-cyber-warning" />
    },
    {
      type: "Foreign payment risk",
      severity: "high",
      description: "Large crypto withdrawal to Tokyo exchange",
      icon: <Network className="h-4 w-4 text-cyber-danger" />
    },
    {
      type: "Device fingerprint mismatch",
      severity: "medium",
      description: "Mobile login deviated from typical usage in Bhopal",
      icon: <DatabaseBackup className="h-4 w-4 text-cyber-warning" />
    }
    
  ];

  const [anomalies, setAnomalies] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAnomaly = {
        ...allAnomalies[Math.floor(Math.random() * allAnomalies.length)],
        id: Date.now(),
        time: "Just now"
      };

      setAnomalies(prev => [newAnomaly, ...prev].slice(0, 50)); // keep only latest 5
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="cyber-panel h-full">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Anomaly Detection</h2>
          <div className="bg-cyber-danger/20 text-cyber-danger text-xs px-2 py-1 rounded flex items-center">
            <AlertTriangle className="h-3 w-3 mr-1" />
            {anomalies.length} New Alerts
          </div>
        </div>

        <div className="space-y-3">
          {anomalies.map((anomaly) => (
            <div key={anomaly.id} className="bg-cyber-navy/60 rounded-md p-3">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mt-1 ${
                      anomaly.severity === 'high'
                        ? 'bg-cyber-danger/10'
                        : 'bg-cyber-warning/10'
                    }`}
                  >
                    {anomaly.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">{anomaly.type}</h3>
                    <p className="text-xs text-gray-400">{anomaly.description}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">{anomaly.time}</div>
              </div>

              <div className="mt-2 flex justify-between">
                <div className="text-xs px-2 py-0.5 rounded bg-cyber-navy/60 text-gray-400">
                  Severity:{' '}
                  <span
                    className={`${
                      anomaly.severity === 'high'
                        ? 'text-cyber-danger'
                        : 'text-cyber-warning'
                    }`}
                  >
                    {anomaly.severity}
                  </span>
                </div>

                <div className="flex gap-1">
                  <button className="text-xs px-2 py-0.5 bg-cyber-navy/60 text-cyber-accent rounded hover:bg-cyber-navy/80">
                    Details
                  </button>
                  <button className="text-xs px-2 py-0.5 bg-cyber-navy/60 text-gray-400 rounded hover:bg-cyber-navy/80">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AnomalyDetection;
