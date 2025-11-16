'use client';

import { useAuth } from '../contexts/AuthContext';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const blogPostsData: Record<string, BlogPost> = {
  '10-tips-for-better-budget-management': {
    slug: '10-tips-for-better-budget-management',
    title: '10 Essential Tips for Better Budget Management in 2025',
    category: 'Budgeting',
    author: 'Sarah Johnson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: '💰',
    content: `
# 10 Essential Tips for Better Budget Management in 2025

Managing your budget effectively is the cornerstone of financial success. Whether you're just starting your financial journey or looking to refine your existing strategy, these proven tips will help you take control of your finances.

## 1. Track Every Expense

The first step to better budget management is awareness. Track every single expense, no matter how small. Use apps, spreadsheets, or a simple notebook—whatever works for you. After a month, you'll be surprised by where your money actually goes.

## 2. Follow the 50/30/20 Rule

Allocate 50% of your income to needs (housing, utilities, groceries), 30% to wants (entertainment, dining out), and 20% to savings and debt repayment. This simple framework provides structure without being overly restrictive.

## 3. Build an Emergency Fund First

Before focusing on investments or extra debt payments, build an emergency fund covering 3-6 months of expenses. This financial cushion prevents you from derailing your budget when unexpected expenses arise.

## 4. Use the Envelope System (Digitally)

Allocate specific amounts to different spending categories. Once an envelope is empty, you stop spending in that category. Modern apps can replicate this system digitally while maintaining the discipline.

## 5. Review and Adjust Monthly

Your budget isn't set in stone. Review it monthly and adjust based on your actual spending patterns and changing circumstances. A budget that doesn't reflect reality is useless.

## 6. Automate Savings

Pay yourself first by automating transfers to your savings account. Set up automatic transfers on payday so you never see the money in your checking account.

## 7. Use Zero-Based Budgeting

Give every dollar a job. At the beginning of each month, assign every dollar of income to a specific category. This ensures you're intentional with every dollar you earn.

## 8. Cut Unnecessary Subscriptions

Audit your subscriptions regularly. Cancel services you don't use frequently. Those $10-15 monthly charges add up quickly and can derail your budget.

## 9. Plan for Irregular Expenses

Set aside money monthly for annual expenses like insurance, car registration, or holiday gifts. Breaking these into monthly savings prevents budget surprises.

## 10. Celebrate Small Wins

Budgeting is a marathon, not a sprint. Celebrate when you stick to your budget for a month, when you reach a savings milestone, or when you pay off a debt. Positive reinforcement keeps you motivated.

## Conclusion

Effective budget management requires consistency, patience, and regular review. Start with these tips and adapt them to fit your lifestyle. Remember, the best budget is one you can actually stick to.

Take action today: Pick one tip and implement it this week. Small steps lead to significant financial progress.
    `,
  },
  'understanding-savings-rate': {
    slug: 'understanding-savings-rate',
    title: 'Understanding Your Savings Rate: A Complete Guide',
    category: 'Savings',
    author: 'Michael Chen',
    date: 'January 12, 2025',
    readTime: '6 min read',
    image: '📈',
    content: `
# Understanding Your Savings Rate: A Complete Guide

Your savings rate is one of the most important financial metrics you can track. It directly impacts how quickly you can achieve financial independence and build wealth.

## What is Savings Rate?

Your savings rate is the percentage of your income that you save rather than spend. It's calculated as:

**Savings Rate = (Income - Expenses) / Income × 100**

For example, if you earn $5,000 per month and spend $3,500, your savings rate is 30%.

## Why It Matters

A higher savings rate means:
- Faster wealth accumulation
- Earlier financial independence
- More financial security
- Greater investment opportunities

## How to Calculate Your Savings Rate

1. **Track Your Income**: Include all sources—salary, side income, investment returns
2. **Track Your Expenses**: All spending, including taxes
3. **Calculate**: (Income - Expenses) / Income × 100

## Improving Your Savings Rate

### Increase Income
- Ask for a raise
- Start a side hustle
- Invest in skills that increase earning potential
- Negotiate better rates for services

### Decrease Expenses
- Cut unnecessary subscriptions
- Cook at home more often
- Use cashback and rewards programs
- Negotiate bills and services
- Buy quality items that last longer

## Target Savings Rates

- **Beginner**: 10-20% is a great start
- **Intermediate**: 20-30% shows strong financial discipline
- **Advanced**: 30-50% accelerates wealth building significantly
- **Extreme**: 50%+ leads to very early financial independence

## Common Mistakes

1. **Not including all income sources**
2. **Forgetting about taxes**
3. **Not accounting for irregular expenses**
4. **Comparing to others instead of your own goals**

## Tools to Track Savings Rate

- Budgeting apps with savings rate calculators
- Spreadsheets with automated formulas
- Financial planning software
- Simple pen and paper tracking

## Conclusion

Your savings rate is a powerful tool for measuring financial progress. Focus on improving it gradually, and you'll see significant results over time. Remember, even small improvements compound into substantial wealth.
    `,
  },
  'smart-expense-tracking': {
    slug: 'smart-expense-tracking',
    title: 'Smart Expense Tracking: Tools and Techniques',
    category: 'Expenses',
    author: 'Emily Rodriguez',
    date: 'January 10, 2025',
    readTime: '7 min read',
    image: '📊',
    content: `
# Smart Expense Tracking: Tools and Techniques

Effective expense tracking is the foundation of good financial management. Modern tools and techniques make it easier than ever to understand where your money goes.

## Why Track Expenses?

Tracking expenses helps you:
- Identify spending patterns
- Find areas to cut costs
- Stay within budget
- Make informed financial decisions
- Achieve financial goals faster

## Modern Tracking Tools

### Mobile Apps
- **Budgeting Apps**: Connect to bank accounts for automatic tracking
- **Receipt Scanners**: Capture and categorize expenses instantly
- **Expense Trackers**: Manual entry with smart categorization

### Digital Methods
- **Spreadsheets**: Customizable and powerful
- **Banking Apps**: Built-in categorization features
- **Credit Card Apps**: Automatic transaction tracking

## Best Practices

1. **Track Immediately**: Don't wait—log expenses as they happen
2. **Be Specific**: Use detailed categories
3. **Review Regularly**: Weekly reviews catch issues early
4. **Set Reminders**: Use notifications to maintain the habit
5. **Make It Easy**: Choose tools that fit your lifestyle

## Categorization Strategies

### Essential Categories
- Housing
- Food (Groceries vs. Dining Out)
- Transportation
- Utilities
- Healthcare
- Personal Care
- Entertainment
- Savings/Investments

### Advanced Categorization
- Fixed vs. Variable expenses
- Needs vs. Wants
- Recurring vs. One-time
- Tax-deductible expenses

## Automation Techniques

- **Auto-categorization**: Let apps learn your patterns
- **Recurring Transactions**: Set up templates
- **Bank Integration**: Automatic import of transactions
- **Smart Rules**: Create rules for common transactions

## Analyzing Your Data

Regular analysis helps you:
- Spot trends
- Identify problem areas
- Celebrate progress
- Adjust your budget

## Common Challenges and Solutions

**Challenge**: Forgetting to track expenses
**Solution**: Set daily reminders, use automatic tracking

**Challenge**: Too many small transactions
**Solution**: Use weekly summaries, batch similar expenses

**Challenge**: Inconsistent categories
**Solution**: Create a standard category list, use autocomplete

## Conclusion

Smart expense tracking doesn't have to be complicated. Choose tools that work for you, establish a routine, and use the insights to make better financial decisions. The key is consistency—even simple tracking beats no tracking at all.
    `,
  },
  'debt-free-journey': {
    slug: 'debt-free-journey',
    title: 'The Debt-Free Journey: A Step-by-Step Plan',
    category: 'Debt Management',
    author: 'David Thompson',
    date: 'January 8, 2025',
    readTime: '10 min read',
    image: '🎯',
    content: `
# The Debt-Free Journey: A Step-by-Step Plan

Becoming debt-free is one of the most liberating financial achievements. This comprehensive guide will help you create and execute a plan to eliminate debt.

## Step 1: Assess Your Situation

### List All Debts
- Credit cards
- Personal loans
- Student loans
- Car loans
- Mortgage (if applicable)
- Any other debts

### Gather Information
For each debt, note:
- Current balance
- Interest rate
- Minimum payment
- Due date

## Step 2: Choose Your Strategy

### Debt Snowball Method
Pay off smallest debts first, regardless of interest rate. This provides psychological wins and momentum.

**Best for**: People who need motivation and quick wins

### Debt Avalanche Method
Pay off highest interest rate debts first. Mathematically optimal, saves the most money.

**Best for**: People motivated by numbers and maximum savings

## Step 3: Create Your Budget

1. **Calculate Total Income**
2. **List Essential Expenses** (housing, food, utilities)
3. **Determine Available Funds** for debt repayment
4. **Allocate Extra Payments** to chosen debt strategy

## Step 4: Increase Your Payments

### Ways to Find Extra Money
- Cut unnecessary expenses
- Increase income (side hustle, overtime)
- Sell unused items
- Use windfalls (tax refunds, bonuses)
- Negotiate lower bills

### Payment Strategy
- Pay minimums on all debts
- Put all extra money toward target debt
- Once paid off, roll payment to next debt

## Step 5: Negotiate Better Terms

- **Lower Interest Rates**: Call creditors, mention competitors
- **Payment Plans**: Request modified payment schedules
- **Balance Transfers**: Move high-interest debt to lower-rate cards
- **Debt Consolidation**: Combine multiple debts into one loan

## Step 6: Stay Motivated

### Track Progress
- Use visual charts
- Celebrate milestones
- Join support communities
- Share progress with accountability partner

### Avoid New Debt
- Use cash or debit cards
- Build emergency fund alongside debt payoff
- Address root causes of overspending

## Step 7: Build Emergency Fund

While paying off debt, build a small emergency fund ($1,000-$2,000) to avoid new debt from unexpected expenses.

## Common Mistakes to Avoid

1. **Only paying minimums**
2. **Taking on new debt**
3. **Ignoring high-interest debt**
4. **Not having an emergency fund**
5. **Giving up too early**

## Timeline Expectations

- **Credit Cards**: 1-3 years (depending on balance)
- **Student Loans**: 5-10 years (or longer)
- **Car Loans**: 3-7 years
- **Mortgage**: 15-30 years (or accelerated payoff)

## After Becoming Debt-Free

1. **Build larger emergency fund** (3-6 months expenses)
2. **Maximize retirement contributions**
3. **Invest for long-term goals**
4. **Maintain debt-free lifestyle**

## Conclusion

The debt-free journey requires commitment, discipline, and patience. Start today with Step 1—assess your situation. Every payment brings you closer to financial freedom. Remember, progress is progress, no matter how small.
    `,
  },
  'investment-basics-beginners': {
    slug: 'investment-basics-beginners',
    title: 'Investment Basics for Beginners: Start Your Wealth Journey',
    category: 'Investing',
    author: 'Lisa Park',
    date: 'January 5, 2025',
    readTime: '9 min read',
    image: '💎',
    content: `
# Investment Basics for Beginners: Start Your Wealth Journey

Investing is one of the most powerful ways to build wealth over time. This guide will help you understand the fundamentals and get started confidently.

## Why Invest?

Investing helps you:
- **Beat Inflation**: Keep your money's purchasing power
- **Build Wealth**: Grow money faster than savings accounts
- **Achieve Goals**: Fund retirement, buy a home, etc.
- **Create Passive Income**: Generate money while you sleep

## Before You Start Investing

### Prerequisites
1. **Emergency Fund**: 3-6 months of expenses saved
2. **High-Interest Debt Paid**: Credit cards, personal loans
3. **Basic Budget**: Living within your means
4. **Investment Goals**: Know what you're investing for

## Investment Basics

### Key Concepts

**Compound Interest**: Your money earns returns, and those returns earn returns. Time is your greatest ally.

**Diversification**: Don't put all eggs in one basket. Spread investments across different assets.

**Risk vs. Return**: Higher potential returns come with higher risk. Understand your risk tolerance.

**Time Horizon**: How long until you need the money? Longer horizons can handle more risk.

## Types of Investments

### Stocks
Ownership shares in companies. Higher risk, higher potential returns.

### Bonds
Loans to companies or governments. Lower risk, lower returns.

### Mutual Funds
Baskets of stocks/bonds managed by professionals. Good for diversification.

### ETFs (Exchange-Traded Funds)
Like mutual funds but trade like stocks. Low fees, easy to buy/sell.

### Index Funds
Track market indexes (S&P 500, etc.). Low fees, broad diversification.

## Getting Started

### Step 1: Choose an Account
- **401(k)**: Employer-sponsored, often with matching
- **IRA**: Individual retirement account
- **Taxable Brokerage**: For non-retirement investing

### Step 2: Open an Account
- Research brokers (Fidelity, Vanguard, Charles Schwab, etc.)
- Compare fees and features
- Open account online (usually free)

### Step 3: Start Small
- Begin with index funds or ETFs
- Invest regularly (dollar-cost averaging)
- Reinvest dividends

## Investment Strategies

### Dollar-Cost Averaging
Invest fixed amounts regularly, regardless of market conditions. Reduces timing risk.

### Buy and Hold
Purchase quality investments and hold long-term. Avoids emotional trading.

### Asset Allocation
Divide investments across stocks, bonds, and other assets based on age and goals.

## Common Beginner Mistakes

1. **Trying to time the market**
2. **Investing without emergency fund**
3. **Not diversifying**
4. **Letting emotions drive decisions**
5. **Paying high fees**
6. **Not starting early enough**

## How Much to Invest

- **Minimum**: Start with whatever you can afford
- **Target**: 15-20% of income for retirement
- **More is better**: Increase as income grows

## When to Invest

**Start now!** Time in the market beats timing the market. Even small amounts compound significantly over decades.

## Resources for Learning

- Books: "The Simple Path to Wealth", "A Random Walk Down Wall Street"
- Websites: Investopedia, Bogleheads
- Courses: Free online investment courses
- Financial advisors: For personalized guidance

## Conclusion

Investing doesn't have to be complicated. Start with index funds, invest regularly, and stay the course. The most important step is beginning—even with small amounts. Your future self will thank you.
    `,
  },
  'emergency-fund-importance': {
    slug: 'emergency-fund-importance',
    title: 'Why an Emergency Fund is Your Financial Safety Net',
    category: 'Savings',
    author: 'James Wilson',
    date: 'January 3, 2025',
    readTime: '5 min read',
    image: '🛡️',
    content: `
# Why an Emergency Fund is Your Financial Safety Net

An emergency fund is the foundation of financial security. It's your buffer against life's unexpected expenses and income disruptions.

## What is an Emergency Fund?

An emergency fund is money set aside specifically for unexpected expenses or financial emergencies. It should be:
- **Liquid**: Easily accessible when needed
- **Separate**: In a different account from regular savings
- **Untouched**: Only used for true emergencies

## Why You Need One

### Protects Against:
- Job loss
- Medical emergencies
- Car repairs
- Home repairs
- Unexpected travel
- Major appliance replacement

### Benefits:
- **Peace of Mind**: Reduces financial stress
- **Avoids Debt**: Prevents credit card debt for emergencies
- **Financial Flexibility**: Allows time to make good decisions
- **Opportunity**: Can take advantage of opportunities

## How Much Do You Need?

### General Rule
**3-6 months of essential expenses**

### Factors to Consider
- **Job Stability**: Less stable = larger fund
- **Income Sources**: Multiple sources = smaller fund needed
- **Dependents**: More people = larger fund
- **Health**: Health issues = larger fund
- **Insurance Coverage**: Better coverage = smaller fund

### Calculation
1. List essential monthly expenses (housing, food, utilities, insurance)
2. Multiply by 3-6 months
3. That's your target emergency fund

## Where to Keep It

### Best Options
- **High-Yield Savings Account**: Easy access, earns interest
- **Money Market Account**: Slightly higher interest, still accessible
- **Separate Checking Account**: If you need instant access

### Avoid
- Investment accounts (too volatile)
- Checking account (too easy to spend)
- Under the mattress (no interest, security risk)

## Building Your Emergency Fund

### Step 1: Start Small
Aim for $1,000 first. This covers most small emergencies.

### Step 2: Set Up Automatic Transfers
Pay yourself first. Automate transfers on payday.

### Step 3: Use Windfalls
Tax refunds, bonuses, gifts—direct to emergency fund.

### Step 4: Cut Expenses
Find $50-100/month to accelerate savings.

### Step 5: Increase Income
Side hustle, overtime, sell unused items.

## What Counts as an Emergency?

### True Emergencies
- Medical emergency
- Job loss
- Major car repair
- Essential home repair
- Unexpected travel for family emergency

### NOT Emergencies
- Planned expenses (holidays, birthdays)
- Sales or deals
- Vacations
- Upgrades or wants
- Investment opportunities

## Replenishing After Use

If you use your emergency fund:
1. **Replenish immediately**: Make it a priority
2. **Adjust budget**: Temporarily cut non-essentials
3. **Increase savings rate**: Until fund is restored
4. **Learn from experience**: Could it have been prevented?

## Common Mistakes

1. **Not having one at all**
2. **Keeping it too accessible** (spending it)
3. **Investing it** (needs to be liquid)
4. **Using it for non-emergencies**
5. **Not replenishing after use**

## Emergency Fund vs. Other Savings

- **Emergency Fund**: Unexpected expenses, income loss
- **Sinking Funds**: Planned expenses (car, vacation)
- **Investments**: Long-term wealth building
- **Retirement**: Future financial security

## Conclusion

An emergency fund isn't exciting, but it's essential. It's the foundation that allows you to take financial risks, pursue opportunities, and sleep well at night. Start building yours today—even $25 per week adds up to $1,300 in a year.

Your future self will thank you when an emergency strikes and you're prepared.
    `,
  },
};

