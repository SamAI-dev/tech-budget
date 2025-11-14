'use client';

import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';
import Dashboard from './Dashboard';

export default function ProfilePage() {
  const { user, logout } = useAuth();

  const profileStats = [
    { label: 'Total Budget', value: '$12,450', icon: '💰' },
    { label: 'Active Goals', value: '3', icon: '🎯' },
    { label: 'Transactions', value: '127', icon: '📝' },
    { label: 'Categories', value: '8', icon: '📂' },
  ];

  const settings = [
    { name: 'Account Settings', icon: '⚙️', description: 'Manage your account preferences' },
    { name: 'Notifications', icon: '🔔', description: 'Configure notification settings' },
    { name: 'Privacy & Security', icon: '🔒', description: 'Control your privacy settings' },
    { name: 'Export Data', icon: '📥', description: 'Download your financial data' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/landing" className="flex items-center gap-3">
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
            </Link>
            <button
              onClick={logout}
              className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="mb-8 rounded-2xl bg-white p-8 shadow-lg">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-3xl font-bold text-white shadow-lg">
                {user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-200 shadow-md hover:bg-gray-50 transition-colors">
                <svg className="h-4 w-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{user?.name}</h1>
              <p className="text-gray-600 mb-4">{user?.email}</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  Premium Member
                </span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Verified
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
              className="rounded-xl bg-white p-4 shadow-md text-center transition-transform hover:scale-105"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-lg font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Section */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Financial Dashboard</h2>
            <p className="text-gray-600 mt-1">Comprehensive overview of your financial metrics and trends</p>
          </div>
          <Dashboard />
        </div>

        {/* Settings Section */}
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
                    <h3 className="font-semibold text-gray-900">{setting.name}</h3>
                    <p className="text-sm text-gray-600">{setting.description}</p>
                  </div>
                  <svg
                    className="h-5 w-5 text-gray-400"
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

