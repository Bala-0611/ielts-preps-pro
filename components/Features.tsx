import React from 'react';
import SpeakingIcon from './icons/SpeakingIcon';
import MockTestIcon from './icons/MockTestIcon';
import AIScoreIcon from './icons/AIScoreIcon';

const featuresData = [
  {
    icon: <SpeakingIcon className="w-10 h-10 text-accent" />,
    title: 'Live Speaking Practice',
    description: 'Practice with certified tutors and AI to build confidence and fluency. Get instant feedback on your pronunciation and grammar.',
  },
  {
    icon: <MockTestIcon className="w-10 h-10 text-accent" />,
    title: 'Realistic Mock Tests',
    description: 'Experience the real test environment with our full-length mock tests covering all four modules. Track your progress over time.',
  },
  {
    icon: <AIScoreIcon className="w-10 h-10 text-accent" />,
    title: 'AI Band Score Analysis',
    description: 'Submit your writing and speaking samples to our advanced AI for an estimated band score and detailed performance analysis.',
  },
];

// FIX: Replaced JSX.Element with React.ReactElement to resolve namespace error.
const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
    <div className="mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Prep Pro?</h2>
          <p className="text-lg text-slate-600">
            We provide cutting-edge tools and expert resources to ensure you are fully prepared for success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
