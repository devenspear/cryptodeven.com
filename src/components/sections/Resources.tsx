import { AnimateOnScroll } from '../animation/AnimateOnScroll';
import { DocumentTextIcon, PlayIcon, BookOpenIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const resources = {
  pdfs: [
    {
      title: "Bitcoin Whitepaper",
      author: "Satoshi Nakamoto",
      pages: "9 pages",
      description: "The original Bitcoin whitepaper that started it all",
      link: "#",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Crypto Myth Buster",
      author: "CryptoDeven",
      pages: "Mini-eBook",
      description: "Debunking common crypto misconceptions",
      link: "#",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Key 2025 Adoption Report",
      author: "Industry Report",
      pages: "Coming Soon",
      description: "Latest adoption trends and forecasts",
      link: "#",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ],
  videos: [
    {
      title: "Bitcoin in 5 Minutes",
      type: "Animation",
      description: "Quick animated overview of Bitcoin basics",
      link: "#",
      youtubeId: "TODO",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Jack Mallers Prague 2025 Keynote",
      type: "Conference Talk",
      description: "Latest insights from Lightning Network pioneer",
      link: "#",
      youtubeId: "TODO",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Michael Saylor on Digital Gold",
      type: "Interview",
      description: "MicroStrategy CEO explains Bitcoin as treasury asset",
      link: "#",
      youtubeId: "TODO",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v10.586l-2-2V5a1 1 0 00-1-1H8a1 1 0 00-1 1v7.586l-2 2V4a1 1 0 011-1z" />
        </svg>
      )
    }
  ],
  books: [
    {
      title: "The Bitcoin Standard",
      author: "Saifedean Ammous",
      description: "The definitive guide to Bitcoin's economic principles",
      link: "https://amazon.com/bitcoin-standard",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Mastering Bitcoin",
      author: "Andreas Antonopoulos",
      description: "Technical deep dive into Bitcoin technology",
      link: "https://amazon.com/mastering-bitcoin",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "The Internet of Money",
      author: "Andreas Antonopoulos",
      description: "Collection of talks on Bitcoin's significance",
      link: "https://amazon.com/internet-of-money",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Digital Gold",
      author: "Nathaniel Popper",
      description: "The untold story of Bitcoin's rise",
      link: "https://amazon.com/digital-gold",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "The Age of Cryptocurrency",
      author: "Paul Vigna & Michael J. Casey",
      description: "How Bitcoin and digital money are challenging the global economic order",
      link: "https://amazon.com/age-cryptocurrency",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ]
};

export default function Resources() {
  return (
    <section id="resources" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Hand-picked materials for every learning style
          </p>
        </AnimateOnScroll>

        <div className="mt-16 space-y-20">
          {/* PDFs Section */}
          <AnimateOnScroll type="fade-up" delay={100}>
            <div>
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">PDFs</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.pdfs.map((pdf, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                      <div className="text-indigo-600">
                        {pdf.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {pdf.title}
                    </h4>
                    <p className="text-indigo-600 font-medium mb-1">
                      {pdf.author} • {pdf.pages}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {pdf.description}
                    </p>
                    <a
                      href={pdf.link}
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
                    >
                      Download PDF
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Videos Section */}
          <AnimateOnScroll type="fade-up" delay={200}>
            <div>
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Videos</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.videos.map((video, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                      <div className="text-green-600">
                        {video.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {video.title}
                    </h4>
                    <p className="text-green-600 font-medium mb-1">
                      {video.type}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {video.description}
                    </p>
                    <a
                      href={video.link}
                      className="inline-flex items-center text-green-600 hover:text-green-500 font-medium transition-colors"
                    >
                      Watch Video
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Books Section */}
          <AnimateOnScroll type="fade-up" delay={300}>
            <div>
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Books</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.books.map((book, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                      <div className="text-purple-600">
                        {book.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {book.title}
                    </h4>
                    <p className="text-purple-600 font-medium mb-1">
                      {book.author}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {book.description}
                    </p>
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-600 hover:text-purple-500 font-medium transition-colors"
                    >
                      View on Amazon
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
