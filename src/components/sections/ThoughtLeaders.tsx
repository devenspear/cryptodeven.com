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
  },
  {
    name: "Lyn Alden",
    focus: "Macro strategy",
    handle: "@LynAldenContact",
    link: "https://twitter.com/LynAldenContact",
    description: "Investment strategist known for her data-driven Bitcoin theses and long-term macroeconomic insights",
    initials: "LA",
    color: "bg-red-500"
  }
];

export default function ThoughtLeaders() {
  return (
    <section id="thought-leaders" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll type="fade-up" className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            <span className="text-gradient">Thought</span> Leaders
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Real voices, real conviction. Tap a card to explore their latest insights.
          </p>
        </AnimateOnScroll>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {thoughtLeaders.map((leader, index) => (
              <AnimateOnScroll key={leader.name} type="fade-up" delay={index * 50}>
                <a
                  href={leader.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-medium hover:shadow-lg transition-all duration-300 overflow-hidden group hover:-translate-y-1 border border-gray-100 cursor-pointer h-full"
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${leader.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold text-sm">
                          {leader.initials}
                        </span>
                      </div>
                      <div className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {leader.name}
                    </h3>
                    
                    <p className="text-indigo-600 font-medium mb-2">
                      {leader.focus}
                    </p>
                    
                    <p className="text-gray-600 text-sm mb-3 flex-grow">
                      {leader.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mt-auto">
                      <span className="font-mono">{leader.handle}</span>
                    </div>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
