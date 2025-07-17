'use client'

import { useState } from 'react'
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Clock, 
  Star, 
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react'

// Mock data for P2P orders
const mockOrders = [
  {
    id: 1,
    user: "CryptoKing99",
    rating: 4.8,
    trades: 142,
    amount: "50,000 - 2,00,000",
    price: "85.45",
    payment: ["UPI", "Bank Transfer", "PayTM"],
    type: "buy"
  },
  {
    id: 2,
    user: "TraderPro",
    rating: 4.9,
    trades: 89,
    amount: "10,000 - 1,00,000",
    price: "85.50",
    payment: ["UPI", "IMPS"],
    type: "buy"
  },
  {
    id: 3,
    user: "CoinMaster",
    rating: 4.7,
    trades: 256,
    amount: "25,000 - 5,00,000",
    price: "85.35",
    payment: ["Bank Transfer", "UPI"],
    type: "sell"
  },
  {
    id: 4,
    user: "BitExchange",
    rating: 4.6,
    trades: 78,
    amount: "5,000 - 50,000",
    price: "85.40",
    payment: ["UPI", "PayTM", "PhonePe"],
    type: "sell"
  }
]

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('buy')
  const [selectedCrypto, setSelectedCrypto] = useState('USDT')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TradeP2P
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="/trade" className="text-gray-700 hover:text-blue-600 font-medium">P2P Trade</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Markets</a>
              <a href="/dashboard" className="text-gray-700 hover:text-blue-600 font-medium">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Support</a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Login</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trade Crypto Peer-to-Peer
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Buy and sell cryptocurrencies with zero fees and bank-level security
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Trading
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">₹2.5Cr+</div>
              <div className="text-gray-600">24h Volume</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">150+</div>
              <div className="text-gray-600">Payment Methods</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* P2P Trading Interface */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">P2P Trading</h2>
            <p className="text-xl text-gray-600">Trade directly with other users</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            {/* Trading Controls */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Buy/Sell Tabs */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => setActiveTab('buy')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'buy' 
                      ? 'bg-green-500 text-white' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Buy
                </button>
                <button 
                  onClick={() => setActiveTab('sell')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    activeTab === 'sell' 
                      ? 'bg-red-500 text-white' 
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  Sell
                </button>
              </div>

              {/* Crypto Selection */}
              <div className="flex items-center gap-4">
                <select 
                  value={selectedCrypto}
                  onChange={(e) => setSelectedCrypto(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="USDT">USDT</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="BNB">BNB</option>
                </select>
                <span className="text-gray-600">with INR</span>
              </div>

              {/* Filters */}
              <div className="flex gap-4 ml-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input 
                    type="text" 
                    placeholder="Search by user"
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="h-4 w-4" />
                  Filters
                </button>
              </div>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Advertiser</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Limit</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Payment</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{order.user}</div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-400 fill-current" />
                              <span className="ml-1">{order.rating}</span>
                            </div>
                            <span>•</span>
                            <span>{order.trades} trades</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-900">₹{order.price}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-gray-600">₹{order.amount}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex flex-wrap gap-1">
                          {order.payment.map((method, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              {method}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          activeTab === 'buy'
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-red-500 text-white hover:bg-red-600'
                        }`}>
                          {activeTab === 'buy' ? 'Buy' : 'Sell'} {selectedCrypto}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TradeP2P?</h2>
            <p className="text-xl text-gray-600">Secure, fast, and reliable P2P trading</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center card-hover p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Escrow</h3>
              <p className="text-gray-600">Your funds are protected with our secure escrow system until trade completion</p>
            </div>

            <div className="text-center card-hover p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Rates</h3>
              <p className="text-gray-600">Get the best market rates with competitive pricing from verified traders</p>
            </div>

            <div className="text-center card-hover p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Users</h3>
              <p className="text-gray-600">Trade with confidence knowing all users are KYC verified and rated</p>
            </div>

            <div className="text-center card-hover p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to help you with any trading issues</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Start trading in just 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Account</h3>
              <p className="text-gray-600">Sign up and complete your KYC verification to start trading securely</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Trading Partner</h3>
              <p className="text-gray-600">Browse through verified traders and find the best rates for your trade</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Trade</h3>
              <p className="text-gray-600">Make payment and receive your crypto instantly with escrow protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="text-2xl font-bold mb-4">TradeP2P</div>
                              <p className="text-gray-400 mb-4">
                  India&apos;s most trusted P2P cryptocurrency trading platform with bank-level security and 24/7 support.
                </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">P2P Trading</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Markets</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Fees</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Docs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  support@tradep2p.in
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  +91 9999 888 777
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  Mumbai, India
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TradeP2P. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
