import Image from 'next/image';
import { AnimateOnScroll } from '../animation/AnimateOnScroll';

const resources = {
  videos: [
    {
      title: '21 Ways To Wealth - Bitcoin 2025 Keynote Speech',
      creator: 'Michael Saylor',
      duration: '~45 min',
      description: 'Saylor outlines 21 principles linking wealth-building to Bitcoin adoption and monetary clarity.',
      link: 'https://www.youtube.com/watch?v=reVebuAf_Cs',
      thumbnail: '/MIchaelSaylor.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Jack Mallers Delivers The BEST Bitcoin Explanation of ALL TIME!',
      creator: 'Jack Mallers',
      duration: '~30 min',
      description: 'Mallers breaks down Bitcoin\'s monetary properties, Lightning Network insights, and why Bitcoin matters now.',
      link: 'https://www.youtube.com/watch?v=Pef22g53zsg',
      thumbnail: '/JackMallers.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Bitcoin and the Beast (Tuttle Twins Episode)',
      creator: 'Tuttle Twins',
      duration: '~25 min',
      description: 'A kid-friendly animated episode that explains Bitcoin vs fiat through storytelling and economics.',
      link: 'https://www.youtube.com/watch?v=BL5vUVQvmX4',
      thumbnail: '/TuttleTwins.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10l1 1v16l-1 1H6l-1-1V5l1-1z" />
        </svg>
      )
    },
    {
      title: 'The Greatest Bitcoin Explanation of ALL TIME (in Under 10 Minutes)',
      creator: 'Peter Van Valkenburgh (Coin Center)',
      duration: '~9 min',
      description: 'A distilled, no-fluff overview of Bitcoin, covering scarcity, sound money, and why it\'s important.',
      link: 'https://www.youtube.com/watch?v=5JDrK7sP3gA',
      thumbnail: '/Peter Van Valkenburgh .jpg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ],
  books: [
    {
      title: 'The Bitcoin Standard',
      author: 'Saifedean Ammous',
      description: 'Explores the economic roots of Bitcoin and its role as the future of money. Bestseller with 4.7★ rating.',
      link: 'https://a.co/d/iIMH5rO',
      thumbnail: '/THeBitcoinStandard.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Mastering Bitcoin',
      author: 'Andreas M. Antonopoulos',
      description: 'The definitive technical guide to Bitcoin, updated for both beginners and developers.',
      link: 'https://a.co/d/5CLJaGw',
      thumbnail: '/MasterinBitcoin.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'The Little Book of Bitcoin: What You Need to Know that Wall Street Has Already Figured Out',
      author: 'Anthony Scaramucci (Author), Michael Saylor (Foreword)',
      description: 'Concise and approachable guide for everyday investors exploring Bitcoin\'s significance in financial markets.',
      link: 'https://a.co/d/0VSLce5',
      thumbnail: '/LittleBookofBitcoin.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Thank God for Bitcoin',
      author: 'Multiple Authors',
      description: 'A moral and spiritual case for Bitcoin, written by a group of Christian Bitcoin advocates.',
      link: 'https://a.co/d/5BKrNil',
      thumbnail: '/ThankGodforBitcoin.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Digital Gold',
      author: 'Nathaniel Popper',
      description: 'A narrative-driven history of Bitcoin\'s rise and its early pioneers in the crypto movement.',
      link: 'https://a.co/d/2zKoaQT',
      thumbnail: '/DigitalGold.jpeg',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
          {/* Videos Section */}
          <AnimateOnScroll type="fade-up" delay={100}>
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900"><span className="text-gradient">Videos</span></h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {resources.videos.map((video, index) => (
                  <a
                    key={index}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-xl overflow-hidden shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className="flex p-6 gap-6">
                      <div className="flex-shrink-0 w-1/3 flex flex-col">
                        <div className="p-3">
                          <Image
                            src={video.thumbnail}
                            alt={video.creator}
                            width={150}
                            height={150}
                            className="w-full aspect-square object-cover rounded-lg mb-4"
                            quality={85}
                            loading="lazy"
                          />
                          <div className="flex justify-center">
                            <div className="w-16 h-16 bg-white bg-opacity-95 rounded-full flex items-center justify-center animate-pulse group-hover:animate-none group-hover:scale-110 transition-all duration-300 shadow-lg border-2 border-blue-100">
                              <svg className="w-6 h-6 text-blue-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                            {video.title}
                          </h4>
                          <p className="text-green-600 font-medium mb-2">
                            {video.creator} • {video.duration}
                          </p>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          {/* Books Section */}
          <AnimateOnScroll type="fade-up" delay={200}>
            <div>
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900"><span className="text-gradient">Books</span></h3>
              </div>
              <div className="space-y-6">
                {/* First row - 3 books */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resources.books.slice(0, 3).map((book, index) => (
                    <a
                      key={index}
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white rounded-xl p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-[520px] w-full"
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-center mb-4">
                          <Image
                            src={book.thumbnail}
                            alt={book.title}
                            width={128}
                            height={192}
                            className="w-32 h-48 object-cover rounded-lg shadow-md"
                            quality={85}
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                            {book.title}
                          </h4>
                          <p className="text-purple-600 font-medium mb-1">
                            {book.author}
                          </p>
                          <p className="text-gray-600 mb-4 flex-1">
                            {book.description}
                          </p>
                          <div className="inline-flex items-center text-purple-600 group-hover:text-purple-500 font-medium transition-colors mt-auto">
                            <span>View on Amazon</span>
                            <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Second row - 2 books centered */}
                <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
                    {resources.books.slice(3, 5).map((book, index) => (
                      <a
                        key={index + 3}
                        href={book.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-xl p-6 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-[520px] w-full"
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-center justify-center mb-4">
                            <Image
                              src={book.thumbnail}
                              alt={book.title}
                              width={128}
                              height={192}
                              className="w-32 h-48 object-cover rounded-lg shadow-md"
                              quality={85}
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                              {book.title}
                            </h4>
                            <p className="text-purple-600 font-medium mb-1">
                              {book.author}
                            </p>
                            <p className="text-gray-600 mb-4 flex-1">
                              {book.description}
                            </p>
                            <div className="inline-flex items-center text-purple-600 group-hover:text-purple-500 font-medium transition-colors mt-auto">
                              <span>View on Amazon</span>
                              <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
