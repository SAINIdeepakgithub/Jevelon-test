import axios from 'axios';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  url: string;
  source: string;
  featured?: boolean;
}

class NewsService {
  private apiKey = '46b52fbe2af942349ef8789253545bf1'; // You'll need to get a free API key from https://newsapi.org/
  private baseUrl = 'https://newsapi.org/v2';

  async fetchTechNews(): Promise<NewsArticle[]> {
    try {
      // More specific technology-focused query to ensure we only get tech news
      const response = await axios.get(`${this.baseUrl}/everything`, {
        params: {
          q: '(technology OR software OR programming OR web development OR mobile development OR artificial intelligence OR AI OR machine learning OR cloud computing OR DevOps OR cybersecurity OR blockchain OR data science OR software engineering) AND NOT (politics OR sports OR entertainment OR celebrity OR fashion OR food OR travel)',
          language: 'en',
          sortBy: 'publishedAt',
          pageSize: 30, // Increased to have more articles to filter from
          apiKey: this.apiKey
        }
      });

      // Filter articles to ensure they are truly technology-related
      const techArticles = response.data.articles.filter((article: any) => 
        this.isTechnologyArticle(article.title, article.description, article.content)
      );

      return this.transformNewsData(techArticles.slice(0, 20)); // Return top 20 tech articles
    } catch (error) {
      console.error('Error fetching tech news:', error);
      return this.getMockTechNews(); // Fallback to mock data if API fails
    }
  }

  private transformNewsData(articles: any[]): NewsArticle[] {
    return articles.map((article, index) => ({
      id: index.toString(),
      title: article.title,
      excerpt: article.description || article.content?.substring(0, 150) + '...' || 'No description available',
      category: this.categorizeArticle(article.title, article.description),
      date: this.formatDate(article.publishedAt),
      readTime: this.calculateReadTime(article.content || article.description),
      image: article.urlToImage || 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
      url: article.url,
      source: article.source.name,
      featured: index === 0 // First article is featured
    }));
  }

  private isTechnologyArticle(title: string, description: string, content: string): boolean {
    const text = (title + ' ' + description + ' ' + content).toLowerCase();
    
    // Technology-related keywords
    const techKeywords = [
      'technology', 'software', 'programming', 'development', 'coding', 'computer',
      'web', 'mobile', 'app', 'application', 'artificial intelligence', 'ai', 'machine learning',
      'cloud', 'aws', 'azure', 'google cloud', 'devops', 'cybersecurity', 'blockchain',
      'data science', 'database', 'api', 'framework', 'library', 'algorithm', 'code',
      'frontend', 'backend', 'fullstack', 'react', 'angular', 'vue', 'node', 'python',
      'javascript', 'typescript', 'java', 'c++', 'c#', 'php', 'ruby', 'go', 'rust',
      'docker', 'kubernetes', 'git', 'github', 'gitlab', 'deployment', 'ci/cd',
      'microservices', 'serverless', 'saas', 'startup', 'tech', 'digital', 'innovation',
      'automation', 'robotics', 'iot', 'internet of things', 'virtual reality', 'vr',
      'augmented reality', 'ar', 'big data', 'analytics', 'machine learning', 'deep learning',
      'neural network', 'algorithm', 'open source', 'open-source', 'startup', 'tech company'
    ];
    
    // Non-technology keywords to exclude
    const nonTechKeywords = [
      'politics', 'political', 'election', 'president', 'government', 'congress',
      'sports', 'football', 'basketball', 'baseball', 'soccer', 'tennis', 'olympics',
      'entertainment', 'celebrity', 'movie', 'film', 'music', 'actor', 'actress',
      'fashion', 'clothing', 'style', 'beauty', 'cosmetics', 'makeup',
      'food', 'restaurant', 'cooking', 'recipe', 'chef', 'dining',
      'travel', 'tourism', 'vacation', 'hotel', 'airline', 'destination',
      'health', 'medical', 'hospital', 'doctor', 'patient', 'disease',
      'finance', 'banking', 'investment', 'stock', 'market', 'economy'
    ];
    
    // Check if article contains technology keywords
    const hasTechKeywords = techKeywords.some(keyword => text.includes(keyword));
    
    // Check if article contains non-technology keywords (to exclude)
    const hasNonTechKeywords = nonTechKeywords.some(keyword => text.includes(keyword));
    
    // Article is technology-related if it has tech keywords and doesn't have non-tech keywords
    return hasTechKeywords && !hasNonTechKeywords;
  }

