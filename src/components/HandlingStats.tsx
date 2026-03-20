import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export const HandlingStats = () => {
  const rate = 31; // 31%
  const data = [
    { name: 'Handled', value: rate },
    { name: 'Remaining', value: 100 - rate }
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-6 h-full justify-center py-2">
      <div className="flex-1 relative min-h-[140px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <linearGradient id="pieGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="100%" stopColor="#0055ff" />
              </linearGradient>
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={70}
              startAngle={225}
              endAngle={-45}
              dataKey="value"
              stroke="none"
              cornerRadius={4}
            >
              <Cell fill="url(#pieGradient)" />
              <Cell fill="#1a365d" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
          <span className="text-3xl font-bold text-white font-mono" style={{ textShadow: '0 0 10px rgba(0,255,255,0.5)' }}>0.31</span>
          <span className="text-xs text-cyan-500 mt-1">警情处理率</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 px-2">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300">报警已处理</span>
            <span className="text-cyan-400 font-mono">120个</span>
          </div>
          <div className="h-2 w-full bg-[#0a192f] rounded-full overflow-hidden border border-[#1b3a57]">
            <div className="h-full bg-gradient-to-r from-cyan-900 to-cyan-400 w-[60%] shadow-[0_0_10px_#00ffff] rounded-full"></div>
          </div>
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-300">故障已处理</span>
            <span className="text-red-400 font-mono">36个</span>
          </div>
          <div className="h-2 w-full bg-[#0a192f] rounded-full overflow-hidden border border-[#1b3a57]">
            <div className="h-full bg-gradient-to-r from-red-900 to-red-500 w-[30%] shadow-[0_0_10px_#ff4444] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
