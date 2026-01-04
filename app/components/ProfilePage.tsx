'use client';

import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';
import Dashboard from './Dashboard';
import { useState } from 'react';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'settings' | 'security'>('overview');

  const profileStats = [
    { label: 'Total Budget', value: '$12,450', icon: '💰', change: '+12.5%', positive: true },
    { label: 'Active Goals', value: '3', icon: '🎯', change: '2 new', positive: true },
    { label: 'Transactions', value: '127', icon: '📝', change: '+23 this month', positive: true },
    { label: 'Categories', value: '8', icon: '📂', change: 'Active', positive: true },
  ];

  const accountInfo = [
    { label: 'Member Since', value: 'January 2024', icon: '📅' },
    { label: 'Account Type', value: 'Premium', icon: '⭐' },
    { label: 'Last Login', value: 'Today at 2:30 PM', icon: '🔐' },
    { label: 'Email Verified', value: 'Yes', icon: '✓' },
  ];

  const settings = [
    { 
      name: 'Account Settings', 
      icon: '⚙️', 
      description: 'Manage your account preferences, profile information, and personal details',
      badge: null
    },
    { 
      name: 'Notifications', 
      icon: '🔔', 
      description: 'Configure email, push, and SMS notification settings',
      badge: '3 new'
    },
    { 
      name: 'Privacy & Security', 
      icon: '🔒', 
      description: 'Control your privacy settings, password, and two-factor authentication',
      badge: null
    },
    { 
      name: 'Export Data', 
      icon: '📥', 
      description: 'Download your financial data in CSV, PDF, or JSON format',
      badge: null
    },
    {
      name: 'Billing & Subscription',
      icon: '💳',
      description: 'Manage your subscription plan, payment methods, and billing history',
      badge: 'Premium'
    },
    {
      name: 'Preferences',
      icon: '🎨',
      description: 'Customize your dashboard, currency, date format, and language',
      badge: null
    },
  ];

  const recentActivity = [
    { action: 'Updated profile picture', time: '2 hours ago', icon: '📸' },
    { action: 'Changed password', time: '1 day ago', icon: '🔑' },
    { action: 'Exported transaction data', time: '3 days ago', icon: '📥' },
    { action: 'Added new budget category', time: '5 days ago', icon: '➕' },
    { action: 'Completed financial goal', time: '1 week ago', icon: '🎯' },
  ];

  const achievements = [
    { name: 'Budget Master', description: 'Maintained budget for 3 months', icon: '🏆', unlocked: true },
    { name: 'Saver Pro', description: 'Saved $5,000+ this year', icon: '💎', unlocked: true },
    { name: 'Goal Achiever', description: 'Completed 5 financial goals', icon: '🎯', unlocked: true },
    { name: 'Transaction Tracker', description: 'Logged 100+ transactions', icon: '📊', unlocked: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/landing" className="flex items-center gap-3">
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
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/landing"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Dashboard
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
        {/* Profile Header */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
            <div className="relative">
              <div className="flex size-28 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-4xl font-bold text-white shadow-lg border-4 border-white/30">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <button className="absolute bottom-0 right-0 flex size-10 items-center justify-center rounded-full bg-white border-2 border-blue-600 shadow-lg hover:bg-blue-50 transition-colors">
                <svg className="size-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-4xl font-bold mb-2">{user?.name}</h1>
              <p className="text-blue-100 mb-4 text-lg">{user?.email}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold border border-white/30">
                  ⭐ Premium Member
                </span>
                <span className="rounded-full bg-green-500/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold border border-green-300/30">
                  ✓ Verified Account
                </span>
                <span className="rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold border border-white/30">
                  🏆 Level 5 User
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profileStats.map((stat, index) => (
            <div
              key={index}
              className="rounded-xl bg-white p-5 shadow-md text-center transition-transform hover:scale-105 border-l-4 border-blue-500"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-xs text-gray-600 mb-2">{stat.label}</p>
              <p className={`text-xs font-medium ${
                stat.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2 border-b border-gray-200">
          {(['overview', 'settings', 'security'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors border-b-2 ${
                activeTab === tab
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Account Information */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Account Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {accountInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
                    <div className="text-2xl">{info.icon}</div>
                    <div>
                      <p className="text-sm text-gray-600">{info.label}</p>
                      <p className="font-semibold text-gray-900">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">{activity.icon}</div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      achievement.unlocked
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900">{achievement.name}</p>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                      {achievement.unlocked && (
                        <span className="text-yellow-500">✓</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Section */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Financial Dashboard</h2>
                <p className="text-gray-600 mt-1">Comprehensive overview of your financial metrics and trends</p>
              </div>
              <Dashboard />
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Settings</h2>
            <div className="space-y-3">
              {settings.map((setting, index) => (
                <button
                  key={index}
                  className="w-full rounded-lg border border-gray-200 p-4 text-left transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-2xl">{setting.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{setting.name}</h3>
                        {setting.badge && (
                          <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-700">
                            {setting.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <svg
                      className="size-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Security Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                  <div>
                    <h3 className="font-semibold text-gray-900">Password</h3>
                    <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                  </div>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                    Change
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                  <div>
                    <h3 className="font-semibold text-gray-900">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                    Enable
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200">
                  <div>
                    <h3 className="font-semibold text-gray-900">Active Sessions</h3>
                    <p className="text-sm text-gray-600">2 devices currently logged in</p>
                  </div>
                  <button className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Account Actions */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Account Actions</h2>
          <div className="space-y-3">
            <button className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-left font-medium text-red-700 transition-colors hover:bg-red-100">
              Delete Account
            </button>
            <Link
              href="/landing"
              className="block w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-center font-medium text-gray-700 transition-colors hover:bg-gray-100"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
