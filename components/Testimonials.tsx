
import React from 'react';

const testimonialsData = [
  {
    quote: "The personalized feedback on my writing tasks was a game-changer. I went from a 6.5 to an 8.0 in just one month! Highly recommended.",
    name: 'Priya Sharma',
    score: 'Band 8.0',
    avatar: 'https://picsum.photos/seed/woman1/100/100',
  },
  {
    quote: "I loved the flexible schedule for speaking practice. The tutors are incredibly patient and gave me the confidence I needed for the real test.",
    name: 'Chen Wei',
    score: 'Band 7.5',
    avatar: 'https://picsum.photos/seed/man1/100/100',
  },
  {
    quote: "The mock tests are exactly like the real IELTS exam. The AI scoring helped me identify my weak areas and focus my efforts effectively.",
    name: 'Fatima Al-Jamil',
    score: 'Band 8.5',
    avatar: 'https://picsum.photos/seed/woman2/100/100',
  },
];

const QuoteIcon = () => (
    <svg className="w-10 h-10 text-light-darker" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
)

const TestimonialCard: React.FC<{ quote: string; name: string; score: string; avatar: string; }> = ({ quote, name, score, avatar }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col h-full">
    <QuoteIcon />
    <blockquote className="text-slate-600 my-4 flex-grow">"{quote}"</blockquote>
    <footer className="flex items-center mt-auto">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full mr-4 object-cover" />
      <div>
        <p className="font-bold text-primary">{name}</p>
        <p className="text-accent font-semibold">{score}</p>
      </div>
    </footer>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-light py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Success Stories from Our Students</h2>
          <p className="text-lg text-slate-600">
            Hear from students who have achieved their dreams with our help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
