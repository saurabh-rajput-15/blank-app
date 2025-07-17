'use client'

import { useState } from 'react'
import { 
  ArrowLeft, 
  Star, 
  Shield
} from 'lucide-react'

type OrderType = {
  id: number
  user: string
  price: string
  amount: string
  completion: string
  time: string
}

export default function TradePage() {
  const [orderType, setOrderType] = useState('buy')
  const [amount, setAmount] = useState('')
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null)
  const [showOrderDetails, setShowOrderDetails] = useState(false)



  const mockOrderBook = [
    { id: 1, user: "TraderPro", price: "85.50", amount: "1,00,000", completion: "95%", time: "~ 10 mins" },
    { id: 2, user: "CoinMaster", price: "85.45", amount: "2,50,000", completion: "98%", time: "~ 8 mins" },
    { id: 3, user: "BitExchange", price: "85.40", amount: "75,000", completion: "92%", time: "~ 15 mins" },
    { id: 4, user: "CryptoLord", price: "85.35", amount: "5,00,000", completion: "99%", time: "~ 5 mins" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TradeP2P
              </div>
            </div>
            <div className="text-lg font-semibold">P2P Trading</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Book */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">USDT/INR Orders</h2>
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button 
                    onClick={() => setOrderType('buy')}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      orderType === 'buy' 
                        ? 'bg-green-500 text-white' 
                        : 'text-gray-600 hover:text-green-600'
                    }`}
                  >
                    Buy USDT
                  </button>
                  <button 
                    onClick={() => setOrderType('sell')}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      orderType === 'sell' 
                        ? 'bg-red-500 text-white' 
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    Sell USDT
                  </button>
                </div>
              </div>

              {/* Order List */}
              <div className="space-y-4">
                {mockOrderBook.map((order) => (
                  <div 
                    key={order.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 cursor-pointer transition-colors"
                    onClick={() => {
                      setSelectedOrder(order)
                      setShowOrderDetails(true)
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="font-semibold text-lg">{order.user}</div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{order.completion}</span>
                          </div>
                          <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                            Online
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                          <div>
                            <div className="font-medium">Price</div>
                            <div className="text-lg font-bold text-gray-900">₹{order.price}</div>
                          </div>
                          <div>
                            <div className="font-medium">Available</div>
                            <div>₹{order.amount}</div>
                          </div>
                          <div>
                            <div className="font-medium">Time Limit</div>
                            <div>{order.time}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className={`px-6 py-2 rounded-lg font-medium ${
                          orderType === 'buy'
                            ? 'bg-green-500 text-white hover:bg-green-600'
                            : 'bg-red-500 text-white hover:bg-red-600'
                        }`}>
                          {orderType === 'buy' ? 'Buy' : 'Sell'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trade Panel */}
          <div className="space-y-6">
            {/* Quick Trade */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Quick Trade</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Amount (INR)
                  </label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between text-sm">
                    <span>You will receive:</span>
                    <span className="font-semibold">
                      {amount ? (parseFloat(amount) / 85.45).toFixed(4) : '0.0000'} USDT
                    </span>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Find Best Rate
                </button>
              </div>
            </div>

            {/* Market Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Market Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Buy Price:</span>
                  <span className="font-semibold text-green-600">₹85.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Best Sell Price:</span>
                  <span className="font-semibold text-red-600">₹85.35</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">24h Volume:</span>
                  <span className="font-semibold">₹45.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Orders:</span>
                  <span className="font-semibold">1,247</span>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Security Tips</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Only trade with verified users</li>
                    <li>• Never share your account credentials</li>
                    <li>• Use escrow protection for all trades</li>
                    <li>• Report suspicious activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      {showOrderDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold">Order Details</h3>
              <button 
                onClick={() => setShowOrderDetails(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {selectedOrder && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">
                      {selectedOrder.user.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{selectedOrder.user}</div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span>{selectedOrder.completion}</span>
                      <span>•</span>
                      <span>{selectedOrder.time}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Price</div>
                      <div className="font-semibold">₹{selectedOrder.price}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Available</div>
                      <div className="font-semibold">₹{selectedOrder.amount}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600 mb-2">Payment Methods</div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">UPI</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">Bank Transfer</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button 
                    onClick={() => setShowOrderDetails(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
                    Start Trade
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}