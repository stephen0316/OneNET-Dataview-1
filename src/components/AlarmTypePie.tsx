import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export const AlarmTypePie = () => {
  const data = [
    { name: '离线', value: 14665, color: '#00ffff' },
    { name: '分离故障', value: 3613, color: '#ff9900' },
    { name: '火警', value: 1272, color: '#ff4444' },
    { name: '其它', value: 451, color: '#888888' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 min-h-[180px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <filter id="pieShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.8" />
              </filter>
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
              style={{ filter: 'url(#pieShadow)' }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(10, 25, 41, 0.9)', border: '1px solid #1b3a57', borderRadius: '4px', color: '#fff' }}
              itemStyle={{ color: '#fff' }}
              formatter={(value: number) => [`${value} (${((value / total) * 100).toFixed(1)}%)`, '数量']}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-gray-400 text-xs">总计</span>
          <span className="text-xl font-bold text-white font-mono">{total}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 px-4">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: item.color }}></span>
              <span className="text-gray-400">{item.name}</span>
            </div>
            <div className="flex items-end gap-2 pl-4">
              <span className="font-mono text-white text-lg leading-none">{item.value}</span>
              <span className="text-xs text-gray-500 leading-none mb-0.5">{((item.value / total) * 100).toFixed(0)}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
