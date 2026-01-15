import React from 'react'

export default function Blog({ isDark }) {
  const textColor = isDark ? 'text-text-primary-dark' : 'text-text-primary'
  const subtleColor = isDark ? 'text-text-secondary-dark' : 'text-text-secondary'
  const bgColor = isDark ? 'bg-surface-dark' : 'bg-surface'
  const borderColor = isDark ? 'border-surface-dark' : 'border-surface'

  const posts = [
    {
      title: 'Getting Started',
      date: 'January 15, 2026',
      excerpt: 'Welcome to my blog! This is where I share thoughts on development, design, and technology.',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className={textColor}>Blog</h1>
        <p className={subtleColor}>
          Thoughts, projects, and learnings about software development
        </p>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`${bgColor} border ${borderColor} rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer`}
          >
            <h2 className={`text-lg font-bold ${textColor} mb-2`}>
              {post.title}
            </h2>
            <p className={`text-sm ${subtleColor} mb-3`}>{post.date}</p>
            <p className={subtleColor}>{post.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
