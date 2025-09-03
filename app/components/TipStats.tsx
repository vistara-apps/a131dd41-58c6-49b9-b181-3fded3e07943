'use client';

import { useState } from 'react';

interface TipData {
  date: string;
  tips: number;
  earnings: string;
}

export default function TipStats() {
  const [timeRange, setTimeRange] = useState('7d');
  
  const tipData: TipData[] = [
    { date: '2024-01-15', tips: 23, earnings: '$456' },
    { date: '2024-01-14', tips: 31, earnings: '$612' },
    { date: '2024-01-13', tips: 18, earnings: '$324' },
    { date: '2024-01-12', tips: 27, earnings: '$543' },
    { date: '2024-01-11', tips: 35, earnings: '$678' },
    { date: '2024-01-10', tips: 29, earnings: '$589' },
    { date: '2024-01-09', tips: 22, earnings: '$445' },
  ];

  const topPosts = [
    { id: 1, content: 'Building the future of Web3 social...', tips: 89, earnings: '$1,245' },
    { id: 2, content: 'Just shipped a new Base MiniApp...', tips: 76, earnings: '$1,098' },
    { id: 3, content: 'Farcaster frames are game-changing...', tips: 54, earnings: '$892' },
    { id: 4, content: 'Onchain social is inevitable...', tips: 43, earnings: '$743' },
  ];

  return (
    <div className="space-y-8">
      {/* Header with Time Range Selector */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h2>
            <p className="text-white/70">Track your tipping performance and engagement</p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white/70 text-sm font-medium uppercase tracking-wide">Total Tips</h3>
              <p className="text-3xl font-bold text-white">1,247</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xl">💎</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400 text-sm">+15.3%</span>
            <span className="text-white/50 text-sm">vs last period</span>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white/70 text-sm font-medium uppercase tracking-wide">Engagement Rate</h3>
              <p className="text-3xl font-bold text-white">8.4%</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-xl">📊</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400 text-sm">+2.1%</span>
            <span className="text-white/50 text-sm">vs last period</span>
          </div>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-white/70 text-sm font-medium uppercase tracking-wide">Avg Tip Value</h3>
              <p className="text-3xl font-bold text-white">$5.98</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-xl">💰</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400 text-sm">+0.3%</span>
            <span className="text-white/50 text-sm">vs last period</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tips Over Time Chart */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Tips Over Time</h3>
          <div className="space-y-4">
            {tipData.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-white/70 text-sm w-20">
                    {new Date(day.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <div className="flex-1">
                    <div 
                      className="h-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-full"
                      style={{ width: `${(day.tips / 40) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{day.tips} tips</p>
                  <p className="text-white/50 text-sm">{day.earnings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Posts */}
        <div className="glass-card p-6">
          <h3 className="text-xl font-semibold text-white mb-6">Top Performing Posts</h3>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div key={post.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm line-clamp-2">{post.content}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-white/70 text-xs">{post.tips} tips</span>
                    <span className="text-green-400 text-xs font-medium">{post.earnings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div className="glass-card p-6">
        <h3 className="text-xl font-semibold text-white mb-6">Detailed Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-white/70 py-3">Date</th>
                <th className="text-left text-white/70 py-3">Posts</th>
                <th className="text-left text-white/70 py-3">Likes</th>
                <th className="text-left text-white/70 py-3">Tips</th>
                <th className="text-left text-white/70 py-3">Earnings</th>
                <th className="text-left text-white/70 py-3">Rate</th>
              </tr>
            </thead>
            <tbody>
              {tipData.map((day, index) => (
                <tr key={index} className="border-b border-white/5">
                  <td className="text-white py-3">
                    {new Date(day.date).toLocaleDateString()}
                  </td>
                  <td className="text-white/70 py-3">3</td>
                  <td className="text-white/70 py-3">{Math.floor(day.tips * 1.8)}</td>
                  <td className="text-white py-3">{day.tips}</td>
                  <td className="text-green-400 py-3">{day.earnings}</td>
                  <td className="text-white/70 py-3">
                    {((day.tips / (day.tips * 1.8)) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
