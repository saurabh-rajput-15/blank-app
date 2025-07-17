'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  Clock, 
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  Plus,
  Minus,
  ArrowUpRight,
  ArrowDownLeft,
  Settings,
  Shield,
  Bell,
  Download,
  Upload
} from 'lucide-react'

export default function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')

  const mockTrades = [
    {
      id: 'TXN001',
      type: 'buy',
      crypto: 'USDT',
      amount: '1,000.00',
      price: '85.45',
      total: '85,450',
      status: 'completed',
      date: '2024-01-15 14:30',
      trader: 'CryptoKing99'
    },
    {
      id: 'TXN002',
      type: 'sell',
      crypto: 'USDT',
      amount: '500.00',
      price: '85.40',
      total: '42,700',
      status: 'pending',
      date: '2024-01-15 12:15',
      trader: 'TraderPro'
    },
    {
      id: 'TXN003',
      type: 'buy',
      crypto: 'BTC',
      amount: '0.05',
      price: '37,50,000',
      total: '1,87,500',
      status: 'completed',
      date: '2024-01-14 16:45',
      trader: 'BitMaster'
    }
  ]

  const mockWallet = [
    { crypto: 'USDT', balance: '2,450.00', value: '₹2,09,402.50', change: '+2.5%' },
    { crypto: 'BTC', balance: '0.05', value: '₹1,87,500.00', change: '+5.2%' },
    { crypto: 'ETH', balance: '0.8', value: '₹2,24,000.00', change: '-1.8%' },
    { crypto: 'INR', balance: '15,450.00', value: '₹15,450.00', change: '0.0%' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TradeP2P
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="h-5 w-5" />
              </button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                U
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your crypto trading portfolio</p>
        </div>

        {/* Portfolio Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Total Balance */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Balance</h3>
              <button onClick={() => setShowBalance(!showBalance)}>
                {showBalance ? <Eye className="h-5 w-5 text-gray-400" /> : <EyeOff className="h-5 w-5 text-gray-400" />}
              </button>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {showBalance ? '₹6,36,352.50' : '****'}
            </div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+12.5% (+₹70,825)</span>
              <span className="text-gray-500 ml-2">this month</span>
            </div>
          </div>

          {/* Today's P&L */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today&apos;s P&L</h3>
            <div className="text-3xl font-bold text-green-600 mb-2">+₹4,250</div>
            <div className="flex items-center text-sm">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500">+0.67%</span>
              <span className="text-gray-500 ml-2">vs yesterday</span>
            </div>
          </div>

          {/* Active Orders */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Orders</h3>
            <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 text-orange-500 mr-1" />
              <span className="text-orange-500">2 pending</span>
              <span className="text-gray-500 ml-2">• 1 processing</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="border-b">
            <nav className="flex space-x-8 px-6">
              {['overview', 'trades', 'wallet', 'orders'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Quick Actions */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <button className="bg-green-50 hover:bg-green-100 border border-green-200 rounded-lg p-4 text-center transition-colors">
                      <Plus className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <div className="text-green-600 font-medium">Buy Crypto</div>
                    </button>
                    <button className="bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg p-4 text-center transition-colors">
                      <Minus className="h-6 w-6 text-red-600 mx-auto mb-2" />
                      <div className="text-red-600 font-medium">Sell Crypto</div>
                    </button>
                    <button className="bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg p-4 text-center transition-colors">
                      <Download className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <div className="text-blue-600 font-medium">Deposit</div>
                    </button>
                    <button className="bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg p-4 text-center transition-colors">
                      <Upload className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <div className="text-purple-600 font-medium">Withdraw</div>
                    </button>
                  </div>
                </div>

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {mockTrades.slice(0, 3).map((trade) => (
                      <div key={trade.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            trade.type === 'buy' ? 'bg-green-100' : 'bg-red-100'
                          }`}>
                            {trade.type === 'buy' ? (
                              <ArrowDownLeft className="h-5 w-5 text-green-600" />
                            ) : (
                              <ArrowUpRight className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">
                              {trade.type === 'buy' ? 'Bought' : 'Sold'} {trade.amount} {trade.crypto}
                            </div>
                            <div className="text-sm text-gray-500">{trade.date}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">₹{trade.total}</div>
                          <div className={`text-sm px-2 py-1 rounded-full ${
                            trade.status === 'completed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-orange-100 text-orange-700'
                          }`}>
                            {trade.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Wallet Tab */}
            {activeTab === 'wallet' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold">Portfolio</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Add Funds
                  </button>
                </div>
                <div className="space-y-4">
                  {mockWallet.map((item) => (
                    <div key={item.crypto} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="font-bold text-blue-600">{item.crypto.slice(0, 2)}</span>
                        </div>
                        <div>
                          <div className="font-semibold">{item.crypto}</div>
                          <div className="text-sm text-gray-500">{item.balance} {item.crypto}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{item.value}</div>
                        <div className={`text-sm ${
                          item.change.startsWith('+') ? 'text-green-600' : 
                          item.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {item.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Trades Tab */}
            {activeTab === 'trades' && (
              <div>
                <h3 className="text-lg font-semibold mb-6">Trade History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Transaction ID</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Total</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockTrades.map((trade) => (
                        <tr key={trade.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="font-medium text-blue-600">{trade.id}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              trade.type === 'buy' 
                                ? 'bg-green-100 text-green-700' 
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {trade.type.toUpperCase()}
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div>{trade.amount} {trade.crypto}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div>₹{trade.price}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-medium">₹{trade.total}</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className={`flex items-center gap-1 ${
                              trade.status === 'completed' ? 'text-green-600' : 'text-orange-600'
                            }`}>
                              {trade.status === 'completed' ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                <Clock className="h-4 w-4" />
                              )}
                              <span className="capitalize">{trade.status}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            {trade.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h3 className="text-lg font-semibold mb-6">Active Orders</h3>
                <div className="text-center py-12">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <div className="text-gray-500">No active orders</div>
                  <div className="text-sm text-gray-400 mb-4">Your open orders will appear here</div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Start Trading
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-green-600" />
            <h3 className="text-lg font-semibold">Security Status</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm">Email Verified</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm">KYC Completed</span>
            </div>
            <div className="flex items-center gap-3">
              <XCircle className="h-5 w-5 text-red-500" />
              <span className="text-sm">2FA Not Enabled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}