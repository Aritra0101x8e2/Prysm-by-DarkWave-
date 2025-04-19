import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
  ShieldCheck,
  MessageSquare,
  Lock,
  Search,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  LineChart, Line, ResponsiveContainer, Tooltip
} from 'recharts';

const generateLiveData = () => ({
  time: new Date().toLocaleTimeString(),
  fraudScore: Math.floor(Math.random() * 100),
});

const isValidUPI = (upi: string) => {
  const upiRegex = /^[a-zA-Z0-9.+-_]{2,}@\w{2,}$/;
  return upiRegex.test(upi);
};

const FraudDetection = () => {
  const { toast } = useToast();
  const [isProtectionEnabled, setIsProtectionEnabled] = useState(true);
  const [upiId, setUpiId] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [graphData, setGraphData] = useState<Array<{ time: string; fraudScore: number }>>([]);
  const [currentFraudScore, setCurrentFraudScore] = useState(0);
  const [isHovered, setIsHovered] = useState(false); 
  const toggleProtection = () => {
    setIsProtectionEnabled(!isProtectionEnabled);
    toast({
      title: isProtectionEnabled ? "Protection Disabled" : "Protection Enabled",
      description: isProtectionEnabled
        ? "Real-time fraud detection has been turned off"
        : "Real-time fraud detection is now active",
      variant: isProtectionEnabled ? "destructive" : "default",
    });
  };

  const verifyUPI = () => {
    if (!upiId) {
      toast({
        title: "Error",
        description: "Please enter a UPI ID to verify",
        variant: "destructive",
      });
      return;
    }

    if (!isValidUPI(upiId)) {
      toast({
        title: "Invalid UPI Format",
        description: "Enter a valid UPI ID (e.g., user@bankname)",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      const isSafe = Math.random() > 0.3;

      if (isSafe) {
        toast({
          title: "Verification Complete",
          description: `${upiId} appears to be legitimate`,
          variant: "default",
        });
      } else {
        toast({
          title: "Potential Fraud Detected",
          description: `${upiId} has been reported in scam activities`,
          variant: "destructive",
        });
      }
    }, 1500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateLiveData();
      setCurrentFraudScore(newData.fraudScore);
      setGraphData((prev) => {
        const updated = [...prev.slice(-14), newData];
        return updated;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="cyber-panel h-full">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Fraud Detection</h2>
          <div className="flex items-center gap-2">
            <Switch
              checked={isProtectionEnabled}
              onCheckedChange={toggleProtection}
              className="data-[state=checked]:bg-cyber-success"
            />
            <span className="text-xs text-gray-300">
              {isProtectionEnabled ? 'Enabled' : 'Disabled'}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          {}
          <div className="bg-cyber-navy/40 rounded-md p-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <Input
                type="text"
                placeholder="Enter UPI ID to verify"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="bg-cyber-darker border-cyber-accent/30 focus-visible:ring-cyber-accent text-white"
              />
              <Button
                onClick={verifyUPI}
                disabled={isVerifying}
                className="bg-cyber-accent hover:bg-cyber-accent/80 text-white"
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4" />
                    Verify
                  </>
                )}
              </Button>
            </div>
          </div>

          {}
          <div className="bg-cyber-navy/40 p-3 rounded-md">
            <h3 className="text-sm font-medium text-white mb-2">Real-time Fraud Score</h3>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={graphData}>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.6)', border: 'none' }} />
                <Line
                  type="monotone"
                  dataKey="fraudScore"
                  stroke="url(#gradient)"
                  strokeWidth={2}
                  dot={false}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF69B4" /> {/* Pink */}
                    <stop offset="50%" stopColor="#8A2BE2" /> {/* Purple */}
                    <stop offset="100%" stopColor="#00BFFF" /> {/* Blue */}
                  </linearGradient>
                </defs>
              </LineChart>
            </ResponsiveContainer>
          </div>

          {}
          <div className="bg-cyber-navy/40 p-6 rounded-md flex justify-center items-center">
            <div
              className="relative w-48 h-48"
              onMouseEnter={() => setIsHovered(true)} 
              onMouseLeave={() => setIsHovered(false)} 
            >
              <div className="absolute inset-0 animate-spin-slow rounded-full border-8 border-t-pink-500 border-r-purple-500 border-b-blue-500 border-l-cyber-navy/30" />
              <div
                className={`absolute inset-4 rounded-full bg-cyber-darker flex items-center justify-center transition-opacity ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <span className="text-white text-xl font-bold">{currentFraudScore}</span>
              </div>
            </div>
          </div>

          {}
          <div className="bg-cyber-navy/40 p-3 rounded-md">
            <h3 className="text-sm font-medium text-white mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4 text-cyber-accent" />
              Active Protection Features
            </h3>

            <div className="space-y-2">
              {['Transaction Monitoring', 'Behavior Analysis', 'Device Fingerprinting', 'Location Verification'].map((feature, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">{feature}</span>
                  <CheckCircle className="h-4 w-4 text-cyber-success" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FraudDetection;