export default function BlogPostPage() {
  const { user, logout } = useAuth();
  const params = useParams();
  const slug = params?.slug as string;
  const post = blogPostsData[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-600 hover:text-blue-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

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

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-4xl">
              {post.image}
            </div>
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="blog-content">
              {(() => {
                const lines = post.content.split('\n');
                const elements: JSX.Element[] = [];
                let currentList: string[] = [];
                let keyCounter = 0;

                const flushList = () => {
                  if (currentList.length > 0) {
                    elements.push(
                      <ul key={`list-${keyCounter++}`} className="list-disc list-inside space-y-2 ml-6 mb-4">
                        {currentList.map((item, idx) => (
                          <li key={idx} className="text-gray-700">
                            {item.split(/(\*\*.*?\*\*)/g).map((part, partIdx) => {
                              if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                  <strong key={partIdx} className="font-semibold text-gray-900">
                                    {part.substring(2, part.length - 2)}
                                  </strong>
                                );
                              }
                              return <span key={partIdx}>{part}</span>;
                            })}
                          </li>
                        ))}
                      </ul>
                    );
                    currentList = [];
                  }
                };

                lines.forEach((line) => {
                  const trimmed = line.trim();
                  
                  if (trimmed === '') {
                    flushList();
                    return;
                  }

                  // Headers
                  if (trimmed.startsWith('# ')) {
                    flushList();
                    elements.push(
                      <h1 key={keyCounter++} className="text-3xl font-bold text-gray-900 mt-8 mb-4 first:mt-0">
                        {trimmed.substring(2)}
                      </h1>
                    );
                  } else if (trimmed.startsWith('## ')) {
                    flushList();
                    elements.push(
                      <h2 key={keyCounter++} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                        {trimmed.substring(3)}
                      </h2>
                    );
                  } else if (trimmed.startsWith('### ')) {
                    flushList();
                    elements.push(
                      <h3 key={keyCounter++} className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                        {trimmed.substring(4)}
                      </h3>
                    );
                  } else if (trimmed.startsWith('- ')) {
                    // List item
                    currentList.push(trimmed.substring(2));
                  } else {
                    // Regular paragraph
                    flushList();
                    const parts = trimmed.split(/(\*\*.*?\*\*)/g);
                    elements.push(
                      <p key={keyCounter++} className="text-gray-700 mb-4 leading-relaxed">
                        {parts.map((part, partIdx) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return (
                              <strong key={partIdx} className="font-semibold text-gray-900">
                                {part.substring(2, part.length - 2)}
                              </strong>
                            );
                          }
                          return <span key={partIdx}>{part}</span>;
                        })}
                      </p>
                    );
                  }
                });

                flushList(); // Flush any remaining list items
                return elements;
              })()}
            </div>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Share
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2 text-white hover:bg-sky-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Tweet
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.values(blogPostsData)
              .filter(p => p.slug !== slug && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-xl hover:scale-[1.02]"
                >
                  <div className="mb-3 text-3xl">{relatedPost.image}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {relatedPost.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </div>
  );
}

