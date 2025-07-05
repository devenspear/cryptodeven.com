import { AnimateOnScroll } from '../animation/AnimateOnScroll';

const thoughtLeaders = [
  {
    name: "Michael Saylor",
    focus: "Bitcoin treasury",
    handle: "@saylor",
    link: "https://twitter.com/saylor",
    description: "MicroStrategy CEO and Bitcoin advocate",
    initials: "MS",
    color: "bg-indigo-500"
  },
  {
    name: "Jack Mallers",
    focus: "Lightning payments",
    handle: "@jackmallers",
    link: "https://twitter.com/jackmallers",
    description: "Strike CEO and Lightning Network pioneer",
    initials: "JM",
    color: "bg-blue-500"
  },
  {
    name: "Cathie Wood",
    focus: "Disruptive investing",
    handle: "@CathieDWood",
    link: "https://twitter.com/CathieDWood",
    description: "ARK Invest CEO and innovation investor",
    initials: "CW",
    color: "bg-purple-500"
  },
  {
    name: "Robert Breedlove",
    focus: "Monetary theory",
    handle: "@Breedlove22",
    link: "https://twitter.com/Breedlove22",
    description: "Philosopher and Bitcoin educator",
    initials: "RB",
    color: "bg-green-500"
  },
  {
    name: "Natalie Brunell",
    focus: "Bitcoin journalism",
    handle: "@natbrunell",
    link: "https://twitter.com/natbrunell",
    description: "Bitcoin journalist and podcast host",
    initials: "NB",
    color: "bg-pink-500"
  },
  {
    name: "Raoul Pal",
    focus: "Macro + crypto",
    handle: "@RaoulGMI",
    link: "https://twitter.com/RaoulGMI",
    description: "Real Vision CEO and macro investor",
    initials: "RP",
    color: "bg-orange-500"
  },
  {
    name: "Balaji Srinivasan",
    focus: "Network states",
    handle: "@balajis",
    link: "https://twitter.com/balajis",
    description: "Entrepreneur and technologist",
    initials: "BS",
    color: "bg-teal-500"
  }
];

const quotes = [
  {
    text: "Gold needed trust — Bitcoin doesn't.",
    author: "Jack Mallers",
    color: "bg-blue-50 border-blue-200"
  },
  {
    text: "Bitcoin is the apex property of the human race.",
    author: "Michael Saylor",
    color: "bg-indigo-50 border-indigo-200"
  }
];

export default function ThoughtLeaders() {
  return (
    <section id="thought-leaders" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Thought-Leader</span> Gallery
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Real voices, real conviction. Tap a card to explore their latest insights.
          </p>
        </AnimateOnScroll>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {thoughtLeaders.map((leader, index) => (
              <AnimateOnScroll key={leader.name} type="fade-up" delay={index * 50}>
                <div className="bg-white rounded-xl shadow-medium hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1 border border-gray-100">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${leader.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">
                          {leader.initials}
                        </span>
                      </div>
                      <a
                        href={leader.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-500 transition-colors"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {leader.name}
                    </h3>
                    
                    <p className="text-indigo-600 font-medium mb-2">
                      {leader.focus}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-3">
                      {leader.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="font-mono">{leader.handle}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>

        {/* Quotes Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <AnimateOnScroll key={index} type="fade-up" delay={700 + index * 100}>
                <div className={`${quote.color} rounded-xl p-8 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border`}>
                  <div className="flex items-start">
                    <svg className="h-8 w-8 text-gray-400 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                    </svg>
                    <div>
                      <blockquote className="text-lg text-gray-900 font-medium mb-4">
                        "{quote.text}"
                      </blockquote>
                      <cite className="text-indigo-600 font-semibold text-sm">
                        —{quote.author}
                      </cite>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
