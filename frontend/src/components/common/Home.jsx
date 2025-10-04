import React from 'react';

const Home = ({ setActiveTab, onOpenLogin, onOpenSignup }) => {
  const features = [
    {
      title: "Early Detection",
      description: "AI-powered risk assessment to identify potential PCOS/PCOD before symptoms worsen.",
      icon: "🔍",
      color: "neon-purple"
    },
    {
      title: "Period Tracking",
      description: "Monitor your cycle, symptoms, and identify irregular patterns with smart insights.",
      icon: "📅",
      color: "neon-pink"
    },
    {
      title: "Lifestyle Recommendations",
      description: "Get personalized diet, exercise, and wellness plans tailored to your unique profile.",
      icon: "🥗",
      color: "aqua-blue"
    },
    {
      title: "Mental Health Support",
      description: "Access tools for stress management, mood tracking, and guided meditation sessions.",
      icon: "🧠",
      color: "neon-purple"
    },
    {
      title: "Doctor Finder",
      description: "Locate specialists near you for consultations and professional medical advice.",
      icon: "👩‍⚕️",
      color: "neon-pink"
    },
    {
      title: "Community Support",
      description: "Connect with others, share experiences, and access educational resources.",
      icon: "👭",
      color: "aqua-blue"
    }
  ];

  return (
    <div className="w-[90%] min-h-[80vh] mx-auto flex flex-col justify-center items-center text-center py-10">
      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-neon-purple neon-text mb-4">PCOS Guardian</h1>
        <p className="text-soft-white text-lg mb-8 max-w-2xl mx-auto">
          Your AI-powered companion for early detection and management of PCOS and PCOD. Take control of your health journey with personalized insights and support.
        </p>
        
        <button
          onClick={() => setActiveTab('assessment')}
          className="neon-button neon-button-blue text-lg px-8 py-3"
        >
          Start Early Detection Assessment
        </button>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button
            onClick={onOpenSignup}
            className="neon-button neon-button-pink text-base px-6 py-2"
          >
            Sign up
          </button>
          <button
            onClick={onOpenLogin}
            className="neon-button text-base px-6 py-2"
          >
            Log in
          </button>
        </div>
      </div>

      <div className="dashboard-grid w-full">
        {features.map((feature, idx) => (
          <div key={idx} className="neon-card hover:neon-border">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className={`font-semibold mb-3 text-xl text-${feature.color}`}>{feature.title}</h3>
            <p className="text-soft-white">{feature.description}</p>
            <button 
              onClick={() => setActiveTab(idx === 0 ? 'assessment' : idx === 1 ? 'tracker' : idx === 4 ? 'resources' : idx === 5 ? 'community' : 'home')}
              className="mt-4 text-sm text-aqua-blue hover:underline"
            >
              Learn more →
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 neon-card w-full max-w-4xl">
        <h2 className="text-2xl text-neon-pink mb-4">Why Early Detection Matters</h2>
        <p className="text-soft-white mb-6">
          Identifying PCOS/PCOD early can significantly improve treatment outcomes and quality of life. 
          Our AI-powered system analyzes your symptoms and health data to provide risk assessment before symptoms worsen.
        </p>
        <button
          onClick={() => setActiveTab('assessment')}
          className="neon-button neon-button-pink"
        >
          Check Your Risk Now
        </button>
      </div>
    </div>
  );
};

export default Home;