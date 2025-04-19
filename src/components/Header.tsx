
import React from 'react';
import { Bell, ShieldCheck, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-cyber-darker border-b border-cyber-accent/20 px-4 py-2">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-cyber-accent h-6 w-6" />
          <h1 className="text-xl font-bold text-white cyber-text-glow">Prysm by DARKWAVE</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative bg-transparent border-cyber-accent/30 hover:bg-cyber-accent/10">
            <Bell className="h-5 w-5 text-cyber-accent" />
            <span className="absolute -top-1 -right-1 bg-cyber-danger text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">50</span>
          </Button>
          
          <Button variant="outline" size="icon" className="bg-transparent border-cyber-accent/30 hover:bg-cyber-accent/10">
            <User className="h-5 w-5 text-cyber-accent" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