  private categorizeArticle(title: string, description: string): string {
    const text = (title + ' ' + description).toLowerCase();
    
    if (text.includes('web') || text.includes('frontend') || text.includes('backend')) {
      return 'Web Development';
    } else if (text.includes('mobile') || text.includes('app') || text.includes('ios') || text.includes('android')) {
      return 'App Development';
    } else if (text.includes('cloud') || text.includes('aws') || text.includes('azure') || text.includes('google cloud')) {
      return 'Cloud Services';
    } else if (text.includes('ai') || text.includes('artificial intelligence') || text.includes('machine learning')) {
      return 'Technology';
    } else if (text.includes('devops') || text.includes('ci/cd') || text.includes('deployment')) {
      return 'DevOps';
    } else {
      return 'Technology';
    }
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  private calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const words = content?.split(' ').length || 0;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }

  private getMockTechNews(): NewsArticle[] {
    return [
      {
        id: '1',
        title: 'OpenAI Releases GPT-5: Major Improvements in AI Capabilities',
        excerpt: 'OpenAI has announced the release of GPT-5, featuring significant improvements in reasoning, coding, and creative capabilities. The new model shows enhanced performance across multiple benchmarks.',
        category: 'Technology',
        date: 'Dec 16, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
        url: 'https://example.com/gpt5-release',
        source: 'TechCrunch',
        featured: true
      },
      {
        id: '2',
        title: 'React 19 Beta Released with Concurrent Features',
        excerpt: 'The React team has released React 19 beta, introducing new concurrent features, improved performance, and better developer experience. Key highlights include automatic batching and new hooks.',
        category: 'Web Development',
        date: 'Dec 15, 2024',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
        url: 'https://example.com/react19-beta',
        source: 'React Blog'
      },
      {
        id: '3',
        title: 'Google Cloud Introduces New AI-Powered Development Tools',
        excerpt: 'Google Cloud has launched a suite of AI-powered development tools designed to streamline the software development process. The tools include code generation, testing automation, and deployment optimization.',
        category: 'Cloud Services',
        date: 'Dec 14, 2024',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
        url: 'https://example.com/google-cloud-ai-tools',
        source: 'Google Cloud Blog'
      },
      {
        id: '4',
        title: 'Flutter 4.0 Brings Desktop and Web Improvements',
        excerpt: 'Flutter 4.0 has been released with major improvements for desktop and web development. The update includes better performance, new widgets, and enhanced platform support.',
        category: 'App Development',
        date: 'Dec 13, 2024',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop',
        url: 'https://example.com/flutter-4-release',
        source: 'Flutter Blog'
      },
      {
        id: '5',
        title: 'Microsoft Azure DevOps Gets Major Security Updates',
        excerpt: 'Microsoft has announced significant security updates to Azure DevOps, including enhanced authentication, improved access controls, and new compliance features for enterprise users.',
        category: 'DevOps',
        date: 'Dec 12, 2024',
        readTime: '3 min read',
        image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop',
        url: 'https://example.com/azure-devops-security',
        source: 'Microsoft Azure Blog'
      },
      {
        id: '6',
        title: 'TypeScript 5.3 Released with Performance Improvements',
        excerpt: 'TypeScript 5.3 has been released with significant performance improvements, better type inference, and new language features. The update focuses on developer productivity and code quality.',
        category: 'Web Development',
        date: 'Dec 11, 2024',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
        url: 'https://example.com/typescript-5-3',
        source: 'TypeScript Blog'
      },
      {
        id: '7',
        title: 'Docker Announces New Container Security Features',
        excerpt: 'Docker has unveiled enhanced security features for containerized applications, including improved vulnerability scanning, runtime protection, and compliance monitoring tools.',
        category: 'DevOps',
        date: 'Dec 10, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop',
        url: 'https://example.com/docker-security',
        source: 'Docker Blog'
      },
      {
        id: '8',
        title: 'Next.js 15 Introduces App Router Improvements',
        excerpt: 'Next.js 15 brings significant improvements to the App Router, including better performance, enhanced developer experience, and new features for building modern web applications.',
        category: 'Web Development',
        date: 'Dec 9, 2024',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
        url: 'https://example.com/nextjs-15',
        source: 'Vercel Blog'
      },
      {
        id: '9',
        title: 'AWS Lambda Introduces Custom Runtime Support',
        excerpt: 'Amazon Web Services has announced enhanced custom runtime support for Lambda functions, enabling developers to use any programming language or framework for serverless applications.',
        category: 'Cloud Services',
        date: 'Dec 8, 2024',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
        url: 'https://example.com/aws-lambda-runtime',
        source: 'AWS Blog'
      },
      {
        id: '10',
        title: 'GitHub Copilot Gets Advanced Code Generation Features',
        excerpt: 'GitHub has released new features for Copilot, including advanced code generation, better context understanding, and improved integration with popular IDEs and development tools.',
        category: 'Technology',
        date: 'Dec 7, 2024',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
        url: 'https://example.com/github-copilot-features',
        source: 'GitHub Blog'
      }
    ];
  }
}

export const newsService = new NewsService(); 