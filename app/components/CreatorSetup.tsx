'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';

export default function CreatorSetup() {
  const { address } = useAccount();
  const [tipAmount, setTipAmount] = useState('0.001');
  const [isActive, setIsActive] = useState(true);
  const [currency, setCurrency] = useState('ETH');

  const handleSave = () => {
    // Save creator settings
    console.log('Saving creator settings:', {
      farcasterId: address,
      tipAmount,
      currency,
      isActive
    });
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Setup Card */}
      <div className="glass-card p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Creator Setup</h2>
          <p className="text-white/70">
            Configure your tipping settings to start earning from your Farcaster content
          </p>
        </div>

        <div className="space-y-6">
          {/* Tip Amount Setting */}
          <div>
            <label className="block text-white font-medium mb-2">
              Tip Amount per Like
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                step="0.001"
                value={tipAmount}
                onChange={(e) => setTipAmount(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent"
                placeholder="0.001"
              />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-accent"
              >
                <option value="ETH">ETH</option>
                <option value="USDC">USDC</option>
              </select>
            </div>
            <p className="text-white/50 text-sm mt-2">
              Users will pay this amount when they like your posts through TipJar frames
            </p>
          </div>

          {/* Active Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-medium">Enable Tipping</h3>
              <p className="text-white/50 text-sm">
                Allow users to tip you when they like your content
              </p>
            </div>
            <button
              onClick={() => setIsActive(!isActive)}
              className={`w-12 h-6 rounded-full transition-all ${
                isActive ? 'bg-accent' : 'bg-white/20'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transition-all ${
                  isActive ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Connected Address */}
          <div>
            <label className="block text-white font-medium mb-2">
              Receiving Address
            </label>
            <div className="px-4 py-3 bg-white/5 border border-white/20 rounded-lg">
              <p className="text-white/70 font-mono text-sm">{address}</p>
            </div>
            <p className="text-white/50 text-sm mt-2">
              Tips will be sent directly to this address
            </p>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <button
            onClick={handleSave}
            className="flex-1 btn-primary py-3"
          >
            Save Settings
          </button>
          <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all">
            Preview Frame
          </button>
        </div>
      </div>

      {/* Frame Preview */}
      <div className="glass-card p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Frame Preview</h3>
        <div className="bg-white/5 border border-white/20 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div>
              <p className="text-white font-medium">Your Farcaster Post</p>
              <p className="text-white/70 text-sm">Just shared something amazing...</p>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-white/70">💰</span>
                <span className="text-white text-sm">Tip {tipAmount} {currency}</span>
              </div>
              <button className="btn-primary text-sm">
                Like & Tip
              </button>
            </div>
          </div>
        </div>
        
        <p className="text-white/50 text-sm mt-3 text-center">
          This is how your posts will appear to users with TipJar frames enabled
        </p>
      </div>
    </div>
  );
}
