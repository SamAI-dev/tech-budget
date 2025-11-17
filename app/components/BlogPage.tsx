'use client';

import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';
import { useState } from 'react';

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: '10-tips-for-better-budget-management',
    title: '10 Essential Tips for Better Budget Management in 2025',
    excerpt: 'Discover proven strategies to take control of your finances and build a sustainable budget that works for your lifestyle.',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Budgeting',
    image: '💰',
    featured: true,
  },
  {
    id: '2',
    slug: 'understanding-savings-rate',
    title: 'Understanding Your Savings Rate: A Complete Guide',
    excerpt: 'Learn how to calculate and improve your savings rate to achieve your financial goals faster.',
    author: 'Michael Chen',
    date: 'January 12, 2025',
    readTime: '6 min read',
    category: 'Savings',
    image: '📈',
    featured: true,
  },
  {
    id: '3',
    slug: 'smart-expense-tracking',
    title: 'Smart Expense Tracking: Tools and Techniques',
    excerpt: 'Explore modern tools and techniques that make tracking your expenses effortless and insightful.',
    author: 'Emily Rodriguez',
    date: 'January 10, 2025',
    readTime: '7 min read',
    category: 'Expenses',
    image: '📊',
  },
  {
    id: '4',
    slug: 'debt-free-journey',
    title: 'The Debt-Free Journey: A Step-by-Step Plan',
    excerpt: 'A comprehensive guide to eliminating debt and building financial freedom, one step at a time.',
    author: 'David Thompson',
    date: 'January 8, 2025',
    readTime: '10 min read',
    category: 'Debt Management',
    image: '🎯',
  },
  {
    id: '5',
    slug: 'investment-basics-beginners',
    title: 'Investment Basics for Beginners: Start Your Wealth Journey',
    excerpt: 'Everything you need to know to start investing wisely, even if you\'re a complete beginner.',
    author: 'Lisa Park',
    date: 'January 5, 2025',
    readTime: '9 min read',
    category: 'Investing',
    image: '💎',
  },
  {
    id: '6',
    slug: 'emergency-fund-importance',
    title: 'Why an Emergency Fund is Your Financial Safety Net',
    excerpt: 'Learn why building an emergency fund should be your top financial priority and how to get started.',
    author: 'James Wilson',
    date: 'January 3, 2025',
    readTime: '5 min read',
    category: 'Savings',
    image: '🛡️',
  },
];

const categories = ['All', 'Budgeting', 'Savings', 'Expenses', 'Debt Management', 'Investing'];

export default function BlogPage() {
  const { user, logout } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/landing" className="flex items-center gap-3">
              <div className="flex hflex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600             <svg
                  className="h-6 w-size-6 text-white              fill="none"
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
                href="/landing"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <svg className="h-5 w-size-5="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Financial Insights & Tips</h1>
            <p className="text-xl text-blue-100 mb-8">
              Expert advice, practical tips, and actionable strategies to help you master your finances and achieve your goals.
            </p>
            <div className="flex flex-wrap gap-2">
              {categories.slice(1).map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && featuredPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex hflex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-3xl                   {post.image}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl bg-white p-6 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="mb-4 flex items-center justify-center h-32 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-5xl">
                  {post.image}
                </div>
                <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-3">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-6">
              Get the latest financial tips and insights delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


