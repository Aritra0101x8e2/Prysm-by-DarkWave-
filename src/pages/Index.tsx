
import React from 'react';
import Header from '@/components/Header';
import TransactionMonitoring from '@/components/TransactionMonitoring';
import SecurityStatus from '@/components/SecurityStatus';
import RiskAnalysis from '@/components/RiskAnalysis';
import UserProfile from '@/components/UserProfile';
import FraudDetection from '@/components/FraudDetection';
import AnomalyDetection from '@/components/AnomalyDetection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      
      <main className="flex-1 container mx-auto p-4 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="col-span-1 md:col-span-2">
            <TransactionMonitoring />
          </div>
          <div className="col-span-1">
            <SecurityStatus />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="col-span-1">
            <RiskAnalysis />
          </div>
          <div className="col-span-1">
            <FraudDetection />
          </div>
          <div className="col-span-1">
            <UserProfile />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <AnomalyDetection />
        </div>
      </main>
      
      <footer className="bg-cyber-darker border-t border-cyber-accent/20 py-2">
        <div className="container mx-auto px-4 text-center text-xs text-gray-500">
          <p>Prysm by DARKWAVE - Aritra Kundu• Real-Time Fraud Analysis & Protection</p>
          <p className="mt-1">© 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
