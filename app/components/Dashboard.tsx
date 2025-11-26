'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { COLORS, spendingData, categoryData, budgetData, monthlyComparison, metrics } from './dashboardData';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="rounded-xl bg-white p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                {metric.icon}
              </div>
              <span
                className={`text-sm font-semibold ${
                  metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {metric.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{metric.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Spending Trend Line Chart */}
        <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={spendingData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Spent"
                dot={{ fill: '#3b82f6', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="budget"
                stroke="#8b5cf6"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Budget"
                dot={{ fill: '#8b5cf6', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Breakdown Bar Chart */}
        <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="amount" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Budget Allocation Pie Chart */}
        <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Allocation</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgetData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Income vs Expenses Area Chart */}
        <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Income vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyComparison}>
              <defs>
                <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="income"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorIncome)"
                name="Income"
              />
              <Area
                type="monotone"
                dataKey="expenses"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorExpenses)"
                name="Expenses"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Details Table */}
      <div className="rounded-xl bg-white p-6 shadow-md border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Details</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Percentage</th>
                <th className="text-right py-3 px-4 text-sm font-semibold text-gray-700">Progress</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((category, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{category.name}</td>
                  <td className="py-3 px-4 text-sm text-right text-gray-700">${category.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm text-right text-gray-700">{category.percentage}%</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${category.percentage}%`,
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}