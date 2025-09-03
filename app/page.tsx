'use client';

import { useState } from 'react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Identity } from '@coinbase/onchainkit/identity';
import { useAccount } from 'wagmi';
import Dashboard from './components/Dashboard';
import CreatorSetup from './components/CreatorSetup';
import TipStats from './components/TipStats';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [currentView, setCurrentView] = useState<'dashboard' | 'setup' | 'stats'>('dashboard');

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="glass-card p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">TipJar Remix</h1>
                <p className="text-white/70">Turn your likes into micro-rewards on Base</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {isConnected && address && (
                <Identity
                  address={address}
                  className="bg-white/10 rounded-lg p-2"
                />
              )}
              <ConnectWallet />
            </div>
          </div>
        </header>

        {/* Navigation */}
        {isConnected && (
          <nav className="glass-card p-4 mb-8">
            <div className="flex space-x-1">
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-4 py-2 rounded-md transition-all ${
                  currentView === 'dashboard'
                    ? 'bg-accent text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setCurrentView('setup')}
                className={`px-4 py-2 rounded-md transition-all ${
                  currentView === 'setup'
                    ? 'bg-accent text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Setup
              </button>
              <button
                onClick={() => setCurrentView('stats')}
                className={`px-4 py-2 rounded-md transition-all ${
                  currentView === 'stats'
                    ? 'bg-accent text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                Analytics
              </button>
            </div>
          </nav>
        )}

        {/* Main Content */}
        {!isConnected ? (
          <div className="glass-card p-12 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Welcome to TipJar Remix
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Connect your Base wallet to start receiving micro-tips from your Farcaster content.
                Set up automated tipping when users like your posts and track your earnings in real-time.
              </p>
            </div>
            
            <div className="flex justify-center">
              <ConnectWallet />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {currentView === 'dashboard' && <Dashboard />}
            {currentView === 'setup' && <CreatorSetup />}
            {currentView === 'stats' && <TipStats />}
          </div>
        )}
      </div>
    </main>
  );
}
