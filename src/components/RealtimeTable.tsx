import React, { useEffect, useRef, useState } from 'react';

export const RealtimeTable = () => {
  const data = [
    { unit: '中移物联网有限公司', device: '868381076405799', location: 'D2A', position: '3楼楼梯间' },
    { unit: '恭城瑶族自治县高级中学', device: '868381076405788', location: '1栋宿舍楼', position: '302' },
    { unit: '某某商业广场', device: '868381076405111', location: '地下车库', position: 'B2-A区' },
    { unit: '第一人民医院', device: '868381076405222', location: '门诊楼', position: '2楼走廊' },
    { unit: '科技园区A栋', device: '868381076405333', location: '机房', position: '机柜上方' },
    { unit: '阳光小区', device: '868381076405444', location: '3号楼', position: '电梯前室' },
    { unit: '时代大厦', device: '868381076405555', location: '25层', position: '茶水间' },
    { unit: '中心小学', device: '868381076405666', location: '教学楼', position: '1楼大厅' },
    { unit: '市图书馆', device: '868381076405777', location: '阅览室', position: '天花板' },
    { unit: '体育中心', device: '868381076405888', location: '篮球馆', position: '东侧看台' },
  ];

  // Duplicate data for seamless scrolling
  const displayData = [...data, ...data];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col h-full overflow-hidden text-sm">
      <div className="flex bg-cyan-500/10 text-cyan-300 p-3 font-bold border-b border-cyan-500/30 shadow-[0_4px_10px_rgba(0,255,255,0.05)]">
        <div className="flex-[1.5]">防火单位</div>
        <div className="flex-[1.5]">报警设备</div>
        <div className="flex-1">场所</div>
        <div className="flex-1">安装位置</div>
      </div>
      <div 
        className="flex-1 overflow-hidden relative mt-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className="absolute w-full"
          style={{ 
            animation: `scroll ${data.length * 2}s linear infinite`,
            animationPlayState: isHovered ? 'paused' : 'running'
          }}
        >
          {displayData.map((row, i) => (
            <div key={i} className="flex p-3 border-b border-cyan-500/10 hover:bg-cyan-500/20 hover:shadow-[inset_0_0_10px_rgba(0,255,255,0.2)] transition-all text-gray-300 cursor-pointer">
              <div className="flex-[1.5] truncate pr-2" title={row.unit}>{row.unit}</div>
              <div className="flex-[1.5] truncate pr-2 font-mono text-xs" title={row.device}>{row.device}</div>
              <div className="flex-1 truncate pr-2" title={row.location}>{row.location}</div>
              <div className="flex-1 truncate pr-2" title={row.position}>{row.position}</div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
};
