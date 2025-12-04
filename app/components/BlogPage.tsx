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
  authorRole: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  views?: number;
  likes?: number;
  tags?: string[];
  trending?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: '10-tips-for-better-budget-management',
    title: '10 Essential Tips for Better Budget Management in 2025',
    excerpt: 'Discover proven strategies to take control of your finances and build a sustainable budget that works for your lifestyle. Learn how to track expenses, set realistic goals, and make informed financial decisions.',
    author: 'Sarah Johnson',
    authorRole: 'Certified Financial Planner',
    authorAvatar: 'SJ',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Budgeting',
    image: '💰',
    featured: true,
    views: 12450,
    likes: 342,
    tags: ['Budgeting', 'Personal Finance', 'Money Management', 'Tips'],
    trending: true,
  },
  {
    id: '2',
    slug: 'understanding-savings-rate',
    title: 'Understanding Your Savings Rate: A Complete Guide',
    excerpt: 'Learn how to calculate and improve your savings rate to achieve your financial goals faster. This comprehensive guide covers everything from basic calculations to advanced strategies for maximizing your savings potential.',
    author: 'Michael Chen',
    authorRole: 'Financial Analyst',
    authorAvatar: 'MC',
    date: 'January 12, 2025',
    readTime: '6 min read',
    category: 'Savings',
    image: '📈',
    featured: true,
    views: 9870,
    likes: 289,
    tags: ['Savings', 'Financial Planning', 'Wealth Building'],
    trending: true,
  },
  {
    id: '3',
    slug: 'smart-expense-tracking',
    title: 'Smart Expense Tracking: Tools and Techniques',
    excerpt: 'Explore modern tools and techniques that make tracking your expenses effortless and insightful. Discover apps, methods, and best practices that will transform how you manage your money.',
    author: 'Emily Rodriguez',
    authorRole: 'Personal Finance Expert',
    authorAvatar: 'ER',
    date: 'January 10, 2025',
    readTime: '7 min read',
    category: 'Expenses',
    image: '📊',
    views: 7560,
    likes: 198,
    tags: ['Expense Tracking', 'Apps', 'Productivity', 'Tools'],
  },
  {
    id: '4',
    slug: 'debt-free-journey',
    title: 'The Debt-Free Journey: A Step-by-Step Plan',
    excerpt: 'A comprehensive guide to eliminating debt and building financial freedom, one step at a time. Learn proven strategies like the debt snowball and avalanche methods, plus tips for staying motivated.',
    author: 'David Thompson',
    authorRole: 'Debt Counselor',
    authorAvatar: 'DT',
    date: 'January 8, 2025',
    readTime: '10 min read',
    category: 'Debt Management',
    image: '🎯',
    views: 11230,
    likes: 456,
    tags: ['Debt', 'Financial Freedom', 'Money Management'],
    trending: true,
  },
  {
    id: '5',
    slug: 'investment-basics-beginners',
    title: 'Investment Basics for Beginners: Start Your Wealth Journey',
    excerpt: 'Everything you need to know to start investing wisely, even if you\'re a complete beginner. Learn about stocks, bonds, mutual funds, and how to build a diversified portfolio that matches your risk tolerance.',
    author: 'Lisa Park',
    authorRole: 'Investment Advisor',
    authorAvatar: 'LP',
    date: 'January 5, 2025',
    readTime: '9 min read',
    category: 'Investing',
    image: '💎',
    views: 15420,
    likes: 523,
    tags: ['Investing', 'Stocks', 'Portfolio', 'Beginners'],
    trending: true,
  },
  {
    id: '6',
    slug: 'emergency-fund-importance',
    title: 'Why an Emergency Fund is Your Financial Safety Net',
    excerpt: 'Learn why building an emergency fund should be your top financial priority and how to get started. Discover how much you need, where to keep it, and strategies for building it quickly.',
    author: 'James Wilson',
    authorRole: 'Financial Educator',
    authorAvatar: 'JW',
    date: 'January 3, 2025',
    readTime: '5 min read',
    category: 'Savings',
    image: '🛡️',
    views: 6890,
    likes: 167,
    tags: ['Emergency Fund', 'Savings', 'Financial Security'],
  },
  {
    id: '7',
    slug: 'retirement-planning-millennials',
    title: 'Retirement Planning for Millennials: Start Early, Retire Rich',
    excerpt: 'Why millennials need to think about retirement now, and how to get started with 401(k)s, IRAs, and other retirement accounts. Time is your greatest asset when it comes to building wealth.',
    author: 'Sarah Johnson',
    authorRole: 'Certified Financial Planner',
    authorAvatar: 'SJ',
    date: 'December 28, 2024',
    readTime: '11 min read',
    category: 'Investing',
    image: '🏖️',
    views: 9230,
    likes: 312,
    tags: ['Retirement', '401k', 'IRA', 'Millennials'],
  },
  {
    id: '8',
    slug: 'credit-score-improvement',
    title: 'How to Improve Your Credit Score: A 30-Day Action Plan',
    excerpt: 'Practical steps you can take right now to boost your credit score. Learn about credit utilization, payment history, and other factors that impact your score, plus strategies for quick improvements.',
    author: 'Michael Chen',
    authorRole: 'Financial Analyst',
    authorAvatar: 'MC',
    date: 'December 25, 2024',
    readTime: '7 min read',
    category: 'Budgeting',
    image: '📋',
    views: 14560,
    likes: 478,
    tags: ['Credit Score', 'Credit Report', 'Financial Health'],
    trending: true,
  },
  {
    id: '9',
    slug: 'side-hustle-income',
    title: '10 Side Hustles That Can Generate $1,000+ Per Month',
    excerpt: 'Explore legitimate side hustle opportunities that can supplement your income. From freelancing to online businesses, discover ways to earn extra money while maintaining your day job.',
    author: 'Emily Rodriguez',
    authorRole: 'Personal Finance Expert',
    authorAvatar: 'ER',
    date: 'December 22, 2024',
    readTime: '9 min read',
    category: 'Budgeting',
    image: '💼',
    views: 18750,
    likes: 612,
    tags: ['Side Hustle', 'Income', 'Entrepreneurship'],
    trending: true,
  },
  {
    id: '10',
    slug: 'tax-strategies-year-end',
    title: 'Year-End Tax Strategies: Maximize Your Deductions',
    excerpt: 'Essential tax planning strategies to implement before the year ends. Learn about deductions, credits, and retirement contributions that can lower your tax bill and boost your savings.',
    author: 'David Thompson',
    authorRole: 'Debt Counselor',
    authorAvatar: 'DT',
    date: 'December 20, 2024',
    readTime: '6 min read',
    category: 'Budgeting',
    image: '📑',
    views: 10240,
    likes: 289,
    tags: ['Taxes', 'Deductions', 'Tax Planning'],
  },
  {
    id: '11',
    slug: 'real-estate-investing-basics',
    title: 'Real Estate Investing 101: Your First Property Purchase',
    excerpt: 'A beginner\'s guide to real estate investing. Learn about different investment strategies, financing options, and how to analyze potential properties. Start building passive income through real estate.',
    author: 'Lisa Park',
    authorRole: 'Investment Advisor',
    authorAvatar: 'LP',
    date: 'December 18, 2024',
    readTime: '12 min read',
    category: 'Investing',
    image: '🏠',
    views: 8760,
    likes: 234,
    tags: ['Real Estate', 'Investing', 'Passive Income'],
  },
  {
    id: '12',
    slug: 'financial-goals-setting',
    title: 'Setting and Achieving Financial Goals: A Framework',
    excerpt: 'Learn how to set SMART financial goals and create an actionable plan to achieve them. Whether it\'s buying a home, starting a business, or retiring early, this framework will guide you to success.',
    author: 'James Wilson',
    authorRole: 'Financial Educator',
    authorAvatar: 'JW',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Budgeting',
    image: '🎯',
    views: 11230,
    likes: 345,
    tags: ['Goals', 'Planning', 'Success'],
  },
];

