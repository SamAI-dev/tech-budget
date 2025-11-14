'use client';

import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';

export default function LandingPage() {
  const { user, logout } = useAuth();

  const stats = [
    { label: 'Total Budget', value: '$12,450', change: '+12.5%', positive: true },
    { label: 'Monthly Expenses', value: '$3,240', change: '-5.2%', positive: true },
    { label: 'Savings', value: '$8,210', change: '+18.3%', positive: true },
    { label: 'Investments', value: '$15,600', change: '+8.1%', positive: true },
  ];

  const recentTransactions = [
    { id: 1, name: 'Grocery Shopping', amount: '-$125.50', date: 'Today', category: 'Food' },
    { id: 2, name: 'Salary Deposit', amount: '+$3,500.00', date: 'Yesterday', category: 'Income' },
    { id: 3, name: 'Netflix Subscription', amount: '-$15.99', date: '2 days ago', category: 'Entertainment' },
    { id: 4, name: 'Gas Station', amount: '-$45.00', date: '3 days ago', category: 'Transport' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">Tech Budget</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                {user?.name}
              </Link>
              <button
                onClick={logout}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600">Here's your financial overview</p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <div className="flex items-center gap-1">
                <span
                  className={`text-sm font-medium ${
                    stat.positive ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-gray-500">vs last month</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Transactions */}
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.date} • {transaction.category}
                    </p>
                  </div>
                </div>
                <p
                  className={`text-lg font-bold ${
                    transaction.amount.startsWith('+')
                      ? 'text-green-600'
                      : 'text-gray-900'
                  }`}
                >
                  {transaction.amount}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <button className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-left text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div className="mb-2 text-2xl">💳</div>
            <h3 className="font-semibold mb-1">Add Transaction</h3>
            <p className="text-sm text-blue-100">Record a new expense or income</p>
          </button>
          <button className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-left text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div className="mb-2 text-2xl">📊</div>
            <h3 className="font-semibold mb-1">View Reports</h3>
            <p className="text-sm text-purple-100">Analyze your spending patterns</p>
          </button>
          <button className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-left text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div className="mb-2 text-2xl">🎯</div>
            <h3 className="font-semibold mb-1">Set Goals</h3>
            <p className="text-sm text-green-100">Create and track savings goals</p>
          </button>
        </div>
      </main>
    </div>
  );
}

