/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { ShieldCheck, Server, Activity, CloudSun, Wind, Droplets } from 'lucide-react';
import { Card } from './components/Card';
import { ChinaMap } from './components/ChinaMap';
import { HandlingStats } from './components/HandlingStats';
import { RealtimeTable } from './components/RealtimeTable';
import { AlarmTypePie } from './components/AlarmTypePie';
import { AlarmTrendLine } from './components/AlarmTrendLine';

const WeatherDisplay = () => {
  return (
    <div className="flex items-center gap-3 md:gap-5 text-[#00ffff] font-mono text-sm md:text-base tracking-wider">
      <div className="flex items-center gap-2">
        <CloudSun size={18} className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
        <span>多云 24°C</span>
      </div>
      <div className="hidden md:flex items-center gap-1.5 text-cyan-300/90 text-xs md:text-sm">
        <Wind size={14} />
        <span>东南风 3级</span>
      </div>
      <div className="hidden lg:flex items-center gap-1.5 text-cyan-300/90 text-xs md:text-sm">
        <Droplets size={14} />
        <span>湿度 45%</span>
      </div>
    </div>
  );
};

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-[#00ffff] font-mono text-sm md:text-xl tracking-wider">
      {format(time, 'yyyy-MM-dd HH:mm:ss')}
    </div>
  );
};

