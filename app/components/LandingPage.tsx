'use client';

import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  const { user, logout } = useAuth();
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('month');

  const stats = [
    { 
      label: 'Total Budget', 
      value: '$12,450', 
      change: '+12.5%', 
      positive: true,
      icon: '💰',
      description: 'Available this month'
    },
    { 
      label: 'Monthly Expenses', 
      value: '$3,240', 
      change: '-5.2%', 
      positive: true,
      icon: '💸',
      description: '26% of budget used'
    },
    { 
      label: 'Savings', 
      value: '$8,210', 
      change: '+18.3%', 
      positive: true,
      icon: '🏦',
      description: '66% savings rate'
    },
    { 
      label: 'Investments', 
      value: '$15,600', 
      change: '+8.1%', 
      positive: true,
      icon: '📈',
      description: '+$1,200 this month'
    },
  ];

  const spendingByCategory = [
    { category: 'Food & Dining', amount: 1250, percentage: 38.6, color: 'bg-blue-500', icon: '🍔' },
    { category: 'Transportation', amount: 680, percentage: 21.0, color: 'bg-green-500', icon: '🚗' },
    { category: 'Shopping', amount: 520, percentage: 16.0, color: 'bg-purple-500', icon: '🛍️' },
    { category: 'Entertainment', amount: 340, percentage: 10.5, color: 'bg-pink-500', icon: '🎬' },
    { category: 'Bills & Utilities', amount: 280, percentage: 8.6, color: 'bg-orange-500', icon: '💡' },
    { category: 'Other', amount: 170, percentage: 5.3, color: 'bg-gray-500', icon: '📦' },
  ];

  const recentTransactions = [
    { 
      id: 1, 
      name: 'Grocery Shopping', 
      amount: '-$125.50', 
      date: 'Today', 
      category: 'Food',
      icon: '🛒',
      time: '2:30 PM'
    },
    { 
      id: 2, 
      name: 'Salary Deposit', 
      amount: '+$3,500.00', 
      date: 'Yesterday', 
      category: 'Income',
      icon: '💵',
      time: '9:00 AM'
    },
    { 
      id: 3, 
      name: 'Netflix Subscription', 
      amount: '-$15.99', 
      date: '2 days ago', 
      category: 'Entertainment',
      icon: '📺',
      time: 'Auto-paid'
    },
    { 
      id: 4, 
      name: 'Gas Station', 
      amount: '-$45.00', 
      date: '3 days ago', 
      category: 'Transport',
      icon: '⛽',
      time: '4:15 PM'
    },
    {
      id: 5,
      name: 'Coffee Shop',
      amount: '-$8.50',
      date: '3 days ago',
      category: 'Food',
      icon: '☕',
      time: '10:20 AM'
    },
    {
      id: 6,
      name: 'Gym Membership',
      amount: '-$29.99',
      date: '4 days ago',
      category: 'Health',
      icon: '💪',
      time: 'Auto-paid'
    },
  ];

  const financialGoals = [
    { 
      name: 'Emergency Fund', 
      current: 8200, 
      target: 10000, 
      deadline: 'June 2025',
      icon: '🛡️',
      color: 'bg-blue-500'
    },
    { 
      name: 'Vacation Fund', 
      current: 3200, 
      target: 5000, 
      deadline: 'August 2025',
      icon: '✈️',
      color: 'bg-green-500'
    },
    { 
      name: 'Home Down Payment', 
      current: 18500, 
      target: 50000, 
      deadline: 'December 2026',
      icon: '🏠',
      color: 'bg-purple-500'
    },
  ];

  const monthlyTrend = [
    { month: 'Jan', income: 3500, expenses: 3200 },
    { month: 'Feb', income: 3500, expenses: 3100 },
    { month: 'Mar', income: 3500, expenses: 3240 },
    { month: 'Apr', income: 3800, expenses: 3150 },
  ];

  const totalExpenses = spendingByCategory.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
                <svg
                  className="size-6 text-white"
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
                href="/blog"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name?.split(' ')[0]}! 👋
            </h1>
            <p className="text-gray-600">Here's your comprehensive financial overview</p>
          </div>
          <div className="flex gap-2">
            {(['week', 'month', 'year'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  selectedPeriod === period
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl border-l-4 border-blue-500"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{stat.icon}</div>
                <div className={`rounded-full px-2 py-1 text-xs font-semibold ${
                  stat.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {stat.change}
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Spending by Category */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Spending by Category</h2>
                <p className="text-sm text-gray-600 mt-1">Total: ${totalExpenses.toLocaleString()}</p>
              </div>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                View Details
              </button>
            </div>
            <div className="space-y-4">
              {spendingByCategory.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium text-gray-900">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${item.amount.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{item.percentage}%</p>
                    </div>
                  </div>
                  <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                    <div
                      className={`h-full ${item.color} transition-all duration-500`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Financial Goals */}
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Financial Goals</h2>
              <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                + Add Goal
              </button>
            </div>
            <div className="space-y-4">
              {financialGoals.map((goal, index) => {
                const progress = (goal.current / goal.target) * 100;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{goal.icon}</span>
                        <span className="font-medium text-gray-900 text-sm">{goal.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
                      <div
                        className={`h-full ${goal.color} transition-all duration-500`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">
                        ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                      <span className="text-gray-500">{goal.deadline}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Monthly Trend Chart */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Monthly Trend</h2>
              <p className="text-sm text-gray-600 mt-1">Income vs Expenses</p>
            </div>
          </div>
          <div className="flex items-end justify-between gap-4 h-48">
            {monthlyTrend.map((data, index) => {
              const maxValue = Math.max(...monthlyTrend.map(d => Math.max(d.income, d.expenses)));
              const incomeHeight = (data.income / maxValue) * 100;
              const expenseHeight = (data.expenses / maxValue) * 100;
              
              return (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex items-end justify-center gap-1 h-40">
                    <div
                      className="w-full bg-green-500 rounded-t transition-all hover:opacity-80"
                      style={{ height: `${incomeHeight}%` }}
                      title={`Income: $${data.income}`}
                    ></div>
                    <div
                      className="w-full bg-red-500 rounded-t transition-all hover:opacity-80"
                      style={{ height: `${expenseHeight}%` }}
                      title={`Expenses: $${data.expenses}`}
                    ></div>
                  </div>
                  <span className="text-xs font-medium text-gray-600">{data.month}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-gray-600">Income</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500"></div>
              <span className="text-xs text-gray-600">Expenses</span>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg border border-gray-100 p-4 hover:bg-gray-50 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-xl">
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{transaction.name}</p>
                    <p className="text-sm text-gray-500">
                      {transaction.date} • {transaction.category} • {transaction.time}
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <button className="rounded-xl bg-gradient-to-r from-orange-600 to-red-600 p-6 text-left text-white shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            <div className="mb-2 text-2xl">📈</div>
            <h3 className="font-semibold mb-1">Investments</h3>
            <p className="text-sm text-orange-100">Manage your investment portfolio</p>
          </button>
        </div>
      </main>
    </div>
  );
}
