import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, TrendingUp, Zap, Users } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business Automation',
      excerpt:
        "Discover how artificial intelligence is revolutionizing business processes and what it means for your company's growth strategy.",
      author: 'Sundar',
      date: 'March 15, 2024',
      category: 'AI Automation',
      readTime: '5 min read',
      image: '🤖',
      featured: true,
    },
    {
      id: 2,
      title: 'Digital Marketing Trends to Watch in 2024',
      excerpt:
        'Stay ahead of the curve with the latest digital marketing trends that are shaping the industry this year.',
      author: 'Marketing Team',
      date: 'March 12, 2024',
      category: 'Digital Marketing',
      readTime: '7 min read',
      image: '📊',
      featured: false,
    },
    {
      id: 3,
      title: 'How SaaS Solutions Can Transform Your Business',
      excerpt:
        'Learn about the benefits of Software as a Service and how it can streamline your operations while reducing costs.',
      author: 'Tech Team',
      date: 'March 10, 2024',
      category: 'SaaS',
      readTime: '6 min read',
      image: '☁️',
      featured: false,
    },
    {
      id: 4,
      title: 'Lead Generation Strategies That Actually Work',
      excerpt:
        'Proven strategies and tactics to generate high-quality leads that convert into loyal customers.',
      author: 'Sales Team',
      date: 'March 8, 2024',
      category: 'Lead Generation',
      readTime: '8 min read',
      image: '🎯',
      featured: false,
    },
    {
      id: 5,
      title: 'The Power of Automation in Modern Business',
      excerpt:
        'Explore how business automation can improve efficiency, reduce errors, and free up time for strategic activities.',
      author: 'Sundar',
      date: 'March 5, 2024',
      category: 'Business Automation',
      readTime: '5 min read',
      image: '⚙️',
      featured: false,
    },
    {
      id: 6,
      title: 'Building a Strong Digital Presence in 2024',
      excerpt:
        'Essential steps to establish and maintain a powerful digital presence that attracts and retains customers.',
      author: 'Digital Team',
      date: 'March 3, 2024',
      category: 'Digital Marketing',
      readTime: '9 min read',
      image: '🌐',
      featured: false,
    },
  ];

  const categories = [
    { name: 'All', icon: TrendingUp, count: blogPosts.length },
    {
      name: 'AI Automation',
      icon: Zap,
      count: blogPosts.filter((post) => post.category === 'AI Automation').length,
    },
    {
      name: 'Digital Marketing',
      icon: Users,
      count: blogPosts.filter((post) => post.category === 'Digital Marketing').length,
    },
    {
      name: 'SaaS',
      icon: TrendingUp,
      count: blogPosts.filter((post) => post.category === 'SaaS').length,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/5 to-background">
      {/* Hero Section */}
      {/* Hero Section */}
{/* Hero Section */}
{/* Hero Section */}
<section className="relative py-28 overflow-hidden bg-gradient-to-r from-blue-500 to-green-400 text-white">
  {/* Subtle Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5"></div>
  {/* Light Grid Overlay */}
  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-6">Our <span className="text-white">Blog</span></h1>
      <p className="text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
        Stay updated with the latest insights, trends, and expert advice in digital marketing, 
        AI automation, and business growth strategies.
      </p>
    </div>
  </div>
</section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to our newsletter for the latest insights and updates.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                    />
                    <button className="w-full flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg shadow-md hover:scale-105 transition-all">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow hover:shadow-lg transition-all duration-300">
                    <div className="p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-4xl">{featuredPost.image}</div>
                        <div>
                          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{featuredPost.date}</span>
                            </div>
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {featuredPost.title}
                      </h2>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>

                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
                      >
                        Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-3xl">{post.image}</div>
                        <span className="text-xs bg-secondary px-2 py-1 rounded-full font-medium">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-3 h-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>

                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-primary text-sm font-medium hover:text-accent transition-colors group-hover:translate-x-1 transform duration-200"
                      >
                        Read More <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button className="min-w-[180px] flex items-center justify-center px-6 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg shadow-md hover:scale-105 transition-all">
                  Load More Articles
                </button>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto text-muted-foreground">
            Get expert advice and proven strategies to accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="min-w-[180px] flex items-center justify-center px-6 py-3 
                        bg-gradient-to-r from-blue-500 to-green-400 text-white 
                        rounded-lg shadow-md hover:scale-105 transition-all"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Blog;