const categories = ['All', 'Budgeting', 'Savings', 'Expenses', 'Debt Management', 'Investing'];

export default function BlogPage() {
  const { user, logout } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'views' | 'likes'>('date');

  const filteredPosts = (selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory))
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'views') return (b.views || 0) - (a.views || 0);
      if (sortBy === 'likes') return (b.likes || 0) - (a.likes || 0);
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const trendingPosts = blogPosts.filter(post => post.trending).slice(0, 3);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  const totalPosts = blogPosts.length;
  const totalViews = blogPosts.reduce((sum, post) => sum + (post.views || 0), 0);
  const totalLikes = blogPosts.reduce((sum, post) => sum + (post.likes || 0), 0);

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
                href="/landing"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Dashboard
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
        {/* Statistics Bar */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-blue-100">
                <svg className="size-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalPosts}</p>
                <p className="text-sm text-gray-600">Total Articles</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-green-100">
                <svg className="size-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalViews.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Views</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-lg bg-red-100">
                <svg className="size-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalLikes.toLocaleString()}</p>
                <p className="text-sm text-gray-600">Total Likes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Sort */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-white px-10 py-3 pl-10 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'views' | 'likes')}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="date">Latest</option>
              <option value="views">Most Views</option>
              <option value="likes">Most Likes</option>
            </select>
          </div>
        </div>

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

        {/* Trending Posts */}
        {selectedCategory === 'All' && trendingPosts.length > 0 && (
          <section className="mb-12">
            <div className="mb-6 flex items-center gap-2">
              <svg className="size-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900">Trending Now</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {trendingPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-xl bg-white p-5 shadow-md transition-all hover:shadow-xl hover:scale-[1.02] border-l-4 border-orange-500"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-orange-100 to-red-100 text-xl">
                      {post.image}
                    </div>
                    <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">
                      Trending
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{post.views?.toLocaleString()} views</span>
                    <span>•</span>
                    <span>{post.likes} likes</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

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
                    <div className="flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-3xl">
                      {post.image}
                    </div>
                    <div className="flex-1">
                      <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-2">
                        {post.category}
                      </span>
                      {post.trending && (
                        <span className="ml-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                          🔥 Trending
                        </span>
                      )}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags?.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-xs font-bold text-white">
                        {post.authorAvatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.authorRole}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        {post.views?.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
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
                <div className="mb-4 flex items-center justify-center h-32 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 text-5xl relative">
                  {post.image}
                  {post.trending && (
                    <span className="absolute top-2 right-2 rounded-full bg-orange-500 px-2 py-1 text-xs font-bold text-white">
                      🔥
                    </span>
                  )}
                </div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="mb-3 flex flex-wrap gap-1">
                  {post.tags?.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 text-xs font-bold text-white">
                      {post.authorAvatar}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">{post.author}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {post.views?.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {post.likes}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
                  <span>{post.date}</span>
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


