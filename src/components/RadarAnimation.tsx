
import React from 'react';

const RadarAnimation = () => {
  return (
    <div className="radar-container rounded-full w-full aspect-square relative overflow-hidden border border-cyber-accent/30">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-3/4 h-3/4 border border-cyber-accent/20 rounded-full"></div>
        <div className="w-1/2 h-1/2 border border-cyber-accent/20 rounded-full"></div>
        <div className="w-1/4 h-1/4 border border-cyber-accent/20 rounded-full"></div>
      </div>
      <div className="radar-beam"></div>
      
      {/* Blips */}
      <div className="absolute top-1/4 left-1/3 h-1.5 w-1.5 rounded-full bg-cyber-success animate-ping-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 h-1.5 w-1.5 rounded-full bg-cyber-warning animate-ping-slow" style={{animationDelay: '0.7s'}}></div>
      <div className="absolute top-2/3 right-1/3 h-1.5 w-1.5 rounded-full bg-cyber-danger animate-ping-slow" style={{animationDelay: '1.5s'}}></div>
    </div>
  );
};

export default RadarAnimation;
