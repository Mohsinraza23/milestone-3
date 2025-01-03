'use client'

import React, { useState } from 'react'

export default function TrackOrderPage() {
  const [currentDate] = useState(new Date())
  const [deliveryDate] = useState(new Date(currentDate.getTime() + (5 * 24 * 60 * 60 * 1000)))
  const [progressPercentage] = useState(35)
  const remainingDays = Math.ceil((deliveryDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24))

  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12 pt-40">
          <h1 className="text-4xl font-light mb-4 ">Track Your Order</h1>
          <p className="text-zinc-400">Enter your order details below to track your purchase</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-zinc-900 rounded-xl p-8 mb-8">
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-zinc-400">Order Progress</span>
              <span className="text-[#FFA500]">{progressPercentage}%</span>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2">
              <div 
                className="bg-[#FFA500] h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
          <p className="text-sm text-zinc-400 text-center">
            Estimated delivery in {remainingDays} days
          </p>
        </div>

        {/* Order Tracking Form */}
        <div className="bg-zinc-900 rounded-xl p-8 mb-8">
          <form className="space-y-6">
            <div className="grid gap-4">
              <label htmlFor="orderNumber" className="text-sm text-zinc-400">
                Order Number
              </label>
              <input
                type="text"
                id="orderNumber"
                placeholder="Enter your order number"
                className="bg-black border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FFA500] transition-colors"
              />
            </div>
            <div className="grid gap-4">
              <label htmlFor="email" className="text-sm text-zinc-400">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="bg-black border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FFA500] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FFA500] text-black py-3 rounded-lg font-medium hover:bg-[#FFB52E] transition-colors"
            >
              Track Order
            </button>
          </form>
        </div>

        {/* Order Status Display */}
        <div className="bg-zinc-900 rounded-xl p-8">
          <div className="border-b border-zinc-800 pb-6 mb-6">
            <h2 className="text-2xl font-light mb-2">Order Status</h2>
            <div className="flex justify-between items-center">
              <p className="text-[#FFA500]">Order #12345678</p>
              <span className="bg-[#FFA500]/10 text-[#FFA500] text-sm px-3 py-1 rounded-full">
                In Progress
              </span>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-[#FFA500] rounded-full"></div>
                <div className="absolute top-4 bottom-0 left-1/2 w-0.5 h-full bg-zinc-800"></div>
              </div>
              <div>
                <h3 className="font-medium">Order Confirmed</h3>
                <p className="text-sm text-zinc-400 mt-1">{formatDate(currentDate)}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-[#FFA500] rounded-full"></div>
                <div className="absolute top-4 bottom-0 left-1/2 w-0.5 h-full bg-zinc-800"></div>
              </div>
              <div>
                <h3 className="font-medium">Processing</h3>
                <p className="text-sm text-zinc-400 mt-1">
                  {formatDate(new Date(currentDate.getTime() + (2 * 60 * 60 * 1000)))}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative">
                <div className="w-4 h-4 bg-zinc-800 rounded-full"></div>
                <div className="absolute top-4 bottom-0 left-1/2 w-0.5 h-full bg-zinc-800"></div>
              </div>
              <div>
                <h3 className="font-medium text-zinc-400">Shipped</h3>
                <p className="text-sm text-zinc-500 mt-1">Pending</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div>
                <div className="w-4 h-4 bg-zinc-800 rounded-full"></div>
              </div>
              <div>
                <h3 className="font-medium text-zinc-400">Delivered</h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Estimated: {formatDate(deliveryDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <h3 className="text-lg font-medium mb-4">Order Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-zinc-400">Shipping Address:</span>
                <span>123 Luxury Lane, Elegance City, EC 12345</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Total Amount:</span>
                <span>$285.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Payment Method:</span>
                <span>Credit Card ending in 4567</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Estimated Delivery:</span>
                <span className="text-[#FFA500]">{remainingDays} days remaining</span>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-8 pt-8 border-t border-zinc-800">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Shipping Updates</h4>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="accent-[#FFA500]" />
                  <span className="text-sm text-zinc-400">Email notifications</span>
                </label>
              </div>
              <div className="bg-black/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Need Help?</h4>
                <button className="text-sm text-[#FFA500] hover:underline">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

