'use client';

import { useState, useEffect } from 'react';
import { AnimateOnScroll } from '../animation/AnimateOnScroll';

interface BitcoinPriceData {
  usd: number;
  usd_24h_change: number;
}

export default function BitcoinPrice() {
  const [price, setPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBitcoinPrice = async () => {
    try {
      // Try multiple endpoints for better reliability
      const endpoints = [
        'https://api.coinbase.com/v2/exchange-rates?currency=BTC',
        'https://api.blockchain.info/ticker',
        'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
      ];
      
      let success = false;
      
      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint);
          
          if (!response.ok) {
            continue;
          }
          
          const data = await response.json();
          let usdRate: number;
          
          // Handle different API response formats
          if (endpoint.includes('coinbase')) {
            usdRate = parseFloat(data.data.rates.USD);
          } else if (endpoint.includes('blockchain.info')) {
            usdRate = data.USD.last;
          } else if (endpoint.includes('coindesk')) {
            usdRate = data.bpi.USD.rate_float;
          } else {
            continue;
          }
          
          setPrice(usdRate);
          setChange24h(null); // Most free APIs don't include 24h change
          setError(null);
          success = true;
          break;
        } catch (endpointError) {
          continue;
        }
      }
      
      if (!success) {
        throw new Error('All endpoints failed');
      }
    } catch (err) {
      setError('Failed to load price');
      console.error('Error fetching Bitcoin price:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchBitcoinPrice();
    
    // Set up interval to fetch every 30 seconds (more reasonable for API limits)
    const interval = setInterval(fetchBitcoinPrice, 30000);
    
    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatChange = (change: number) => {
    const sign = change >= 0 ? '+' : '';
    return `${sign}${change.toFixed(2)}%`;
  };

  if (loading) {
    return (
      <AnimateOnScroll type="fade-up" delay={350} className="mt-12 text-center">
        <div className="bg-white rounded-xl p-6 shadow-medium border border-gray-100">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-24 mx-auto mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-32 mx-auto"></div>
          </div>
        </div>
      </AnimateOnScroll>
    );
  }

  if (error || price === null) {
    return (
      <AnimateOnScroll type="fade-up" delay={350} className="mt-12 text-center">
        <div className="bg-white rounded-xl p-6 shadow-medium border border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Bitcoin Price</p>
          <p className="text-red-500 text-lg">Unable to load price</p>
        </div>
      </AnimateOnScroll>
    );
  }

  return (
    <AnimateOnScroll type="fade-up" delay={350} className="mt-12 text-center">
      <div className="bg-white rounded-xl p-6 shadow-medium border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-center justify-center mb-2">
          <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
            <span className="text-orange-600 font-bold text-lg">₿</span>
          </div>
          <p className="text-sm text-gray-500 font-medium">Live Bitcoin Price</p>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <h3 className="text-3xl font-bold text-gray-900">
            {formatPrice(price)}
          </h3>
          {change24h !== null && (
            <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
              change24h >= 0 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {formatChange(change24h)}
            </span>
          )}
        </div>
        <p className="text-xs text-gray-400 mt-2">Updates every 30 seconds</p>
      </div>
    </AnimateOnScroll>
  );
} 