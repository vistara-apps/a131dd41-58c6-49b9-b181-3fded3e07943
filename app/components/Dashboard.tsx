'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

interface DashboardData {
  totalEarnings: string;
  totalTips: number;
  averageTip: string;
  topPost: {
    id: string;
    tips: number;
    earnings: string;
  };
}

export default function Dashboard() {
  const { address } = useAccount();
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    totalEarnings: '$7,455',
    totalTips: 342,
    averageTip: '0.001',
    topPost: {
      id: 'post-123',
      tips: 89,
      earnings: '$2,140'
    }
  });

  const recentTips = [
    { id: 1, from: 'alice.eth', amount: '0.001 ETH', time: '2 min ago', post: 'My latest Farcaster post about...' },
    { id: 2, from: 'bob.eth', amount: '0.002 ETH', time: '5 min ago', post: 'Building on Base is amazing...' },
    { id: 3, from: 'charlie.eth', amount: '0.001 ETH', time: '12 min ago', post: 'Just shipped a new feature...' },
    { id: 4, from: 'diana.eth', amount: '0.003 ETH', time: '1 hour ago', post: 'Web3 social is the future...' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white/70 text-sm font-medium">Total Earnings</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-white">{dashboardData.totalEarnings}</p>
          <p className="text-green-400 text-sm">+12.5% from last week</p>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white/70 text-sm font-medium">Total Tips</h3>
            <span className="text-2xl">❤️</span>
          </div>
          <p className="text-3xl font-bold text-white">{dashboardData.totalTips}</p>
          <p className="text-green-400 text-sm">+8.3% from last week</p>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white/70 text-sm font-medium">Average Tip</h3>
            <span className="text-2xl">⚡</span>
          </div>
          <p className="text-3xl font-bold text-white">{dashboardData.averageTip} ETH</p>
          <p className="text-blue-400 text-sm">Steady growth</p>
        </div>

        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-white/70 text-sm font-medium">Top Post</h3>
            <span className="text-2xl">🚀</span>
          </div>
          <p className="text-3xl font-bold text-white">{dashboardData.topPost.tips}</p>
          <p className="text-purple-400 text-sm">{dashboardData.topPost.earnings} earned</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tip Chart */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Tip amounts</h3>
            <select className="bg-white/10 border border-white/20 rounded-md px-3 py-1 text-white text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          
          {/* Simple Bar Chart */}
          <div className="space-y-4">
            <div className="flex items-end space-x-2 h-40">
              {[20, 35, 45, 30, 55, 40, 60, 35, 70, 45, 55, 40, 65, 50].map((height, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-purple-500 to-pink-400 rounded-sm flex-1"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-white/50 text-sm">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/5 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                <span className="text-sm">👤</span>
              </div>
              <div>
                <p className="text-white text-sm">Most liked by farcaster post</p>
                <p className="text-white/70 text-xs">Farcaster post cannot show where the tip</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <button className="btn-primary">Like</button>
              <button className="btn-secondary">Like</button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          {/* Earnings Card */}
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Earnings</h3>
              <span className="text-purple-400">💎</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/70">Tip amounts</span>
                <span className="text-white font-medium">{dashboardData.totalEarnings}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/50">24.1 ETH</span>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Recent Tips</h3>
            <div className="space-y-3">
              {recentTips.map((tip) => (
                <div key={tip.id} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">💰</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-white text-sm font-medium">{tip.from}</span>
                      <span className="text-green-400 text-sm">{tip.amount}</span>
                    </div>
                    <p className="text-white/50 text-xs">{tip.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