export default function App() {
  return (
    <div className="w-screen h-screen bg-tech-radial bg-tech-grid text-white overflow-hidden font-sans relative flex flex-col">
      {/* Header */}
      <header className="relative w-full h-[60px] md:h-[80px] shrink-0 flex items-center justify-between px-4 md:px-8 z-20">
        {/* Header Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1736]/90 to-transparent">
          <svg className="absolute bottom-0 left-0 w-full h-[20px]" preserveAspectRatio="none" viewBox="0 0 1920 20">
            <path d="M0,0 L400,0 L450,20 L1470,20 L1520,0 L1920,0" fill="none" stroke="rgba(0,255,255,0.5)" strokeWidth="2" />
            <path d="M0,0 L400,0 L450,20 L1470,20 L1520,0 L1920,0" fill="rgba(0,255,255,0.05)" />
            <line x1="450" y1="20" x2="1470" y2="20" stroke="#00ffff" strokeWidth="2" filter="drop-shadow(0 0 8px #00ffff)" />
          </svg>
        </div>
        
        <div className="relative flex items-center gap-2 md:gap-4 w-1/4 md:w-1/3 mb-3 md:mb-5">
          <Clock />
        </div>

        <div className="relative flex-1 flex justify-center">
          <h1 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00ffff] tracking-[0.1em] md:tracking-[0.2em] whitespace-nowrap" style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.4)' }}>
            OneNET 物联消防
          </h1>
        </div>

        <div className="relative flex items-center justify-end gap-3 md:gap-4 w-1/4 md:w-1/3 text-sm text-cyan-300 mb-3 md:mb-5">
          <WeatherDisplay />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full p-4 md:p-6 flex flex-col lg:flex-row gap-4 md:gap-6 z-10 overflow-y-auto lg:overflow-hidden">
        
        {/* Left Column */}
        <div className="w-full lg:w-[270px] xl:w-[360px] 2xl:w-[400px] shrink-0 flex flex-col gap-4 md:gap-6">
          <div className="flex gap-2 md:gap-4 h-[80px] md:h-[100px] shrink-0">
            <Card className="flex-1 justify-center">
              <div className="text-gray-400 text-xs mb-1 md:mb-2">今日报警次数</div>
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-1">
                <div className="text-xl md:text-3xl font-bold text-[#ff4444] font-mono leading-none" style={{ textShadow: '0 0 10px rgba(255,68,68,0.5)' }}>96</div>
                <div className="text-[10px] text-green-400 flex items-center">
                  比昨日 -36% ↓
                </div>
              </div>
            </Card>
            <Card className="flex-1 justify-center">
              <div className="text-gray-400 text-xs mb-1 md:mb-2">今日故障次数</div>
              <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-1">
                <div className="text-xl md:text-3xl font-bold text-[#ff9900] font-mono leading-none" style={{ textShadow: '0 0 10px rgba(255,153,0,0.5)' }}>328</div>
                <div className="text-[10px] text-green-400 flex items-center">
                  比昨日 -37% ↓
                </div>
              </div>
            </Card>
          </div>

          <Card title="警情处理统计" className="h-[270px] md:h-[350px] shrink-0">
            <HandlingStats />
          </Card>

          <Card title="设备告警情况实时监测" className="flex-1 min-h-[300px] lg:min-h-0">
            <RealtimeTable />
          </Card>
        </div>

        {/* Center Column */}
        <div className="flex-1 flex flex-col relative min-h-[400px] lg:min-h-0 order-first lg:order-none">
          {/* Top Stats */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 xl:gap-6 mt-2 md:mt-4 mb-4 md:mb-8 z-20 shrink-0">
            <div className="flex items-center gap-3 md:gap-4 panel-sci-fi px-3 md:px-6 py-3 md:py-4 group flex-1 min-w-[160px] max-w-[320px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-2 md:p-3 bg-cyan-500/20 rounded-lg text-cyan-400 border border-cyan-500/30 shrink-0 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <Server className="w-5 h-5 md:w-7 md:h-7 icon-3d" />
              </div>
              <div className="min-w-0">
                <div className="text-gray-400 text-xs md:text-sm mb-0.5 md:mb-1 whitespace-nowrap">接入部件总数</div>
                <div className="text-xl md:text-2xl xl:text-4xl font-bold text-[#00ffff] font-mono tracking-tight" style={{ textShadow: '0 0 15px rgba(0,255,255,0.4)' }}>81,277</div>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 panel-sci-fi px-3 md:px-6 py-3 md:py-4 group flex-1 min-w-[160px] max-w-[320px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-2 md:p-3 bg-blue-500/20 rounded-lg text-blue-400 border border-blue-500/30 shrink-0 shadow-[0_0_15px_rgba(0,128,255,0.3)]">
                <ShieldCheck className="w-5 h-5 md:w-7 md:h-7 icon-3d" />
              </div>
              <div className="min-w-0">
                <div className="text-gray-400 text-xs md:text-sm mb-0.5 md:mb-1 whitespace-nowrap">接入单位总数</div>
                <div className="text-xl md:text-2xl xl:text-4xl font-bold text-[#0080ff] font-mono tracking-tight" style={{ textShadow: '0 0 15px rgba(0,128,255,0.4)' }}>4,437</div>
              </div>
            </div>
            <div className="flex items-center gap-3 md:gap-4 panel-sci-fi px-3 md:px-6 py-3 md:py-4 group flex-1 min-w-[160px] max-w-[320px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="p-2 md:p-3 bg-emerald-500/20 rounded-lg text-emerald-400 border border-emerald-500/30 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <Activity className="w-5 h-5 md:w-7 md:h-7 icon-3d" />
              </div>
              <div className="min-w-0">
                <div className="text-gray-400 text-xs md:text-sm mb-0.5 md:mb-1 whitespace-nowrap">传输设备在线数</div>
                <div className="text-xl md:text-2xl xl:text-4xl font-bold text-[#10b981] font-mono tracking-tight" style={{ textShadow: '0 0 15px rgba(16,185,129,0.4)' }}>1,232</div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1 relative w-full flex items-center justify-center min-h-[300px] z-0">
            <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
              <ChinaMap />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[270px] xl:w-[360px] 2xl:w-[400px] shrink-0 flex flex-col gap-4 md:gap-6">
          <Card title="报警类型占比" className="h-[300px] md:h-[380px] shrink-0">
            <AlarmTypePie />
          </Card>

          <Card title="近一个月报警趋势" className="flex-1 min-h-[300px] lg:min-h-0">
            <AlarmTrendLine />
          </Card>
        </div>

      </main>

      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#00ffff]/3 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[20%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-[#0080ff]/3 rounded-full blur-[100px] md:blur-[150px]"></div>
      </div>
    </div>
  );
}
