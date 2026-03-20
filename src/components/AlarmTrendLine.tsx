import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const AlarmTrendLine = () => {
  const data = [
    { date: '01-26', fire: 120, fault: 300 },
    { date: '01-28', fire: 150, fault: 400 },
    { date: '01-30', fire: 180, fault: 350 },
    { date: '02-01', fire: 200, fault: 500 },
    { date: '02-03', fire: 100, fault: 900 },
    { date: '02-05', fire: 300, fault: 400 },
    { date: '02-07', fire: 150, fault: 600 },
    { date: '02-09', fire: 200, fault: 300 },
    { date: '02-11', fire: 180, fault: 450 },
    { date: '02-13', fire: 220, fault: 380 },
    { date: '02-15', fire: 160, fault: 520 },
    { date: '02-17', fire: 190, fault: 410 },
    { date: '02-19', fire: 140, fault: 320 },
  ];

  return (
    <div className="h-full w-full pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorFire" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ff4444" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorFault" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff9900" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ff9900" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1b3a57" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="#4a5568" 
            tick={{ fill: '#8892b0', fontSize: 12 }} 
            tickMargin={10}
            axisLine={{ stroke: '#1b3a57' }}
          />
          <YAxis 
            stroke="#4a5568" 
            tick={{ fill: '#8892b0', fontSize: 12 }} 
            axisLine={{ stroke: '#1b3a57' }}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: 'rgba(10, 25, 41, 0.9)', border: '1px solid #00ffff', borderRadius: '4px', color: '#fff', boxShadow: '0 0 10px rgba(0,255,255,0.2)' }}
            itemStyle={{ fontSize: '14px' }}
            labelStyle={{ color: '#8892b0', marginBottom: '4px' }}
          />
          <Legend 
            wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} 
            iconType="circle"
          />
          <Area 
            type="monotone" 
            dataKey="fire" 
            name="火警/预警" 
            stroke="#ff4444" 
            fillOpacity={1} 
            fill="url(#colorFire)" 
            strokeWidth={2} 
            activeDot={{ r: 6, fill: '#ff4444', stroke: '#fff', strokeWidth: 2 }} 
          />
          <Area 
            type="monotone" 
            dataKey="fault" 
            name="故障" 
            stroke="#ff9900" 
            fillOpacity={1} 
            fill="url(#colorFault)" 
            strokeWidth={2} 
            activeDot={{ r: 6, fill: '#ff9900', stroke: '#fff', strokeWidth: 2 }} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
