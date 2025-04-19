import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  MapPin, 
  Smartphone, 
  Shield, 
  Flag,
  QrCode,
  AlertTriangle
} from 'lucide-react';
import RadarAnimation from './RadarAnimation';

const UserProfile = () => {
  
  const userData = {
    name: "Aritra Kundu",
    phone: "+91 6297347085",
    location: "Kolkata, West Bengal",
    deviceCount: 2,
    upiId: "aritra@143",
    securityLevel: "Enhanced",
    lastScan: "10 minutes ago"
  };

  const recentDevices = [
    { name: "OnePlus Nord", lastUsed: "Current device", trusted: true },
    { name: "Lenovo LOQ", lastUsed: "2 hours ago", trusted: true },
    { name: "Unknown Device", lastUsed: "Blocked yesterday", trusted: false }
  ];

  return (
    <Card className="cyber-panel h-full">
      <Tabs defaultValue="profile" className="h-full">
        <TabsList className="grid grid-cols-3 bg-cyber-darker border-b border-cyber-accent/20 rounded-b-none">
          <TabsTrigger value="profile" className="data-[state=active]:bg-cyber-accent/10">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="devices" className="data-[state=active]:bg-cyber-accent/10">
            <Smartphone className="h-4 w-4 mr-2" />
            Devices
          </TabsTrigger>
          <TabsTrigger value="qr" className="data-[state=active]:bg-cyber-accent/10">
            <QrCode className="h-4 w-4 mr-2" />
            QR Scan
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="p-4 h-[calc(100%-42px)] overflow-auto">
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-cyber-navy/60 flex items-center justify-center border border-cyber-accent/30">
                <User className="h-7 w-7 text-cyber-accent" />
              </div>
              <div>
                <h3 className="text-white font-medium">{userData.name}</h3>
                <p className="text-sm text-gray-400">{userData.upiId}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="bg-cyber-navy/40 p-3 rounded flex items-center gap-3">
                <Smartphone className="h-5 w-5 text-cyber-accent" />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="text-sm text-white">{userData.phone}</p>
                </div>
              </div>
              
              <div className="bg-cyber-navy/40 p-3 rounded flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyber-accent" />
                <div>
                  <p className="text-xs text-gray-400">Location</p>
                  <p className="text-sm text-white">{userData.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-sm font-medium text-white mb-2">Security Status</h3>
              <div className="bg-cyber-navy/40 p-3 rounded mb-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-cyber-success" />
                    <span className="text-sm text-white">Security Level</span>
                  </div>
                  <span className="text-sm text-cyber-success">{userData.securityLevel}</span>
                </div>
              </div>
              
              <div className="bg-cyber-navy/40 p-3 rounded">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Flag className="h-4 w-4 text-cyber-warning" />
                    <span className="text-sm text-white">Risk Assessment</span>
                  </div>
                  <span className="text-sm text-cyber-warning">Medium</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <RadarAnimation />
              <p className="text-xs text-center text-gray-400 mt-2">
                Network monitoring active • Last scan: {userData.lastScan}
              </p>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="devices" className="p-4 h-[calc(100%-42px)] overflow-auto">
          <h3 className="text-sm font-medium text-white mb-3">Connected Devices</h3>
          <div className="space-y-3">
            {recentDevices.map((device, index) => (
              <div key={index} className="bg-cyber-navy/40 p-3 rounded flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${device.trusted ? 'bg-cyber-accent/10' : 'bg-cyber-danger/10'}`}>
                    <Smartphone className={`h-5 w-5 ${device.trusted ? 'text-cyber-accent' : 'text-cyber-danger'}`} />
                  </div>
                  <div>
                    <p className="text-sm text-white">{device.name}</p>
                    <p className="text-xs text-gray-400">{device.lastUsed}</p>
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 rounded ${device.trusted ? 'bg-cyber-success/20 text-cyber-success' : 'bg-cyber-danger/20 text-cyber-danger'}`}>
                  {device.trusted ? 'Trusted' : 'Blocked'}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 p-4 border border-cyber-warning/30 rounded bg-cyber-warning/5">
            <h4 className="text-sm font-medium text-cyber-warning mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Security Recommendation
            </h4>
            <p className="text-xs text-gray-300">
              Enable device verification for all new login attempts to enhance your account security.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="qr" className="flex flex-col items-center justify-center p-6 h-[calc(100%-42px)]">
          <QrCode className="h-16 w-16 text-cyber-accent mb-4" />
          <h3 className="text-white font-medium mb-2">QR Code Scanner</h3>
          <p className="text-sm text-gray-400 text-center mb-4">Scan any UPI QR code to verify its legitimacy before payment</p>
          <button className="bg-cyber-accent text-white px-4 py-2 rounded hover:bg-cyber-accent/80 transition-colors">
            Scan QR Code
          </button>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default UserProfile;
