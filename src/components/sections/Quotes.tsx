import { AnimateOnScroll } from '../animation/AnimateOnScroll';

const quotes = [
  {
    text: "Gold needed trust — Bitcoin doesn&apos;t.",
    author: "Jack Mallers",
    color: "bg-blue-50 border-blue-200"
  },
  {
    text: "Bitcoin is the apex property of the human race.",
    author: "Michael Saylor",
    color: "bg-indigo-50 border-indigo-200"
  }
];

export default function Quotes() {
  return (
    <section id="quotes" className="pb-16 sm:pb-20 lg:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <AnimateOnScroll key={index} type="fade-up" delay={index * 100}>
              <div className={`${quote.color} rounded-xl p-8 shadow-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border`}>
                <div className="flex items-start">
                  <svg className="h-8 w-8 text-gray-400 mr-4 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                  </svg>
                  <div>
                    <blockquote className="text-lg text-gray-900 font-medium mb-4">
                      &ldquo;{quote.text}&rdquo;
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
    </section>
  );
} 